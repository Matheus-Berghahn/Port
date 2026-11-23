import React, { useState } from "react";
import { Waypoint as ReactWaypoint } from "react-waypoint";
import "./Section3.scss";

const projects = [
  { name: "VÉRTICE", kind: "Software & tecnologia", description: "Experiência digital com identidade e direção.", url: "https://template-vertice.vercel.app/", label: "Site institucional", number: "01" },
  { name: "VELLORA", kind: "Fitness & bem-estar", description: "Energia, movimento e uma presença marcante.", url: "https://template-vellora.vercel.app/", label: "Landing page", number: "02" },
  { name: "LUMÉA", kind: "Estética & cuidado", description: "Uma vitrine digital elegante e acolhedora.", url: "https://template-lumea.vercel.app/", label: "Site institucional", number: "03" },
  { name: "SGEE", kind: "Gestão & sistemas", description: "Sistema de gestão para organizar operações.", url: "https://sgee.vercel.app/", label: "Aplicação web", number: "04" },
  { name: "TB TREINO INTELIGENTE", kind: "Saúde & performance", description: "Experiência voltada à evolução no treinamento.", url: "https://tbtreinointeligente.com/", label: "Site profissional", number: "05" },
  { name: "SK ESTRUTURAS", kind: "Indústria & construção", description: "Presença digital para soluções em estruturas metálicas.", url: "https://sk-estruturas-metalicas.vercel.app/", label: "Site empresarial", number: "06" },
  { name: "AGÊNCIA NOV", kind: "Criatividade & comunicação", description: "Identidade e comunicação em formato digital.", url: "https://www.agencianov.com.br/", label: "Site de agência", number: "07" },
];

function Section3() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section id="ancor_proj" className="section3 max-width" aria-labelledby="projects-title">
      <ReactWaypoint onEnter={() => setIsVisible(true)} bottomOffset="15%" />
      <div className={`projects-shell ${isVisible ? "projects-visible" : ""}`}>
        <header className="projects-heading">
          <div className="projects-heading-top">
            <span className="projects-kicker"><span className="projects-status" /> PORTFÓLIO / 2026</span>
            <span className="projects-total">07 PROJETOS SELECIONADOS</span>
          </div>
          <h2 id="projects-title">PROJETOS<span className="projects-period">.</span></h2>
          <div className="projects-intro">
            <p>Ideias que saíram da tela e ganharam vida.</p>
            <span>Explore os projetos <span aria-hidden="true">↘</span></span>
          </div>
        </header>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              className={`project-tile project-tile-${index + 1}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={project.url}
              aria-label={`Visitar ${project.name} (abre em nova aba)`}
              style={{ "--tile-index": index }}
            >
              <span className="project-tile-meta"><span>{project.number} / {project.label}</span><span className="project-tile-arrow" aria-hidden="true">↗</span></span>
              <span className="project-tile-body">
                <span className="project-tile-kind">{project.kind}</span>
                <strong>{project.name}</strong>
                <span className="project-tile-description">{project.description}</span>
              </span>
              <span className="project-tile-bottom"><span>{new URL(project.url).hostname.replace(/^www\./, "")}</span><span className="project-tile-cta">ACESSAR PROJETO <span aria-hidden="true">↗</span></span></span>
            </a>
          ))}
        </div>
        <footer className="projects-footer"><span>DESIGN · DESENVOLVIMENTO · EXPERIÊNCIA</span><span>FEITO PARA SER EXPLORADO <span aria-hidden="true">↗</span></span></footer>
      </div>
    </section>
  );
}

export default Section3;
