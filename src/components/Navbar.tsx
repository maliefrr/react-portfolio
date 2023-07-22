import { useState } from "react";
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
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Project</li>
            <li>
                <button>Download CV</button>
            </li>
            </ul>
            </div>
        </nav>
      {/* Add the menu items */}
      <Menu right isOpen={isMenuOpen} width={`100%`} customBurgerIcon={false} onClose={toggleMenu}>
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Project</li>
          <li>
            <button>Download CV</button>
          </li>
        </ul>
      </Menu>
    </>
  )
}

export default Navbar
