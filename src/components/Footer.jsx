import React from "react";
import "../styles/Footer.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <a
          id="icon"
          href="https://www.linkedin.com/in/lindenkyaw/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <p id="tag">By Linden</p>
        <a
          id="icon"
          href="https://github.com/tdslinden"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
