import NavMenu from './NavMenu';
import './Header.css';
import Logo from "../../assets/logo.svg"

const Header = ({ isOpen, toggleMenu }) => {
  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <div className='logo-image'>
          <img src={Logo} alt="Logo" className="logo-icon" />
          </div>
          <i className="fas fa-car-side"></i>
          <h3>Joe Downey's Driving School</h3>
        </div>

        {/* Pass toggleMenu here */}
        <NavMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
