import './NavMenu.css';
import { useState } from 'react';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      <nav className="nav-container">
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#hours" onClick={closeMenu}>Hours</a>
          </li>
          <li className="nav-item">
            <a href="#pricing" onClick={closeMenu}>Pricing</a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </nav>

      <div 
        className={`overlay ${isOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      />
    </div>
  );
};

export default NavMenu;