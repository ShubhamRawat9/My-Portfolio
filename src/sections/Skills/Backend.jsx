import React from 'react';
import { BadgeCheck } from "@boxicons/react";

const backendSkills = [
  { name: "Java", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "Node.js", level: "Basic" },
  { name: "MySQL", level: "Intermediate" },
];

export default function Backend() {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Backend Developer</h3>

      <div className="skills-box">
        <div className="skills-group">
          {backendSkills.slice(0, 2).map((skill) => (
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
          {backendSkills.slice(2).map((skill) => (
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