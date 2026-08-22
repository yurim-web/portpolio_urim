import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect } from 'react';

import GitHubLink from '../common/GitHubLink';
import ResumeLink from '../common/ResumeLink';
import '../styles/contact.css';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 전체 컨테이너 애니메이션 - 아래에서 위로 자연스럽게 올라오기
    if (sectionRef.current) {
      gsap.fromTo(
        '.contact_container',
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="contact_section">
        {/* 배경 블러 효과 */}
        <div className="contact_blur_1" />
        <div className="contact_blur_2" />
        <div className="contact_blur_3" />
        <div className="contact_blur_4" />

        <div className="contact_container">
          <div className="contact_content">
            {/* 왼쪽 - 연락처 정보 */}
            <div className="contact_info">
              <div className="contact_title">
                <span className="contact_sparkle">✨</span>
                <h2>Contact.</h2>
              </div>
              <p className="contact_subtitle">I HOPE YOU ENJOY MY PROJECT</p>

              <div className="contact_details">
                <div className="contact_item">
                  <span className="contact_icon">✉️</span>
                  <span>lyl5152@naver.com</span>
                </div>

                <div className="contact_social">
                  <GitHubLink
                    size={24}
                    className="contact_social_link"
                    iconClassName="contact_social_icon"
                  />
                  <a href="mailto:lyl5152@naver.com" className="contact_mail_btn">
                    <span>메일보내기</span>
                    <div className="mail_btn_icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M6 12L10 8L6 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                  <ResumeLink className="contact_mail_btn contact_resume_btn">
                    <span>경력기술서</span>
                    <div className="mail_btn_icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M6 12L10 8L6 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </ResumeLink>
                </div>

                {/* Thank you 메시지 */}
                <div className="contact_thank_you">
                  <p>
                    Thank you <span>😊</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 저작권 표시 - 화면 맨 아래 */}
      <div className="contact_copyright_section">
        <p className="contact_copyright_text">© 2026 yurim. All rights reserved.</p>
      </div>
    </>
  );
};

export default Contact;
