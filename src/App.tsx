import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import "./css/style.css";
import About from "./components/About";



const App = () => {


  return (
    <>
    <div className="container">

      <Navbar />
      <HeroSection />
      <About />
      <div className="skill-section">
          <h1>My Skill</h1>
          <div className="mySkill">
            <img src="/image/node.png" alt="" />
            <img src="/image/js.png" alt="" />
            <img src="/image/react.png" alt="" />
          </div>
      </div>
    </div>
    </>
  );
};

export default App;
