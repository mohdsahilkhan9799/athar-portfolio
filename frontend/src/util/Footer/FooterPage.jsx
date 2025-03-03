import React from 'react';
import './FooterPage.css'; // Custom CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from "../../Logo/download-removebg-preview (3).png"

const FooterPage = () => {
  return (
   <>
   <footer className="footer-container">
  <div className="footer-content">
    
    {/* Logo & Address Section */}
    <div className="footer-section">
      <h2>
        <div className="logo-animation d-flex gap-5">
          <img 
            src={logo}
            alt="Mohd Sahil Logo" 
            width={130} 
            height={60} 
          />
        </div>
        Mohd Athar - Portfolio
      </h2>
      <p>NOIDA SECTOR 62, India</p>
    </div>

    {/* Contact Section */}
    <div className="footer-section">
      <h3>Contact Me</h3>
      <p><i className="fas fa-phone"></i> Phone: (+91) 9719144184</p>
      <p><i className="fas fa-envelope"></i> Email: mohdathar9719@gmail.com</p>
    </div>

    {/* Social Media Section */}
    <div className="footer-section">
      <h3>Follow Me</h3>
      <div className="social-icons1">
         <a
                         href="https://www.linkedin.com/in/mohd-athar-a6b605209/"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-white text-center"
                       >
                         <FontAwesomeIcon icon={faLinkedin} />
                       </a>
                       <a
                         href="https://github.com/Mohd-Athar"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-white text-center"
                       >
                         <FontAwesomeIcon icon={faGithub} />
                       </a>

                       <a
                         href="https://www.instagram.com/athar_almaz/"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-white text-center"
                       >
                         <FontAwesomeIcon icon={faInstagram} />
                       </a>
      </div>
    </div>

  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom mb-0">
    <p>© 2025 Mohd Athar. All Rights Reserved.</p>
  </div>
</footer>

   </>
  );
};

export default FooterPage;
