import React from 'react';
import Header from './componentes/Header';
import Hero from './componentes/Hero';
import About from './componentes/About';
import Projects from './componentes/Projects';
import Contact from './componentes/Contact';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
