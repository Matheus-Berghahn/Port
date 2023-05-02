import { useState, useEffect } from "react";
import img_eu from "./assets/images/eu.jpg";
import "./Section1.scss";

function Section1() {
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
    <div className="section1 max-width">
      <div className="s1_left">
        <h2 className="anima_nome" data-text={`${firstName} ${lastName}`}>
          {firstName}&nbsp;{lastName}
        </h2>
        <p className="anima_p1">Desenvolvedor Front-end </p>
       

        <div className="buttons">
          <button className="btn1" >GitHub</button>
          <button className="btn2">Instagram</button>
        </div>
      </div>

      <div className="s1_right">
        <div className="shape_img"></div>
        <img className="img_eu" src={img_eu} alt="Minha foto" />
      </div>
    </div>
  );
}

export default Section1;
