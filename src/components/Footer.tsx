import "../css/style.css"; // Import your CSS file here

const Footer = () => {
  return (
    <div className="footer-jumbotron">
      <div className="footer-jumbotron-content">
        <h2>Contact Me</h2>
        <p>
          Jika ingin menghubungi saya silahkan hubungi melalui kontak dibawah ini:
        </p>
        <div className="contact-details">
          <p><a href="mailto:maliefrr14@gmail.com"><img src="./image/gmail.png" alt="" /></a></p>
          <p><a href="tel:+6285156684730"><img src="./image/phone.png" alt="" /></a></p>
          <p><a href="https://github.com/maliefrr" target="_blank"><img src="./image/github.png" alt=""/></a></p>
          <p><a href="https://www.linkedin.com/in/maliefrr/" target="_blank"><img src="./image/linkedin.png" alt="" /></a></p>
          <p><a href="https://www.instagram.com/maliefrr/" target="_blank"><img src="./image/instagram.png" alt="" /></a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
