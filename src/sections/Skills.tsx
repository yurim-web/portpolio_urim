import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useState, useEffect, useRef } from 'react';

import StrengthContentsBox from '../common/box/StrengthContentsBox';
import StrengthToggleBox from '../common/box/StrengthToggleBox';
import '../styles/skills.css';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleSkillChange = (skill: string) => {
    setActiveSkill(activeSkill === skill ? null : skill);
  };

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <article ref={sectionRef} className="strength">
      <h2 ref={titleRef} className="strength_title">
        Strength.
      </h2>
      <div className="strength_toggle_wrapper">
        <StrengthToggleBox activeSkill={activeSkill} onSkillChange={handleSkillChange} />
      </div>
      <StrengthContentsBox activeSkill={activeSkill} />
    </article>
  );
};

export default Skills;
