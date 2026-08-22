/**
 * 포트폴리오 루트 컴포넌트
 *
 * 각 섹션은 id를 가지며, 앵커 내비게이션(#about, #strength 등)으로 이동합니다.
 * ThemeProvider(다크모드)와 SectionProvider(섹션 추적)가 전체를 감쌉니다.
 * ResumeToggle(도트 네비게이터)과 ThemeToggle(다크모드 스위치)은 화면에 고정 표시됩니다.
 */
import React from 'react';

import ResumeToggle from './common/button/ResumeToggle';
import ThemeToggle from './common/button/ThemeToggle';
import { SectionProvider } from './contexts/SectionContext';
import { ThemeProvider } from './contexts/ThemeContext';
import About from './sections/About';
import Contact from './sections/Contact';
import Header from './sections/Header';
import Main from './sections/Main';
import Portfolio from './sections/Portfolio';
import ProfessionalProjects from './sections/ProfessionalProjects';
import Project from './sections/Project';
import Skills from './sections/Skills';
import WebDesign from './sections/WebDesign';

function App() {
  return (
    <ThemeProvider>
      <SectionProvider>
        <div className="App">
          <Header />
          <Main />
          <div id="about">
            <About />
          </div>
          <div id="strength">
            <Skills />
          </div>
          <div id="project">
            <Project />
          </div>
          <div id="professional">
            <ProfessionalProjects />
          </div>
          <div id="portfolio">
            {/* 냉부(Training Project)는 portfolioData.ts의 portfolio_sections 첫 번째 항목으로 포함되어
                Learning Projects 캐러셀 안에서 동일한 카드 포맷으로 노출됨 */}
            <Portfolio />
          </div>
          <div id="web_design">
            <WebDesign />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <ResumeToggle />
          <ThemeToggle />
        </div>
      </SectionProvider>
    </ThemeProvider>
  );
}

export default App;
