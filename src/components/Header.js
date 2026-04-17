import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header id="header">
        <div className="header-inner">
          <a href="#home" className="logo">DS<span>.</span></a>
          <nav>
            <ul className="nav-links">
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="#cadastro">Solicitar Contato</a></li>
            </ul>
          </nav>
          <button className="hamburger" id="hamburger" aria-label="Menu" onClick={toggleMenu}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${isOpen ? 'open' : ''}`} id="mobileNav">
        <ul>
          <li><a href="#sobre" className="mob-link" onClick={closeMenu}>Sobre</a></li>
          <li><a href="#projetos" className="mob-link" onClick={closeMenu}>Projetos</a></li>
          <li><a href="#contato" className="mob-link" onClick={closeMenu}>Contato</a></li>
          <li><a href="#cadastro" className="mob-link" onClick={closeMenu}>Solicitar Contato</a></li>
        </ul>
      </div>
    </>
  );
};

export default Header;