import React from 'react';

const projects = [
  {
    name: "EcoLicenças",
    description: "Projeto em desenvolvimento com o objetivo de criar uma plataforma para auxiliar órgãos públicos no gerenciamento de processos de licenciamento ambiental. A proposta é permitir o cadastro de empreendimentos, acompanhamento de prazos, emissão de licenças e organização de documentos de forma digital e eficiente.",
    tag: "Web App",
    tech: ["HTML","CSS","JavaScript","Node.js","Banco de dados"],
    emoji: "🌿",
    color: "#D4E8D0",
    link: "#"
  },
  {
    name: "Sacolão Gestão",
    description: "Projeto em planejamento voltado para a gestão administrativa de um comércio do setor hortifruti. A ideia é desenvolver um sistema que permita o controle de notas fiscais, acompanhamento de entradas e saídas, organização de compras e análise de custos, contribuindo para uma melhor tomada de decisão.",
    tag: "Dashboard",
    tech:["JavaScript", "Chart.js","HTML","CSS"],
    emoji: "📊",
    color: "#D0DCF0",
    link: "#"
  },
  {
    name: "P2EVENTS",
    description: "Projeto em desenvolvimento com foco na criação de um aplicativo para divulgação de eventos locais. A proposta é permitir que usuários encontrem eventos culturais, festas e atividades na cidade, com informações organizadas como data, local e descrição.",
    tag: "Mobile UI",
    tech: ["React Native", "Figma", "Firebase"],
    emoji: "🎉",
    color: "#F0E8D0",
    link: "#"
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="projetos">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">— Trabalhos</span>
          <h2>Projetos em Destaque</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card reveal" style={{ '--i': index }}>
              <div className="card-thumb" style={{ background: project.color }}>
                <span style={{ fontSize: '3.5rem' }}>{project.emoji}</span>
              </div>
              <div className="card-body">
                <span className="card-tag">{project.tag}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="card-footer">
                  <div className="card-tech">
                    {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                  </div>
                  <a href={project.link} className="btn-project" target="_blank" rel="noopener">
                    Ver <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;