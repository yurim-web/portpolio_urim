import '../styles/main_section.css';

const Main = () => {
  return (
    <main className="main">
      <section id="main" className="main_section">
        <div className="blur blur_1" />
        <div className="blur blur_2" />
        <div className="blur blur_3" />
        <div className="blur blur_4" />
        <div className="main_container">
          <h1 className="main_title">
            YURIM'S
            <br />
            PORTFOLIO
          </h1>
          <p className="main_description">
            디자인 경험과 프론트엔드 실무를 바탕으로, 백엔드까지 확장하고 있는 웹 개발자
            이유림입니다.
            <br />
            사용자 관점의 UI 구현과 원활한 협업을 통해 완성도 높은 웹 서비스를 만들어갑니다.
          </p>
          <p className="main_subtext">Frontend Experience · Backend Learning</p>
        </div>
      </section>
    </main>
  );
};

export default Main;
