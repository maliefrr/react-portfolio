/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Twirl as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";
import Swal from "sweetalert2"; // Import SweetAlert

import "../css/style.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownloadCV = async () => {
    try {
      // Show SweetAlert popup with options for English and Indonesian resumes
      const result = await Swal.fire({
        title: "Download CV",
        showCancelButton: true,
        confirmButtonText: "English",
        cancelButtonText: "Indonesia",
      });
  
      if (result.isConfirmed) {
        // User chose English resume
        window.open("./resume_english.pdf", "_blank");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // User chose Indonesian resume
        window.open("./resume.pdf", "_blank");
      }
    } catch (error) {
      // Handle any errors that occur during the SweetAlert operation
      console.error("Error occurred:", error);
    }
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
              <Link to="home" smooth={true} duration={500} className="hamburgerMenuItem">Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={1000} className="hamburgerMenuItem">About</Link>
            </li>
            <li>
            <Link to="skill" smooth={true} duration={1500} className="hamburgerMenuItem">Skills</Link>
            </li>
            <li>
            <Link to="projects" smooth={true} duration={1500} className="hamburgerMenuItem">Project</Link>
            </li>
            <li>
                <button onClick={handleDownloadCV}>Download CV</button>
            </li>
            </ul>
            </div>
        </nav>
      {/* Add the menu items */}
      <Menu right isOpen={isMenuOpen} width={`100%`} customBurgerIcon={false} onClose={toggleMenu}>
        <ul className="menu">
          <li><Link  to="home" smooth={true} duration={500} className="hamburgerMenuItem" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={1000} className="hamburgerMenuItem" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="skill" smooth={true} duration={1500} className="hamburgerMenuItem" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={2000} className="hamburgerMenuItem" onClick={() => setIsMenuOpen(false)}>Project</Link></li>
          <li>
            <button>Download CV</button>
          </li>
        </ul>
      </Menu>
    </>
  )
}

export default Navbar
