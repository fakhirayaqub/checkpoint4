import React from "react";

export default function Header() {
  return (
    <header className="header" role="banner" id="top">
      <div className="row">
        <nav className="nav" role="navigation">
          <ul className="nav__items">
            <li className="nav__item">
              <a href="#work" className="nav__link">
                Work
              </a>
            </li>
            <li className="nav__item">
              <a href="#clients" className="nav__link">
                Clients
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__text-box row">
        <div className="header__text">
          {/* <h1 className="heading-primary">
 
       <span>Fakhira Yaqoob</span>
     </h1> */}

          <h2>Welcome to Fakhira's Portfolio</h2>
          <a href="#contact" className="btn btn--pink">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
