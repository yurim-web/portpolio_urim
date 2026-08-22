import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect, useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/portfolio.css';
import { portfolio_sections } from '../data/portfolioData';

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  const portfolioItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 1024);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 제목 애니메이션
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // 세로 쌓기 애니메이션 (데스크톱에서만)
    if (horizontalContainerRef.current && !isMobile) {
      const portfolioItems = portfolioItemsRef.current.filter(Boolean);

      // 각 슬라이드별 오프셋 (책 페이지처럼 엣지가 계단식으로 보이도록)
      // ⚠️ 이 두 상수를 바꾸면 src/styles/portfolio.css의 .portfolio_content padding-right 주석도
      //    같이 확인할 것 — 그 패딩은 여기서 계산되는 "가장 가까운 카드가 덮기 시작하는 지점"보다
      //    콘텐츠가 항상 왼쪽에 있도록 맞춰둔 값이라, 슬라이드 수/오프셋이 바뀌면 함께 어긋난다.
      const maxOffset = 97;
      const step = 2.5;
      const totalItems = portfolioItems.length;
      const getSlideOffset = (idx: number) => maxOffset - (totalItems - 1 - idx) * step;

      // 모든 섹션을 초기에 살짝 나온 상태로 설정
      portfolioItems.forEach((item, index) => {
        if (item) {
          if (index === 0) {
            gsap.set(item, { opacity: 1, x: '0%', y: '0%', zIndex: index + 1 });
          } else {
            if (isMobile) {
              gsap.set(item, {
                opacity: 1,
                x: '0%',
                y: '100%',
                zIndex: index + 1,
              });
            } else {
              // 각 슬라이드마다 다른 오프셋으로 책 페이지 효과
              gsap.set(item, {
                opacity: 1,
                x: `${getSlideOffset(index)}%`,
                y: '0%',
                zIndex: index + 1,
              });
            }
          }
        }
      });

      // 초기 상태를 강제로 유지하기 위한 지연
      setTimeout(() => {
        portfolioItems.forEach((item, index) => {
          if (item && index > 0) {
            if (isMobile) {
              gsap.set(item, { y: '100%' });
            } else {
              gsap.set(item, { x: `${getSlideOffset(index)}%` });
            }
          }
        });
      }, 100);

      // 전체 포트폴리오 섹션을 고정하고 내부에서 애니메이션 진행
      if (sectionRef.current) {
        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${portfolioItems.length * window.innerHeight}px`, // 섹션 개수만큼 스크롤 거리
          pin: true,
          pinSpacing: true, // true로 변경하여 다음 섹션으로 넘어갈 수 있도록 함
          onUpdate: self => {
            const progress = self.progress;

            // 각 섹션이 순서대로 완전히 나타나도록 애니메이션
            portfolioItems.forEach((item, index) => {
              if (!item) return;

              if (index === 0) {
                gsap.set(item, { x: '0%', y: '0%' });
                return;
              }

              const sectionStart = (index - 1) / (portfolioItems.length - 1);
              const sectionEnd = index / (portfolioItems.length - 1);

              if (progress >= sectionStart && progress <= sectionEnd) {
                const sectionProgress = (progress - sectionStart) / (sectionEnd - sectionStart);

                if (isMobile) {
                  const yPosition = 100 * (1 - sectionProgress);
                  gsap.to(item, {
                    y: `${yPosition}%`,
                    duration: 0.1,
                    ease: 'none',
                    overwrite: true,
                  });
                } else {
                  const slideOffset = getSlideOffset(index);
                  const xPosition = slideOffset * (1 - sectionProgress);
                  gsap.to(item, {
                    x: `${xPosition}%`,
                    duration: 0.1,
                    ease: 'none',
                    overwrite: true,
                  });
                }
              } else if (progress < sectionStart) {
                if (isMobile) {
                  gsap.set(item, { y: '100%' });
                } else {
                  gsap.set(item, { x: `${getSlideOffset(index)}%` });
                }
              } else {
                if (isMobile) {
                  gsap.set(item, { y: '0%' });
                } else {
                  gsap.set(item, { x: '0%' });
                }
              }
            });
          },
        });
      }

      // 각 섹션의 콘텐츠 애니메이션
      portfolioItems.forEach(item => {
        if (!item) return;

        const leftColumn = item.querySelector('.portfolio_left_column');
        const rightColumn = item.querySelector('.portfolio_right_column');

        if (!isMobile) {
          if (leftColumn) {
            gsap.fromTo(
              leftColumn,
              { opacity: 0, x: -30 },
              {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: 'power2.out',
                delay: 0.3,
                scrollTrigger: {
                  trigger: item,
                  start: 'left 80%',
                  end: 'left 20%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }

          if (rightColumn) {
            gsap.fromTo(
              rightColumn,
              { opacity: 0, x: 30 },
              {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: 'power2.out',
                delay: 0.5,
                scrollTrigger: {
                  trigger: item,
                  start: 'left 80%',
                  end: 'left 20%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }
        } else {
          if (leftColumn) {
            gsap.set(leftColumn, { opacity: 1 });
          }
          if (rightColumn) {
            gsap.set(rightColumn, { opacity: 1 });
          }
        }
      });
    } else if (horizontalContainerRef.current && isMobile) {
      const portfolioItems = portfolioItemsRef.current.filter(Boolean);
      portfolioItems.forEach((item, index) => {
        if (item) {
          gsap.set(item, { opacity: 1, x: '0%', y: '0%', zIndex: index + 1 });
        }
      });
    }

    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 1024;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    window.scrollToPortfolioProject = (projectName: string) => {
      const projectIndex = portfolio_sections.findIndex(
        section => section.subtitle === projectName
      );

      if (projectIndex !== -1 && scrollTriggerRef.current) {
        const trigger = scrollTriggerRef.current;
        const triggerStart = trigger.start;
        const triggerEnd = trigger.end;

        const targetProgress = projectIndex / (portfolio_sections.length - 1);

        const scrollDistance = triggerStart + targetProgress * (triggerEnd - triggerStart);

        window.scrollTo({
          top: scrollDistance,
          behavior: 'smooth',
        });
      }
    };

    return () => {
      delete window.scrollToPortfolioProject;
    };
  }, []);

  const renderPortfolioContent = (section: (typeof portfolio_sections)[0]) => (
    <div className="portfolio_content">
      <div className="portfolio_left_column">
        <div className="portfolio_year">{section.year}</div>
        <h2 className="portfolio_section_title">{section.title}</h2>
        <h3 className="portfolio_section_subtitle">{section.subtitle}</h3>
        <div className="portfolio_info_row">
          <span className="portfolio_info_label">제작기간</span>
          <span className="portfolio_info_value">{section.period}</span>
        </div>
        <div className="portfolio_info_row">
          <span className="portfolio_info_label">참여도</span>
          <span className="portfolio_info_value">{section.participation}</span>
        </div>
        <div className="portfolio_info_row">
          <span className="portfolio_info_label">타입</span>
          <span className="portfolio_info_value">{section.type}</span>
        </div>
        <div className="portfolio_info_row">
          <span className="portfolio_info_label">내용</span>
          <span className="portfolio_info_value">{section.content}</span>
        </div>
        {section.tech_stack && (
          <div className="portfolio_tech_stack">
            {section.tech_stack.map((tech, techIndex) => (
              <span key={techIndex} className="portfolio_tech_pill">
                <img src={tech.icon} alt={tech.name} className="portfolio_tech_icon" />
                <span className="portfolio_tech_name">{tech.name}</span>
              </span>
            ))}
          </div>
        )}
        {(section.link || section.github_link) && (
          <div className="portfolio_link_container">
            {section.link && (
              <a
                href={section.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio_link_button"
              >
                {section.link_label ?? 'LINK'}
              </a>
            )}
            {section.github_link && (
              <a
                href={section.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio_github_button"
              >
                GITHUB
              </a>
            )}
          </div>
        )}
      </div>
      <div className="portfolio_right_column">
        {/* link가 없는 프로젝트(예: 배포 링크 없는 냉부)는 같은 이미지를 클릭 불가능한 div로만 감싼다 */}
        {(() => {
          const image = (
            <img src={section.image} alt={section.title} className="portfolio_section_image" />
          );
          return section.link ? (
            <a
              href={section.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio_image_container"
            >
              {image}
            </a>
          ) : (
            <div className="portfolio_image_container">{image}</div>
          );
        })()}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="portfolio_section">
      <div className="portfolio_container">
        {isMobile ? (
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            // 슬라이드마다 텍스트·이미지 길이가 달라서, 스와이퍼 컨테이너 높이를
            // 활성 슬라이드 콘텐츠에 맞게 자동 조절 (안 하면 고정 높이로 잘리거나
            // 빈 여백이 남음 — 냉부 슬라이드 이미지가 잘려 보이던 버그의 원인)
            autoHeight
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: null,
            }}
            pagination={{ clickable: true }}
            className="portfolio_swiper"
          >
            {portfolio_sections.map(section => (
              <SwiperSlide key={section.id}>
                <div
                  className="portfolio_item"
                  data-project={section.subtitle}
                  style={{ backgroundColor: section.bgColor, color: section.textColor }}
                >
                  {renderPortfolioContent(section)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div ref={horizontalContainerRef} className="portfolio_horizontal_container">
            {portfolio_sections.map((section, index) => (
              <div
                key={section.id}
                ref={el => (portfolioItemsRef.current[index] = el)}
                className="portfolio_item"
                data-project={section.subtitle}
                style={{ backgroundColor: section.bgColor, color: section.textColor }}
              >
                {renderPortfolioContent(section)}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
