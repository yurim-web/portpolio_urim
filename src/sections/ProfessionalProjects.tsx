import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect } from 'react';

import '../styles/professional_projects.css';
import { professional_projects } from '../data/portfolioData';

const ProfessionalProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    // 프로젝트 카드들 애니메이션
    projectsRef.current.forEach((project, index) => {
      if (project) {
        gsap.fromTo(
          project,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: index * 0.2,
            scrollTrigger: {
              trigger: project,
              start: 'top 85%',
              end: 'bottom 15%',
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

  return (
    <section ref={sectionRef} className="professional_projects_section">
      <div className="professional_projects_container">
        <h2 ref={titleRef} className="professional_projects_title">
          Professional Projects
        </h2>

        <div className="professional_projects_grid">
          {professional_projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => (projectsRef.current[index] = el)}
              className="professional_project_card"
            >
              <div className="professional_project_image_container">
                <img
                  src={project.image}
                  alt={project.project_name}
                  className="professional_project_image"
                />
              </div>

              <div className="professional_project_content">
                <h3 className="professional_project_name">{project.project_name}</h3>

                <div className="professional_project_period">{project.period}</div>

                <div className="professional_project_role">Role: {project.role}</div>

                <div className="professional_project_tech">
                  <span className="professional_project_tech_label">Tech:</span>
                  <div className="professional_project_tech_stack">
                    {project.tech_stack.map((tech, techIndex) => (
                      <div key={techIndex} className="professional_project_tech_pill">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="professional_project_tech_icon"
                        />
                        <span className="professional_project_tech_name">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="professional_project_description">{project.description}</p>

                <div className="professional_project_buttons">
                  {project.view_link && (
                    <a
                      href={project.view_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="professional_project_button professional_project_button_view"
                    >
                      View
                    </a>
                  )}
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="professional_project_button professional_project_button_github"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo_link && (
                    <a
                      href={project.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="professional_project_button professional_project_button_demo"
                    >
                      Landing Page
                    </a>
                  )}
                  {project.guide_link && (
                    <a
                      href={project.guide_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="professional_project_button professional_project_button_guide"
                    >
                      Guide
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProjects;
