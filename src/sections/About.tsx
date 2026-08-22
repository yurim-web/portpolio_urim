import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/info_section.css';

const About = () => {
  useScrollAnimation();
  return (
    <section className="about_section">
      <div className="about_container">
        <h2 className="about_title">ABOUT ME</h2>
        <div className="about_content">
          <div className="profile_img_container">
            <img
              src={`${process.env.PUBLIC_URL}/myimg.png`}
              alt="프로필사진"
              className="profile_img"
            />
          </div>
          <div className="about_text">
            <h3 className="name">Yurim Lee</h3>
            <p className="greeting">
              UI/UX 디자인 경험과 프론트엔드 개발 실무 경험을 보유한{' '}
              <span className="highlight_tech">웹 개발자</span> 이유림입니다.
            </p>
            <p className="description">
              HTML, CSS, JavaScript 기반의 UI 구현과 반응형 웹 개발에 강점이 있으며,{' '}
              <span className="highlight_tech">React와 Next.js</span>를 활용한 프론트엔드 프로젝트
              경험을 보유하고 있습니다.
            </p>
            <p className="description">
              기획자·디자이너·백엔드 개발자와 협업하며 실제 웹 서비스 개발 과정을 경험했으며, 현재는{' '}
              <span className="highlight_tech">Java, Spring Boot, SQL, AWS</span> 기반의 백엔드
              개발을 학습하며 웹 서비스 전반에 대한 이해를 확장하고 있습니다.
            </p>
          </div>
        </div>

        <div className="about_info">
          <div className="info_column">
            <h4 className="info_title">PERSONAL INFO</h4>
            <ul className="info_list">
              <li>
                <span className="info_icon">📧</span>
                Email: lyl5152@naver.com
              </li>
              <li>
                <span className="info_icon">📍</span>
                Location: Incheon, Korea
              </li>
            </ul>

            <h4 className="info_title" style={{ marginTop: '40px' }}>
              WORK EXPERIENCE
            </h4>
            <ul className="info_list">
              <li>2025.04 - 2026.04 | (주)청명종합광고기획 Frontend Developer</li>
              <li>2024.01 - 2024.08 | (주)쇼엠 UI/UX Designer</li>
              <li>2022.03 - 2023.06 | (주)오라코퍼레이션 Contents Team</li>
            </ul>
          </div>
          <div className="info_column">
            <h4 className="info_title">LICENSE & EDUCATION</h4>
            <ul className="info_list">
              <li>
                2026.05.14 - 2026.11.16 | 주식회사 멋쟁이사자처럼 참여기업 프로젝트 기반 백엔드
                개발자 양성과정 · 수강 중
              </li>
              <li>정보처리기사 — 2026.09 합격 발표 예정</li>
              <li>2024.10.22 - 2024.12.10 | 코리아IT아카데미 웹(퍼블리셔) 프론트엔드 양성과정</li>
              <li>2023.09 | 컴퓨터그래픽스운용기능사 취득</li>
              <li>
                2019.03 - 2023.08 | 청운대학교 인천캠퍼스 멀티미디어학과 · 융합학과 복수전공 졸업
              </li>
              <li>2020.09 | GTQ 그래픽기술자격 1급 취득</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="infinite_scroll_container" aria-hidden="true">
        <div className="infinite_scroll_text">
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
          <span>YURIM'S PORTFOLIO</span>
        </div>
      </div>
    </section>
  );
};

export default About;
