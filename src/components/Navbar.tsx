import { useState, } from "react";
import { slide as Menu } from 'react-burger-menu'
import { Twirl as Hamburger } from 'hamburger-react'
import "../css/style.css";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <>
      <nav className="navbar">
            <h3>Tomato</h3>
            <div className="hamburger" onClick={toggleMenu}>
            <Hamburger duration={0.4} toggled={isMenuOpen}/>
            </div>
            {/* Add the menu items */}
            <div className="menu-wrapper">
            <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
                <button>Download CV</button>
            </li>
            </ul>
            </div>
        </nav>
      {/* Add the menu items */}
      <Menu right isOpen={isMenuOpen} width={`100%`} customBurgerIcon={false} onClose={toggleMenu}>
        <ul className="menu">
          <li><a href="#" className="hamburgerMenuItem">Home</a></li>
          <li><a href="#" className="hamburgerMenuItem">About</a></li>
          <li><a href="#" className="hamburgerMenuItem">Skills</a></li>
          <li><a href="#" className="hamburgerMenuItem">Project</a></li>
          <li>
            <button>Download CV</button>
          </li>
        </ul>
      </Menu>
    </>
  )
}

export default Navbar
