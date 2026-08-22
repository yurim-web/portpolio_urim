import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect, useState } from 'react';

import '../styles/web_design.css';
import { web_design_projects, WebDesignProject } from '../data/webDesignData';

const WebDesign = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<WebDesignProject | null>(null);

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

    // 카드들 순차 등장 애니메이션
    if (gridRef.current) {
      const cards = cardRefs.current.filter(Boolean);

      // 초기 상태 설정
      gsap.set(cards, {
        opacity: 0,
        y: 60,
        scale: 0.8,
      });

      // 카드들이 순차적으로 나타나는 애니메이션
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // 모달 열기 함수
  const openModal = (project: WebDesignProject) => {
    setSelectedImage(project.image);
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // 스크롤 방지
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setSelectedImage(null);
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // 스크롤 복원
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage]);

  return (
    <section ref={sectionRef} className="web_design_section">
      <div className="web_design_container">
        <h2 ref={titleRef} className="web_design_title">
          UI/UX DESIGN.
        </h2>

        <div ref={gridRef} className="web_design_grid">
          {web_design_projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => (cardRefs.current[index] = el)}
              className="web_design_card"
              onClick={() => openModal(project)}
            >
              <div className="web_design_card_image_container">
                <img src={project.image} alt={project.title} className="web_design_card_image" />
                <div className="web_design_card_overlay">
                  <div className="web_design_card_info">
                    <h3 className="web_design_card_title">{project.title}</h3>
                    <p className="web_design_card_description">{project.description}</p>
                    <div className="web_design_click_hint">CLICK</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 이미지 모달 */}
      {selectedImage && selectedProject && (
        <div
          className="web_design_modal"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal_title"
        >
          <div className="web_design_modal_content" onClick={e => e.stopPropagation()}>
            <button className="web_design_modal_close" onClick={closeModal} aria-label="모달 닫기">
              ×
            </button>
            <div className="web_design_modal_image_container">
              <img
                src={selectedImage}
                alt={selectedProject.title}
                className="web_design_modal_image"
              />
            </div>
            <div className="web_design_modal_info">
              <div className="web_design_modal_meta">
                <span className="web_design_modal_year">{selectedProject.year}</span>
                <span className="web_design_modal_category">{selectedProject.category}</span>
              </div>
              <h3 id="modal_title" className="web_design_modal_title">
                {selectedProject.title}
              </h3>
              <p className="web_design_modal_description">{selectedProject.description}</p>
              <div className="web_design_modal_tech_stack">
                {selectedProject.tech_stack.map((tech: string, techIndex: number) => (
                  <span key={techIndex} className="web_design_modal_tech_pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WebDesign;
