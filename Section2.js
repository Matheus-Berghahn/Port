
import './Section2.scss';
import React, { useState } from 'react';

import { Waypoint as ReactWaypoint } from 'react-waypoint';





function Section2() {
  const [isVisible, setIsVisible] = useState(false);

  const handleWaypointEnter = () => {
    setIsVisible(true);
  };

  const handleWaypointLeave = () => {
    setIsVisible(false);
  };

  const scrollToClasseDeDestino2 = () => {
    const classeDeDestino = document.getElementById("ancor_proj");
    window.scrollTo({
      top: classeDeDestino.offsetTop,
      behavior: "smooth"
    });
  }
  return (
    <div className="section2 max-width">
      <ReactWaypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} bottomOffset="50%" />
      <div className="s2_top">
      <div className={`left ${isVisible ? "anima-line" : "not-anima-line"}`}>
          <h2>SOBRE</h2>
          <p>Olá, meu nome é Matheus e sou desenvolvedor front-end e motion designer com sede em Estância Velha, Rio Grande do Sul. Com mais de 2 anos de experiência em animação por código e linha do tempo, tenho habilidades em <span style={{ color: '#e6622c' }}>HTML</span>
, <span style={{ color: '#1599d1', letterSpacing: "2px" }}>CSS</span>, <span style={{ color: '#db9b26', letterSpacing: "2px" }}>JS</span>, <span style={{ color: '#5ccfee', letterSpacing: "2px" }}>React</span>, <span style={{ color: '#ffffff', letterSpacing: "2px" }}>Next</span>, <span style={{ color: '#dd0031', letterSpacing: "2px" }}>Angular</span> e <span style={{ color: '#7ab33e', letterSpacing: "2px" }}>node.js</span>, além de outras sub-funcionalidades. Ao longo do último ano, tenho me dedicado à criação de sites e páginas, aprimorando minhas habilidades nessa área.<br></br><br></br>Meu objetivo profissional é continuar a aprimorar minhas habilidades e crescer na minha carreira. Procuro por uma empresa que possa me proporcionar suporte nesse sentido, para que eu possa desenvolver projetos de alta qualidade e contribuir com a equipe de forma efetiva. Estou aberto a oportunidades de trabalho e gostaria de discutir como minha experiência pode ser valiosa para sua empresa.</p>
        </div>
        <div className='right'>
          <div className="shape_img">
            <button className={`btn1 ${isVisible ? "anima-btn" : "not-anima-btn"}`} onClick={scrollToClasseDeDestino2} >Projetos</button>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default Section2;
