import React, { useState } from "react";
import arrowUp from "../images/arrow-up.svg";

export default function BackToTop() {
  const [isBackToTopRendered, setIsBackToTopRendered] = useState(false);

  const backToTopStyle = {
    visibility: isBackToTopRendered ? "visible" : "hidden",
    opacity: isBackToTopRendered ? 1 : 0,
    transform: isBackToTopRendered ? "scale(1)" : "scale(0)",
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      setIsBackToTopRendered(true);
    } else {
      setIsBackToTopRendered(false);
    }
  });

  return (
    <a
      href="#top"
      style={backToTopStyle}
      className="back-to-top"
      title="Back to Top"
    >
      <img src={arrowUp} alt="Back to Top" className="back-to-top__image" />
    </a>
  );
}
