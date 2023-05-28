import React, { useState } from "react";
import "./Section5.scss";
import { Waypoint } from "react-waypoint";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './assets/images/logomb.png';

function Section5() {
  const [isVisible, setIsVisible] = useState(false);

  const handleWaypointEnter = () => {
    setIsVisible(true);
  };

  return (
    <div className="section5 max-width">
      <Waypoint onEnter={handleWaypointEnter}  bottomOffset="100%" />
        <div className="contato">
          <div className="contato_left">
            <h2>CONTATO</h2>
            <div className="line"></div>
            <img src={logo} alt="Logo" />
          </div>
            <div className="contato_box">
                <a href="matheus.berghahn3k@gmail.com" target="black"><h3>matheus.berghahn3k@gmail.com</h3></a>
                <a href="tel:51985239065" target="black"><h3>(51) 985239065</h3></a>
                <div className="contato_flex">
                  <div className="redes">
                  <a href="https://github.com/Matheus-Berghahn" target="black"><h4>GitHub</h4></a>
                  <a href="https://www.instagram.com/__sunsetz__/" target="black"><h4>Instagram</h4></a>
                  </div>
                  <h3>Currículo <FontAwesomeIcon className="icon" icon={faArrowUpRightFromSquare}/></h3>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Section5;
