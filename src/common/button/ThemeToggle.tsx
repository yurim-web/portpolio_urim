/**
 * 다크모드 토글 + TOP 버튼 (화면 우측 하단 고정)
 *
 * - LIGHT/DARK 모드 전환 스위치
 * - TOP 버튼 클릭 시 페이지 최상단으로 부드러운 스크롤 이동
 */
import React from 'react';

import { useTheme } from '../../contexts/ThemeContext';
import '../styles/theme_toggle.css';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="theme_toggle_container">
      <span className="theme_toggle_label">LIGHT</span>
      <button
        className={`theme_toggle_button ${isDarkMode ? 'dark_mode' : 'light_mode'}`}
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className="theme_toggle_circle" />
      </button>
      <button
        type="button"
        className="theme_toggle_bottom"
        onClick={scrollToTop}
        aria-label="맨 위로 이동"
      >
        <span className="theme_toggle_bottom_text">TOP</span>
      </button>
    </div>
  );
};

export default ThemeToggle;
