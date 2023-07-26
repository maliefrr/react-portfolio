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
      <div className="skill-section" id="skill">
          <h1>My Skill</h1>
          <div className="mySkill">
            <img src="/image/node.png" alt="" />
            <img src="/image/js.png" alt="" />
            <img src="/image/react.png" alt="" />
          </div>
      </div>
      <div className="project-section">
        <h1>My Project</h1>
        <div className="project-items">
          <h3>E-KTM</h3>
              <div className="project-detail">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum earum eligendi quidem veniam placeat. Esse accusantium quae odit facere, suscipit officiis vitae harum consectetur reiciendis alias reprehenderit incidunt obcaecati, pariatur praesentium quo totam nesciunt nobis ex distinctio eaque officia sint iusto. Adipisci possimus itaque impedit, esse aliquam minima eos quisquam. Aut cum sunt quas, neque optio debitis tempore ad sint, molestias dolor officiis eos incidunt exercitationem consequatur. Eum a dolorem aperiam iste. Cumque, tenetur veniam hic quaerat nisi sed quae voluptatum laudantium dolorem eum commodi nostrum aliquid vel. Id, maxime! Hic illum id corrupti. Qui minima nostrum, exercitationem consequatur et deleniti pariatur doloribus sequi totam beatae ut incidunt, rem repellendus voluptates corporis? Dolor magni minima placeat delectus accusantium minus quae id neque architecto adipisci expedita ullam recusandae repellendus illo, odit error maxime ad voluptates saepe repellat alias vel? Assumenda esse deserunt velit incidunt qui accusamus quae ab ex eum?</p>
                <div className="project-image">
                  <img src="/image/ektm.gif" alt="" />
                </div>
              </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
