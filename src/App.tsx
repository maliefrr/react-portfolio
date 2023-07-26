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
      <div className="mySkill">

      </div>
    </div>
    </>
  );
};

export default App;
