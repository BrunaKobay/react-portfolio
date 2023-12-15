import React from "react";
import { BsCloudDownload, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/brunakobay/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/BrunaKobay"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href={process.env.PUBLIC_URL + "/Resume.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <BsCloudDownload />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
