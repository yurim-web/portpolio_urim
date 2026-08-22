/**
 * 스킬 카드 리스트 컴포넌트
 *
 * skillsData.ts에서 데이터를 가져와 각 스킬을 3D 카드로 렌더링합니다.
 * - 스크롤 시 GSAP ScrollTrigger로 3D 회전 + 페이드인 애니메이션
 * - 토글 버튼 클릭 시 해당 카드 확대, 나머지 축소 효과
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

import { skillList } from '../../data/skillsData';
import '../../styles/skills.css';

import StrengthContents from './StrengthContents';

const StrengthContentsBox = ({ activeSkill }: { activeSkill: string | null }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // 초기 애니메이션 설정
    const validCards = cardsRef.current.filter(Boolean);
    if (validCards.length > 0) {
      gsap.set(validCards, {
        rotationY: 60,
        opacity: 0,
        scale: 0.9,
        y: 80,
        z: -100,
      });
    }

    // 각 카드별로 개별 스크롤 트리거 애니메이션
    cardsRef.current.forEach(card => {
      if (card) {
        // 메인 3D 애니메이션
        gsap.to(card, {
          rotationY: 0,
          opacity: 1,
          scale: 1,
          y: 0,
          z: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 15%',
            scrub: 1.2,
            toggleActions: 'play none none reverse',
          },
        });

        // 부드러운 회전 효과
        gsap.to(card, {
          rotationX: 2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1,
            toggleActions: 'play none none reverse',
          },
        });
      }
    });

    // 전체 컨테이너 애니메이션
    gsap.fromTo(
      containerRef.current,
      {
        y: 30,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          end: 'top 20%',
          scrub: 1.5,
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (!activeSkill) return;

    // 활성 스킬에 따른 카드 애니메이션
    const activeIndex = skillList.findIndex(skill => skill.name === activeSkill);
    if (activeIndex !== -1 && cardsRef.current[activeIndex]) {
      gsap.to(cardsRef.current[activeIndex], {
        scale: 1.05,
        rotationY: 5,
        duration: 0.3,
        ease: 'power2.out',
      });

      // 다른 카드들은 살짝 축소
      cardsRef.current.forEach((card, index) => {
        if (index !== activeIndex && card) {
          gsap.to(card, {
            scale: 0.95,
            opacity: 0.7,
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });
    } else {
      // 모든 카드를 원래 상태로
      gsap.to(cardsRef.current.filter(Boolean), {
        scale: 1,
        rotationY: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [activeSkill]);

  return (
    <div ref={containerRef} className="strength_content_container">
      {skillList.map((skill, index) => {
        const isNewCategory = index === 0 || skillList[index - 1].category !== skill.category;
        return (
          <React.Fragment key={skill.name}>
            {isNewCategory && (
              <div className="strength_category_header">
                <span className="strength_category_title">{skill.category}</span>
              </div>
            )}
            <div ref={el => (cardsRef.current[index] = el)} className="strength_card_wrapper">
              <StrengthContents contents={skill.description} skill={skill.name} img={skill.img} />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StrengthContentsBox;
