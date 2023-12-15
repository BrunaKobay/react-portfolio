import { motion } from "framer-motion";
import React from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Apps</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profiles-img"
        >
          <img src={images.about02} alt="profile" />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          className="app__profiles-content"
        >
          <p className="p-text">
            Hi! My name is Bruna and I like to create beautiful and cool things
            that live on the internet. My interest in front-end started in 2022
            when my friend asked me to help him with a freelance job and I
            decided to give it a try! <span>Check out some of my work</span>
            in the projects section.
          </p>
          <p className="p-text">
            I'm <span>open to Job opportunities</span> where I can contribute,
            learn and grow. If you have a good opportunity that matches my
            skills and experience then don't hesitate to <span>contact me</span>
            .
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
