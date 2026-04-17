import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <div className="sobre-grid">
          <div className="sobre-img reveal">
            <div className="img-wrapper">
              <img
                src="minha_foto.jpg"
                alt="Foto de perfil de Daniele Sousa"
              />
            </div>
            <div className="img-deco"></div>
          </div>
          <div className="sobre-text reveal">
            <span className="section-label">— Sobre mim</span>
            <h2>Daniele Sousa</h2>
            <h3>Estudante de Tecnologia em sistemas para a internet</h3>
            <p>
              Sou estudante de Tecnologia em Sistemas para Internet, com foco
               em desenvolvimento web. Tenho conhecimentos em HTML, CSS, 
               JavaScript e lógica de programação, desenvolvendo soluções 
               digitais modernas e funcionais.Também possuo formação
                em Técnico em Administração e em Ciências Biológicas, 
                o que contribui para uma visão analítica, organizada
                 e multidisciplinar. Estou em constante aprendizado, 
                 buscando evoluir na área de tecnologia e atuar como 
                 desenvolvedora.
            </p>
            <p>
              Estou em constante aprendizado, buscando aprimorar minhas 
              habilidades técnicas e acompanhar as tendências da área 
              de tecnologia, com o objetivo de atuar como desenvolvedora 
              e contribuir com projetos inovadores.
            </p>
            <div className="skills-list">
              <span>Tecnologia</span>
              <span>JavaScript</span>
              <span>Administração</span>
              <span>Logica de programação</span>
              <span>CSS</span>
              <span>Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;