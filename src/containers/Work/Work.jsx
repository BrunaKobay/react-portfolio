import { motion } from "framer-motion";
import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const works = [
  {
    name: "Study Case: UI/UX Design",
    description: "Fully responsive modern UI/UX website in React JS.",
    codeLink: "https://github.com/BrunaKobay/gpt3-project",
    projectLink: "https://gpt3-project-rho.vercel.app",
    imgUrl: images.project01,
    tags: ["React JS"],
  },
  {
    name: "Study Case: Restaurant Page",
    description:
      "The key to fine dining! Fully responsive modern UI/UX website in React JS for a Restaurant Landing Page.",
    codeLink: "https://github.com/BrunaKobay/restaurant-project",
    projectLink: "https://restaurant-project-bay.vercel.app",
    imgUrl: images.project02,
    tags: ["React JS"],
  },
  {
    name: "Study Case: Airbnb Clone",
    description:
      "A simple Airbnb project using ReactJS, Tailwind CSS, Mapbox, Calendar and Date Picker. Type on the search box to look for a place and a date.",
    codeLink: "https://github.com/BrunaKobay/airbnb-clone",
    projectLink: "https://airbnb-clone-wine-rho.vercel.app",
    imgUrl: images.project03,
    tags: ["React JS"],
  },
  {
    name: "Project: Portfolio",
    description:
      "A website created with NextJS with the intention to create a more simple and mordenized portfolio.",
    codeLink: "https://github.com/BrunaKobay/portfolio-next",
    projectLink: "https://portfolio-next-khaki-ten.vercel.app",
    imgUrl: images.project05,
    tags: ["Next JS"],
  },
];

const Work = () => {
  return (
    <>
      <h2 className="head-text">
        My creative <span>portfolio</span>
      </h2>

      <div className="app__work-portfolio">
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  staggerChildren: 0.25,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.name}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
