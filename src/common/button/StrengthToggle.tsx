import React from 'react';
import '../../styles/skills.css';

interface StrengthToggleProps {
  strength: string;
  isActive: boolean;
  onClick: (skill: string) => void;
}

const StrengthToggle: React.FC<StrengthToggleProps> = ({ strength, isActive, onClick }) => {
  return (
    <button
      type="button"
      className={`strength_toggle ${isActive ? 'active' : ''}`}
      onClick={() => onClick(strength)}
      aria-pressed={isActive}
    >
      {strength}
    </button>
  );
};

export default StrengthToggle;
