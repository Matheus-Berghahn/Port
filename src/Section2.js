
import img_eu from "./assets/images/eu2.jpg";
import "./Section2.scss";

function Section2() {

  return (
    <div className="section2 max-width">
      <div className="s2_left">
      <div className="shape_img"></div>
        <img className="img_eu" src={img_eu} alt="Minha foto" />
      </div>
      <div className="s2_right">
        <h2>Sobre</h2>
        <p>Rápido entendimento, facilidade e vontade em aprender novas funções, noção e experiência na área de TI, dedicação para entregar a melhor versão possível e facilidade em esclarecer e dar feedbacks sobre projetos.Rápido entendimento, facilidade e vontade em aprender novas funções, noção e experiência na área de TI, dedicação para entregar a melhor versão possível e facilidade em esclarecer e dar feedbacks sobre projetos.Rápido entendimento, facilidade e vontade em aprender novas funções, noção e experiência na área de TI, dedicação para entregar a melhor versão possível e facilidade em esclarecer e dar feedbacks sobre projetos.</p>
      </div>
      
   
    </div>
  );
}

export default Section2;
