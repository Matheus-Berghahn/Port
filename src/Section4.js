import React, { useState } from "react";
import "./Section4.scss";
import { Waypoint } from "react-waypoint";

function Section4() {
  const [isVisible, setIsVisible] = useState(false);

  const handleWaypointEnter = () => {
    setIsVisible(true);
  };

  return (
    <div id="ancor_anima" className="section4 max-width">
      <h2>Animações</h2>
      <h3>Tenho um histórico sólido de criação de animações para grandes empresas, como Jeep, Samsung, Seara, Subway, Bradesco, Santander, Boticário, entre outras.</h3>
      <div className="all_box">
        <div className="align_box">
          <Waypoint onEnter={handleWaypointEnter}  bottomOffset="30%" />
          <iframe
            className={`box2 anima1 ${isVisible ? "scale1" : ""}`}
            src={`${process.env.PUBLIC_URL}/anima_bradesco.html`}
            title="bradesco"
          ></iframe>
        </div>

        <div className="align_box">
          <iframe
            className={`box anima2 ${isVisible ? "scale2" : ""}`}
            src={`${process.env.PUBLIC_URL}/anima_bmg.html`}
            title="bmg"
          ></iframe>
          <iframe
            className={`box anima3 ${isVisible ? "scale3" : ""}`}
            src={`${process.env.PUBLIC_URL}/anima_ssg.html`}
            title="ssg"
          ></iframe>
        </div>

        <div className="align_box">
          <iframe
            className={`box anima3 ${isVisible ? "scale4" : ""}`}
            src={`${process.env.PUBLIC_URL}/anima_nissan.html`}
            title="nissan"
          ></iframe>
          <iframe
            className={`box anima4 ${isVisible ? "scale5" : ""}`}
            src={`${process.env.PUBLIC_URL}/anima_subway.html`}
            title="subway"
          ></iframe>
        </div>

        <div className="align_box">
          <iframe
            className={`box2 anima6 ${isVisible ? "scale6" : ""}`}
            src={`${process.env.PUBLIC_URL}/anima_cap.html`}
            title="cap"
          ></iframe>
        </div>
      </div>
      
    </div>
  );
}

export default Section4;
