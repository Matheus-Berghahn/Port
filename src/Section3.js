import React, { useState } from "react";
import "./Section3.scss";
import { Waypoint as ReactWaypoint } from "react-waypoint";

function Section3() {
  const [isVisible, setIsVisible] = useState(false);

  const handleWaypointEnter = () => {
    setIsVisible(true);
  };

  const handleWaypointLeave = () => {
    setIsVisible(false);
  };


  const [selectedIframe, setSelectedIframe] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedIframe(index);
  };

  return (
    <div id="ancor_proj" className="section3 max-width">
      <ReactWaypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} bottomOffset="40%" />
      <div className={`s3_left ${isVisible ? "anima-line" : "not-anima-line"}`}>
        <h2>PROJETOS</h2>
        <h3>Clique nos cards para acessar as páginas</h3>
        <div className="all_box">
          {/*<a href="">
            <div className={`card ex ${isVisible ? "anima-cards" : "not-anima-cards"}`}></div>
          </a>*/}
          <a href="https://pucrio.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className={`card pr ${isVisible ? "anima-cards" : "not-anima-cards"}`}></div>
          </a>
          <a href="https://digitalbusiness-seo.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className={`card db ${isVisible ? "anima-cards" : "not-anima-cards"}`}></div>
          </a>
          <a href="https://luvasberghahn.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className={`card lb ${isVisible ? "anima-cards" : "not-anima-cards"}`}></div>
          </a>
          <a href="https://sevenletters.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className={`card sl ${isVisible ? "anima-cards" : "not-anima-cards"}`}></div>
          </a>
        </div>
      </div>

      <div className="s3_right">
        <div className="s3_flex">
        <button
            className={selectedIframe === 0 ? "selected" : ""}
            onClick={() => handleButtonClick(0)}
          >
            Seven Letters
          </button>
          <button
            className={selectedIframe === 2 ? "selected" : ""}
            onClick={() => handleButtonClick(2)}
          >
            Luvas Berghahn
          </button>
          <button
            className={selectedIframe === 1 ? "selected" : ""}
            onClick={() => handleButtonClick(1)}
          >
            Digital Business
          </button>
          
          <button
            className={selectedIframe === 3 ? "selected" : ""}
            onClick={() => handleButtonClick(3)}
          >
            PUC Rio
          </button>
        </div>
        <div className="box">
          <iframe
            className="iframe_pr"
            src="https://pucrio.netlify.app/"
            style={{ display: selectedIframe === 3 ? "block" : "none" }}
          ></iframe>
          <iframe
            className="iframe_db"
            src="https://digitalbusiness-seo.netlify.app/"
            style={{ display: selectedIframe === 1 ? "block" : "none" }}
          ></iframe>
          <iframe
            className="iframe_lb"
            src="https://luvasberghahn.vercel.app/"
            style={{ display: selectedIframe === 2 ? "block" : "none" }}
          ></iframe>
          <iframe
            className="iframe_pr"
            src="https://sevenletters.vercel.app/"
            style={{ display: selectedIframe === 0 ? "block" : "none" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Section3;
