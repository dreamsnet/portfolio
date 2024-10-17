import React from "react";
import Records from "./records.json";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
export default function Skills() {
  return (
    
    <div className="mySkills">
    
      {Records &&
        Records.map((record, index) => {
          return (
            <ScrollAnimation
            animateIn="fadeIn"
              className="skill-inner"
              key={record.id}
            >
              <div className="icon-box">
                <img src={record.icon} alt={record.caption} />
              </div>
              <div className="name-skill">{record.caption}</div>
            </ScrollAnimation>
          );
        })}
    </div>
  );
}
