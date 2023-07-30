/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useRef } from "react";
import Typed from "typed.js"; // Import the default export from 'typed.js'
import "../css/style.css";

interface TypedOptions {
  strings: string[];
  typeSpeed: number;
  backSpeed: number;
  loop: boolean;
  // Add other options here if needed
}

const HeroSection = () => {
  const typedRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const options: TypedOptions = { // Explicitly set the type for the options variable
      strings: [
        "Halo, Namaku Alief!",
        "Seorang Fresh Graduate",
        "Love to Making Code",
        "Fullstack Web Developer",
        "React Native Enthusiast",
        "Welcome to my Portfolio Website!",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    if (typedRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const typed = new Typed(typedRef.current, options);

      return () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <div className="main-content" id="home">
        <div className="diamond-image">
          <div className="diamond-content">
            <img src="./image/profile_picture.jpeg" alt="Profile Picture" />
          </div>
        </div>
        {/* Typed.js Output */}
        <div className="typed-output">
          <h1 ref={typedRef}></h1>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
