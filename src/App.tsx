import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import "./css/style.css";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <>
      <div className="container">
        <Navbar />
        <HeroSection />
        <About />
        <div className="skill-section" id="skill">
          <h1 data-aos="fade-up">My Skill</h1>
          <div className="mySkill">
            {/* Add data-aos attribute to each image */}
            <img src="./image/node.png" alt="" data-aos="fade-up"/>
            <img src="./image/js.png" alt="" data-aos="fade-up" />
            <img src="./image/react.png" alt="" data-aos="fade-up" />
            <img src="./image/mysql.png" alt="" data-aos="fade-up" />
            <img src="./image/mongodb.png" alt="" data-aos="fade-up" />
          </div>
        </div>
        <div className="project-section" id="projects">
          <h1 data-aos="fade-up">My Project</h1>
          <Project title="E-KTM" desc="Proyek sistem e-KTM adalah sebuah inisiatif pribadi saya yang bertujuan untuk menggantikan penggunaan kartu mahasiswa fisik dengan versi digital yang dikenal sebagai e-KTM. Saya ingin menciptakan sebuah platform yang memungkinkan mahasiswa mengakses identitas mereka dengan mudah melalui perangkat elektronik seperti smartphone atau tablet.Dalam proyek ini, fokus utama saya adalah pada kenyamanan dan efisiensi dalam pengelolaan identitas mahasiswa. Saya merancang dan mengembangkan sebuah prototype sistem informasi akademik yang terpisah dan API yang mendukung fungsionalitas e-KTM. Dengan menggunakan API ini, aplikasi e-KTM yang saya kembangkan akan dapat memperbarui informasi dan pengumuman yang ada di halaman website prodi Ilmu Komputer secara otomatis melalui data scraping.Saya memahami bahwa keamanan dan privasi data bukan menjadi fokus utama proyek ini. Namun, saya tetap berupaya untuk melindungi data yang diperoleh melalui data scraping dengan mematuhi aturan dan regulasi yang berlaku.Dalam proyek ini, saya bekerja secara mandiri dan menggabungkan keahlian teknis saya dalam pengembangan aplikasi dan data scraping. Saya menyadari bahwa integrasi dengan sistem informasi akademik kampus memerlukan izin dan kerjasama lebih lanjut, sehingga saat ini fokus saya adalah pada pembuatan prototipe dan pengembangan fungsionalitas dasar aplikasi e-KTM.Saya percaya bahwa sistem e-KTM yang saya kembangkan dapat membawa manfaat dalam meningkatkan aksesibilitas dan efisiensi pengelolaan identitas mahasiswa. Melalui proyek ini, saya berkomitmen untuk terus mengembangkan dan meningkatkan fungsionalitas aplikasi e-KTM." image="./image/ektm.gif"/>
          <Project title="E-Voting" desc="Sistem e-voting adalah sebuah inisiatif yang bertujuan untuk memperbarui dan meningkatkan proses pemilihan secara elektronik. Sistem ini dirancang untuk menggantikan metode tradisional pemilihan yang memerlukan pemungutan suara secara fisik dengan menggunakan kertas dan kotak suara.Dalam proyek ini, saya bertekad untuk menciptakan sebuah platform yang aman, andal, dan transparan untuk pemilihan ketua himpunan mahasiswa program studi ilmu komputer. Saya memanfaatkan teknologi terkini dan keahlian saya dalam pengembangan web dan database untuk mencapai tujuan ini." image="./image/evoting.gif"/>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
