import { motion } from "framer-motion";
import React from "react";
import ReactTooltip from "react-tooltip";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const skills = [
  {
    name: "Python",
    bgColor: "#edf2f8",
    icon: images.python,
  },
  {
    name: "React Js",
    bgColor: "#edf2f8",
    icon: images.react,
  },
  {
    name: "Javascript",
    bgColor: "#edf2f8",
    icon: images.javascript,
  },
  {
    name: "CSS",
    bgColor: "#edf2f8",
    icon: images.css,
  },
  {
    name: "Node",
    bgColor: "#edf2f8",
    icon: images.node,
  },
  {
    name: "Git",
    bgColor: "#edf2f8",
    icon: images.git,
  },
  
  
  
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
