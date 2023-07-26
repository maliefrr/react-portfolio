import { useEffect, useRef } from "react";
import Typed from "typed.js"
import "../css/style.css";




// Define the interface for the Typed.js options
interface TypedOptions {
    strings: string[];
    typeSpeed: number;
    backSpeed: number;
    loop: boolean;
    // Add other options here if needed
  }

const HeroSection = () => {
    const typedRef = useRef(null);

    useEffect(() => {
      const options: TypedOptions = {
        strings: ["Halo, Namaku Alief!", "Seorang Fresh Graduate", "Love to Making Code", "Fullstack Web Developer", "React Native Enthusiast", "Welcome to my Portfolio Website!"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      };
  
      // Create a new instance of Typed.js
      const typed = new Typed(typedRef.current, options);
  
      // Clean up the Typed.js instance on unmount
      return () => {
        typed.destroy();
      };
    }, []);
  return (
    <>
        <div className="main-content" id="home">
            <div className="diamond-image">
                <div className="diamond-content">
                    <img src="/image/profile_picture.jpeg" alt="Profile Picture" />
                </div>
            </div>
            {/* Typed.js Output */}
            <div className="typed-output">
                <h1 ref={typedRef}></h1>
            </div>
      </div>
    </>
  )
}

export default HeroSection
