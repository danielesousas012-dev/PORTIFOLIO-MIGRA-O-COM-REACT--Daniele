import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <p className="hero-tag reveal">Estudante de TI</p>
        <h1 className="hero-title reveal">
          Criando experiências<br /><em>digitais notáveis</em>
        </h1>
        <a href="#projetos" className="btn-primary reveal">Ver Projetos</a>
      </div>
      <div className="hero-scroll">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;