import { useState } from "react";
import { Twirl as Hamburger } from 'hamburger-react'
import "./css/style.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
        <nav className="navbar">
            <h3>Tomato</h3>
            <div className="hamburger">
            <Hamburger duration={0.4} onToggle={toggleMenu} />
            </div>
            {/* Add the menu items */}
            <div className="menu-wrapper">
            <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
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
    </>
  );
};

export default App;
