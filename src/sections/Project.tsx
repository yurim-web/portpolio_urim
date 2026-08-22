import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/project.css';

/**
 * 클릭 가능한 비-버튼 요소(div/li)에 마우스·키보드 활성화를 동시에 부여하는 헬퍼.
 * Enter/Space 입력을 클릭과 동일하게 처리해 키보드 사용자도 접근할 수 있게 한다.
 * (work_card, work_project_item 두 곳에서 거의 같은 onKeyDown 로직이 중복되던 것을 통합)
 */
const activateProps = (onActivate: (e?: React.SyntheticEvent) => void) => ({
  role: 'button' as const,
  tabIndex: 0,
  onClick: onActivate,
  onKeyDown: (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onActivate(e);
    }
  },
});

// Project 섹션 상단의 카테고리 개요 카드 3개 (클릭 시 아래 상세 섹션으로 스크롤 이동)
const work_categories = [
  {
    id: 1,
    title: '01 Professional Projects',
    projects: ['ReviewX', 'ReportingX.', 'Herzion Shop'],
    bgColor: '#ffffff',
    targetSection: 'professional',
  },
  {
    id: 2,
    title: '02 Learning Projects',
    projects: ['냉부 | Recipe Community', 'Waveyy', 'Groundplace', 'IMELE', 'SAINT LAURENT'],
    bgColor: '#ffffff',
    targetSection: 'portfolio',
  },
  {
    id: 3,
    title: '03 UI/UX Design',
    projects: [
      'Addmoa 기업 홈페이지',
      '뷰티 정보 홈페이지',
      'LH 전세임대 안내 사이트',
      '퍼스널 컬러 테스트 앱',
      '전기요금 계산기 앱',
      '햇살론 대출 안내 앱',
      '블로그 게시글 배너 디자인',
      '온라인 광고 배너 디자인',
      '구글 애즈 배너 디자인',
    ],
    bgColor: '#ffffff',
    targetSection: 'web_design',
  },
];

const Project = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    // 화면 크기 확인 (태블릿 가로 모드도 포함)
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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
            start: 'top 100%', // Skills 섹션이 완전히 지나간 후 시작
            end: 'bottom 0%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // 카드들 애니메이션
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: 'top 100%', // Skills 섹션이 완전히 지나간 후 시작
              end: 'bottom 0%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // 섹션으로 스크롤하는 함수
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // 특정 프로젝트로 스크롤하는 함수
  const scrollToSpecificProject = (projectName: string) => {
    // portfolio 섹션으로 먼저 이동
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // 약간의 지연 후 GSAP ScrollTrigger를 사용하여 해당 프로젝트로 이동
      setTimeout(() => {
        if (window.scrollToPortfolioProject) {
          window.scrollToPortfolioProject(projectName);
        }
      }, 800); // 스크롤 애니메이션이 완료될 때까지 충분한 시간 대기
    }
  };

  const renderCard = (category: (typeof work_categories)[0], index: number) => {
    const isLearningCategory = category.targetSection === 'portfolio';

    // 카테고리 카드 전체를 클릭했을 때: Learning은 첫 프로젝트로, 나머지는 섹션 상단으로 이동
    const handleCardActivate = () => {
      if (isLearningCategory) {
        scrollToSpecificProject(category.projects[0]);
      } else {
        scrollToSection(category.targetSection);
      }
    };

    return (
      <div
        key={category.id}
        ref={el => (cardsRef.current[index] = el)}
        className="work_card"
        style={{ backgroundColor: category.bgColor } as React.CSSProperties}
        {...activateProps(handleCardActivate)}
      >
        <h2 className="work_card_title">
          <span className="work_card_number">{category.title.split(' ')[0]}</span>
          <span className="work_card_text">{category.title.split(' ').slice(1).join(' ')}</span>
        </h2>
        <ul className="work_project_list">
          {category.projects.map((project, projectIndex) => {
            // 프로젝트 개별 항목 클릭: 카드 전체 클릭 이벤트로 전파되지 않게 stopPropagation
            const handleItemActivate = (e?: React.SyntheticEvent) => {
              e?.stopPropagation();
              if (isLearningCategory) {
                scrollToSpecificProject(project);
              } else {
                scrollToSection(category.targetSection);
              }
            };

            return (
              <li
                key={projectIndex}
                className="work_project_item"
                {...activateProps(handleItemActivate)}
              >
                {project}
              </li>
            );
          })}
        </ul>
        <div className="work_cursor_icon">
          <img src={`${process.env.PUBLIC_URL}/hover_icn.svg`} alt="" />
          <span className="work_cursor_text">click!</span>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="work_section">
      <div className="work_container">
        <h2 ref={titleRef} className="work_title">
          Project.
        </h2>

        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            className="work_swiper"
          >
            {work_categories.map((category, index) => (
              <SwiperSlide key={category.id}>{renderCard(category, index)}</SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="work_grid">
            {work_categories.map((category, index) => renderCard(category, index))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
