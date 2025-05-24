import React from 'react';
import img1 from '../resource/footer/img1.png';
import linkedin from '../resource/footer/linkedin.png';
import '../styles/Footer.scss'; 

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="footer-main-wrapper">
            <div className="footer-main">
                <div className="footer-logo-section">
                <p className="footer-logo">P<span>__</span></p>
                <h4 className="footer-title">PRODUCT SPACE</h4>
                <p className="footer-subtitle">A Great Place to Upskill</p>
                </div>

                <div className="footer-links-section">
                <div className="footer-column">
                    <h5>Resources</h5>
                    <ul>
                    <li>Terms and Conditions</li>
                    <li>Privacy policy</li>
                    <li>Refund policy</li>
                    <li>Contact us</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>Links</h5>
                    <ul>
                    <li>Testimonials</li>
                    <li>Events</li>
                    <li>Blogs</li>
                    <li>Become a Mentor</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>

        <div className="footer-latest-title-1">
            <div className="footer-latest-div">
                <div className="footer-latest-title">
                    <p>Get the latest updates from Product Space</p>
                </div>
                <div className="footer-subscribe">
                    <div className="footer-email-div">
                        <input type="email" placeholder="Email Address" />
                        <button className="subscribe-btn">Subscribe +</button>
                    </div>
                <div className="footer-icons">
                    {/* <button className="icon-btn"><img src={img1} alt="" /></button>
                    <button className="icon-btn"><img src={linkedin} alt="" /></button> */}
                    <img src={img1} alt="" className='footer-icons-img'/>
                    <img src={linkedin} alt="" className='footer-icons-img'/>
                </div>
                </div>
            </div>
        </div>

      <div className="footer-bottom">
        <p>© Propel Learnings</p>
        <h1 className="footer-bg-text">Product Space</h1>
      </div>
    </footer>
  );
};

export default Footer;
