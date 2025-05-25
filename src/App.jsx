import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Hours from './components/sections/Hours.jsx';
import Pricing from './components/sections/Pricing';
import Contact from './components/sections/Contact';
import './App.css';
const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <React.Fragment>
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <Hero />
      <About />
      <Hours />
      <Pricing />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;