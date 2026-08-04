import React from 'react';
import { BadgeCheck } from "@boxicons/react";

const frontendSkills = [
  { name: "HTML", level: "Intermediate" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Git", level: "Intermediate" },
];

export default function Frontend() {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Frontend Developer</h3>

      <div className="skills-box">
        <div className="skills-group">
          {frontendSkills.slice(0, 3).map((skill) => (
            <div className="skills-data" key={skill.name}>
              <BadgeCheck className="bx bx-badge-check" />

              <div>
                <h3 className="skills-name">{skill.name}</h3>
                <span className="skill-level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-group">
          {frontendSkills.slice(3).map((skill) => (
            <div className="skills-data" key={skill.name}>
              <BadgeCheck className="bx bx-badge-check" />

              <div>
                <h3 className="skills-name">{skill.name}</h3>
                <span className="skill-level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}