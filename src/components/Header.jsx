import "../styles/Body.scss";
import "../styles/Header.scss";
import React, { useState } from "react";

function Header() {
  // const [isOpen, setIsOpen] = useState(false);

  // function hamburgerOpen(){
  //     setIsOpen(!isOpen);
  // }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="main-header">
      <div className="main-header-1-1">
        <div className="navbar">
        {/*-----------------------------------Hidden Navbar -------------------------------------------------*/ }
                    <header className="header">
                    <div className="menu-icon" onClick={toggleMenu}>
                        <div className={`bar ${isOpen ? "open" : ""}`}></div>
                        <div className={`bar ${isOpen ? "open" : ""}`}></div>
                        <div className={`bar ${isOpen ? "open" : ""}`}></div>
                    </div>

                    <nav className={`side-menu ${isOpen ? "visible" : ""}`}>
                        <ul>
                            <li>Programs</li>
                            <li>Resources</li>
                            <li>Alumin</li>
                            <li>Login</li>
                        </ul>
                    </nav>
                    </header>
        {/*------------------------------------------------------------------------------------------------*/ }
        </div>

        <button className="signup-btn-clone">Sign Up</button>
      </div>

      {/* <div className={`navbar-contents ${isOpen ? "Open" : ""} `} >
                    <ul className='header-hidden-navbar'>
                        <li>Programs</li>
                        <li>Resource</li>
                        <li>Alumin</li>
                    </ul>
                </div> */}

      <div className="header-titles">
        <div className="logo-div">
          <p>
            Product <span>Space</span>
          </p>
        </div>

        <div className="main-header-navigations">
          <p>Programs</p>
          <p>Resources</p>
          <p>Alumin</p>
        </div>

        <div className="signin-btns">
          <button className="login-btn">Log in</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
