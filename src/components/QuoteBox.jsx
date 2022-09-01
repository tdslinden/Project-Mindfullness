import React, { useState, useEffect } from "react";
import "../styles/QuoteBox.css";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [fade, setFade] = useState(0);

  const getRandomNumber = () => {
    const quotesSize = quotes.length;
    return Math.floor(Math.random() * quotesSize);
  };

  const getQuote = () => {
    const randomNumber = getRandomNumber();
    return quotes[randomNumber];
  };

  useEffect(() => {
    async function getQuotes() {
      try {
        let response = await fetch(
          "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        );
        let jsonData = await response.json();
        let retrievedQuotes = [];
        jsonData["quotes"].forEach((aQuote) => retrievedQuotes.push(aQuote));
        setQuotes(retrievedQuotes);
      } catch (err) {
        alert(err);
      }
    }
    getQuotes();
  }, []);

  useEffect(() => {
    let quoteData = getQuote();
    console.log(quoteData);
    if (quoteData) {
      setQuote(quoteData["quote"]);
      setAuthor(quoteData["author"]);
    }
  }, [quotes]);

  return (
    <div id="quote-box">
      <p id="text" onAnimationEnd={() => setFade(0)} fade={fade}>
        "{quote}"
      </p>

      <div className="author-container">
        <p id="author" fade={fade}>
          - {author}
        </p>
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
          <button
            className="button"
            id="new-quote"
            onClick={() => {
              let quoteData = getQuote();
              setQuote(quoteData["quote"]);
              setAuthor(quoteData["author"]);
              setFade(1);
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
