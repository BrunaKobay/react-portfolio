import React from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <p className="p-text">
          Got a question or proposal, or just want to say hello?
          <br />
          Go ahead, my inbox is always open!
        </p>
        {/* <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="brunakobay@gmail.com" className="p-text">
            brunakobay@gmail.com
          </a>
        </div> */}
        {/* <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
        </div> */}
      </div>
      <div className="app__footer-form app__flex">
        <a href="mailto:brunakobay@gmail.com" target="_blank" rel="noreferrer">
          <button>Say hello!</button>
        </a>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
