
import img_lb from "./assets/images/img_lb.jpg";
import img_ex from "./assets/images/img_ex.jpg";
import img_db from "./assets/images/img_db.jpg";
import "./Section3.scss";

function Section3() {

  return (
    <div className="section3 max-width">
      <h2>Projetos</h2>
      <div className="all_box">
          <a href="https://luvas-berghahn.netlify.app/" target="_blank"><img src={img_lb} alt="LuvasBerghahn"></img></a>
          <a href="https://luvas-berghahn.netlify.app/" target="_blank"><img src={img_db} alt="DigitalBusiness"></img></a>
          <a href="" target="_blank"><img src={img_ex} alt="Exemplo"></img></a>
      </div>

    </div>
  );
}

export default Section3;
