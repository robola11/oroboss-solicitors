import "./FooterStyles.css";
import { useEffect, useState } from "react";

const Footer = () => {

  const [showTopBtn, setShowTopBtn] =useState(false);

  useEffect(() => {
      window.addEventListener('scroll', () => {
          if(window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      })
  }, [])

  function goTop() {
      window.scrollTo({
          top:0,
          behavior: 'smooth'
      })
  }


  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Oroboss Solicitors</h1>
          <p>Legal Practioners & Property Consultants</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
        </div>
      
      </div>
      <hr />
      <div className="bottom">
      <div>
          <h4>Links</h4>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Practice Areas</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Address</h4>
          <a href="/">No 182, DSC</a>
          <a href="/">Expressway, Udu</a>
          <a href="/">L.G.A, Delta State</a>
          <a href="/">Nigeria</a>
        </div>
        <div>
          <h4>Information</h4>
          <a href="/">+234 906 0422 440</a>
          <a href="/">+234 815 8620 933</a>
          <a href="/">info@oroboss.com</a>
          <a href="/">oroboss11@gmail.com</a>
         
        </div>
       
        <div>
          <h4>Others</h4>
          <a href="/">Our Vision</a>
          <a href="/">Our Mission</a>
          <a href="/">Our History</a>
          <a href="/">Our Team</a>
        </div>
      </div>

      {
                showTopBtn && (<div className="go-top" onClick={goTop}></div>)
            }
    </div>
  );
};
export default Footer;
