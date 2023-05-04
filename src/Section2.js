
import './Section2.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faUserGear} from '@fortawesome/free-solid-svg-icons'


function Section2() {
  const scrollToClasseDeDestino2 = () => {
    const classeDeDestino = document.getElementById("ancor_proj");
    window.scrollTo({
      top: classeDeDestino.offsetTop,
      behavior: "smooth"
    });
  }
  const scrollToClasseDeDestino3 = () => {
    const classeDeDestino = document.getElementById("ancor_anima");
    window.scrollTo({
      top: classeDeDestino.offsetTop,
      behavior: "smooth"
    });
  }
  return (
    <div className="section2 max-width">
      <div className="s2_top">
        <div className='left'>
          <h2>Sobre</h2>
          <p>Olá, meu nome é Matheus e sou desenvolvedor front-end e motion designer com sede em Estância Velha, Rio Grande do Sul. Com mais de 2 anos de experiência em animação por código e linha do tempo, tenho habilidades em HTML, CSS, JS (React, JSON) e node.js, além de outras sub-funcionalidades. Ao longo do último ano, tenho me dedicado à criação de sites e páginas, aprimorando minhas habilidades nessa área.<br></br><br></br>Meu objetivo profissional é continuar a aprimorar minhas habilidades e crescer na minha carreira. Procuro por uma empresa que possa me proporcionar suporte nesse sentido, para que eu possa desenvolver projetos de alta qualidade e contribuir com a equipe de forma efetiva. Estou aberto a oportunidades de trabalho e gostaria de discutir como minha experiência pode ser valiosa para sua empresa.</p>
        </div>
        <div className='right'>
          <div className="shape_img">
            <button onClick={scrollToClasseDeDestino2} >Projetos</button>
            <button onClick={scrollToClasseDeDestino3}>Animações</button>
          </div>
        </div>
      </div>
      <div className="s2_bottom">
        <div className="shape_img"></div>
        <div className='flex'>
          <div class="flip-card  ">
            <div class="flip-card-inner ">
              <div class="flip-card-front front1">
                <h2>Experiência</h2>
                <i className='icon'><FontAwesomeIcon icon={faLaptopCode} /></i>

              </div>
              <div class="flip-card-back">
                <h2>Experiência</h2>
                <p><b>Digital Business</b> - Web Design/Desenvolvedor Front-end. 2020 - Atual.</p>
                <p><b>Funções</b> - Animações de banners em HTML-CSS e Milagro, Lp's em HTML-CSS-JS e WordPress (Elementor), E-mail marketing e Design no Adobe Photoshop e Adobe Illustrator.</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front front2">
                <h2>Competências</h2>
                <i className='icon'><FontAwesomeIcon icon={faUserGear} /></i>

              </div>
              <div class="flip-card-back">
                <h2>Competências</h2>
                <p>Rápido entendimento, facilidade e vontade em aprender novas funções, noção e experiência na área de TI, dedicação para entregar a melhor versão possível e facilidade em esclarecer e dar feedbacks sobre projetos.</p>
              </div>
            </div>
          </div>
          <div class="flip-card ">
            <div class="flip-card-inner">
              <div class="flip-card-front front3">
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

export default Section2;
