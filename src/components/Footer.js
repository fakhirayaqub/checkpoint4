import React from "react";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";

export default function Footer() {
  return (
    <footer role="contentinfo" className="footer">
      <div className="row">
        <ul className="footer__social-links">
          <li className="footer__social-link-item">
            <a
              href="https://github.com/fakhirayaqub"
              title="Link to Github Profile"
            >
              <img src={github} className="footer__social-image" alt="Github" />
            </a>
          </li>
          <li className="footer__social-link-item">
            <a href="https://www.linkedin.com/in/fakhira-yaqoob/">
              <img
                src={linkedin}
                title="Link to Linkedin Profile"
                className="footer__social-image"
                alt="Linkedin"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
