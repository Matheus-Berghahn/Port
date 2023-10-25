/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Section3.scss";
import { Waypoint as ReactWaypoint } from "react-waypoint";
import angularIcon from "./assets/images/Angular-icon.png"
import reactIcon from "./assets/images/React-icon.png"
import javascriptIcon from "./assets/images/Javascript-icon.png"
import nextIcon from "./assets/images/Next-icon.png"

function Section3() {
  const [isVisible, setIsVisible] = useState(false);

  const handleWaypointEnter = () => {
    setIsVisible(true);
  };

  const handleWaypointLeave = () => {
    setIsVisible(false);
  };

  return (
    <div id="ancor_proj" className="section3 max-width">
      <ReactWaypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} bottomOffset="40%" />
      <div className={`s3_left ${isVisible ? "anima-line" : "not-anima-line"}`}>
        <h2>PROJETOS</h2>
        <h3>Clique nos cards para acessar as páginas</h3>
        <div className="all_box">
          <a className={`card pr ${isVisible ? "anima-cards" : "not-anima-cards"}`} href="https://pucrio.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img className="logo_card" src={javascriptIcon}></img>
          </a>
          <a className={`card lb ${isVisible ? "anima-cards" : "not-anima-cards"}`} href="https://luvasberghahn.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img className="logo_card" src={reactIcon}></img>
          </a>
          <a className={`card sl ${isVisible ? "anima-cards" : "not-anima-cards"}`} href="https://sevenletters.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img className="logo_card" src={reactIcon}></img>
          </a>
          <a className={`card sf ${isVisible ? "anima-cards" : "not-anima-cards"}`} href="https://desafio-smartfit-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img className="logo_card" src={angularIcon}></img>
          </a>
          <a className={`card ch ${isVisible ? "anima-cards" : "not-anima-cards"}`} href="https://chess-page-lemon.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img className="logo_card" src={angularIcon}></img>
          </a>
          <a className={`card eb ${isVisible ? "anima-cards" : "not-anima-cards"}`} href="#" target="_blank" rel="noopener noreferrer">
            <img className="logo_card" src={nextIcon}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section3;
