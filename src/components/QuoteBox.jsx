import React from "react";
import "../styles/QuoteBox.css";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const QuoteBox = () => {
  return (
    <div id="quote-box">
      <p id="text">
        "It is only heavy because you are deciding over and over again to carry
        it. Embrace change, loosen up your sense of identity, let yourself walk
        a new path. You do not have to ignore or erase the past, you just have
        to wholeheartedly embrace the present and move on."
      </p>

      <div className="author-container">
        <p id="author">- Yung Pueblo</p>
      </div>

      <div className="buttons">
        <div id="social-container">
          <a href="" className="button">
            <FaTwitter id="tweet-quote" size={20} />
          </a>
          <a href="" className="button">
            <FaFacebook id="fb-quote" size={20} />
          </a>
          <a href="" className="button">
            <FaLinkedin id="li-quote" size={20} />
          </a>
        </div>

        <div>
          <button className="button" id="new-quote">
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
