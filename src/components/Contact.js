import React from 'react';

const Contact = () => {
  return (
    <section id="contato" className="contato">
      <div className="container">
        <div className="contato-inner">
          <div className="contato-text reveal">
            <span className="section-label">— Vamos conversar</span>
            <h2>Entre em Contato</h2>
            <p>
              Estou disponível para projetos freelance, colaborações e
              oportunidades de trabalho.
            </p>
          </div>
          <div className="contato-links reveal">
            <a href="tel:+5586999999999" className="contato-item">
              <div className="contato-icon"><i className="fas fa-phone"></i></div>
              <div>
                <span className="contato-label">Telefone</span>
                <span className="contato-value">+55 (86) 99999-9999</span>
              </div>
            </a>
            <a href="mailto:danielsousa@exemplo.com" className="contato-item">
              <div className="contato-icon"><i className="fas fa-envelope"></i></div>
              <div>
                <span className="contato-label">Email</span>
                <span className="contato-value">danielesousa@exemplo.com</span>
              </div>
            </a>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;