import { useState, useEffect, useRef } from "react";
import img_eu from "./assets/images/eu.jpg";
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Section1.scss";

function Section1() {
  const scrollTop = useRef(null);

  const checkScrollHeight = () => {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 300) {
      scrollTop.current.style.display = 'block'
    } else {
      scrollTop.current.style.display = 'none'
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollHeight);
    checkScrollHeight();
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const [firstName, setFirstName] = useState("Matheus");
  const [lastName, setLastName] = useState("Berghahn");

  useEffect(() => {
    const anima_nome = document.querySelector(".anima_nome");
    const strText = anima_nome.getAttribute("data-text");
    const splitText = strText.split("");

    anima_nome.textContent = "";

    for (let i = 0; i < splitText.length; i++) {
      if (i === firstName.length) {
        anima_nome.innerHTML += "&nbsp;";
      }
      anima_nome.innerHTML += `<span data-text="${strText}">${splitText[i]}</span>`;
    }

    let char = 0;
    let timer = setInterval(onTick, 70);

    function onTick() {
      const spans = anima_nome.querySelectorAll('span[data-text="' + strText + '"]');
      const span = spans[char];
      if (span) {
        span.classList.add("fade");
        char++;
        if (char === splitText.length) {
          complete();
          return;
        }
      }
    }
    function complete() {
      clearInterval(timer);
      timer = null;
    }
    
  }, [firstName, lastName]);

  return (
    <div id="ancor_top" className="section1 max-width">
      <div className="s1_left">
        <h2 className="anima_nome" data-text={`${firstName} ${lastName}`}>
          {firstName}&nbsp;{lastName}
        </h2>
        <p className="anima_p1">Desenvolvedor Front-end </p>
       

        <div className="buttons">
          <a href="https://github.com/Matheus-Berghahn" target="_blank"><button className="btn1 bg_btn" >GitHub</button></a>
          <a href="https://www.instagram.com/__sunsetz__/" target="_blank"><button className="btn2 bg_btn">Instagram</button></a>
        </div>
      </div>

      <div className="s1_right">
        <div className="shape_img"></div>
        <div className="img_eu" src={img_eu} alt="Minha foto">
          <span></span>
        </div>
      </div>
      <i ref={scrollTop} onClick={scrollToTop} className='seta'><FontAwesomeIcon icon={faArrowCircleUp} /></i>
    </div>
  );
}

export default Section1;
