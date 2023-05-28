
import './Section2a.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faUserGear} from '@fortawesome/free-solid-svg-icons'
import { Color } from 'three';
import React, { useState } from 'react';

import { Waypoint as ReactWaypoint } from 'react-waypoint';





function Section2a() {
  const [isVisible, setIsVisible] = useState(false);

  const handleWaypointEnter = () => {
    setIsVisible(true);
  };
  return (
    <div className="section2a max-width">
      <ReactWaypoint onEnter={handleWaypointEnter} bottomOffset="50%" />

      <div className="s2_bottom">
        <div className="shape_img"></div>
        <div className='flex'>
        
        <div className="flip-card">
            <div class="flip-card-inner ">
            <div className={`flip-card-front front1 ${isVisible ? "anima-card1" : ""}`}>
                <h2>Experiência</h2>
                <i className='icon'><FontAwesomeIcon icon={faLaptopCode} /></i>

              </div>
              <div class="flip-card-back">
                <h2>Experiência</h2>
                <p><b>Digital Business</b> - Web Design/Desenvolvedor Front-end. 2020 - Atual.</p>
                <p><b>Funções</b> - Animações de banners em HTML-CSS e Milagro, Lp's em HTML-CSS-JS e WordPress (Elementor), E-mail marketing e Design no Adobe Photoshop, Adobe Illustrator e Figma.</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div class="flip-card-inner">
            <div className={`flip-card-front front2 ${isVisible ? "anima-card2" : ""}`}>
                <h2>Competências</h2>
                <i className='icon'><FontAwesomeIcon icon={faUserGear} /></i>

              </div>
              <div class="flip-card-back">
                <h2>Competências</h2>
                <p>Rápido entendimento, facilidade e vontade em aprender novas funções, noção e experiência na área de TI, dedicação para entregar a melhor versão possível e facilidade em esclarecer e dar feedbacks sobre projetos.</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div class="flip-card-inner">
            <div className={`flip-card-front front3 ${isVisible ? "anima-card3" : ""}`}>
                <h2>Formação</h2>
                <i className='icon'><FontAwesomeIcon icon={faGraduationCap} /></i>

              </div>
              <div class="flip-card-back">
                <h2>Formação</h2>
                <p >Ensino médio completo e Técnico em Informática - 4 anos.<br></br><b className='bold'>Escola Técnica Estadual Portão(ETEP)</b></p><br></br><br></br>
                <p>Análise e desenvolvimento de sistemas - 2022/02.<br></br><b className='bold'>Universidade Feevale</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Section2a;
