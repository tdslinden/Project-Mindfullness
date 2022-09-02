import React from "react";
import "../styles/Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <a id="icon" href="https://www.linkedin.com/in/lindenkyaw/">
          <FaLinkedin />
        </a>
        <p id="tag">By Linden</p>
        <a id="icon" href="https://github.com/tdslinden">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
