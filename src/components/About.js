
import React from "react";
import photo from "../images/photo.jpeg"


export default function HomePage() {
  return (
    <section className="about" id="about">
  <div className="row">
    <h2>About Me</h2>
    <div className="about__content">
      <div className="about__text">
        
        <p>
      I am a Fullstack Web-developer based in Berlin. My work stack is ReactJS, NodeJS, Express, Mysql.    
   
        </p>
       
        <a href="#" className="btn">My Resume</a>
      </div>

      <div className="about__photo-container">
      
        <img className="about__photo" src={photo} alt="" />
      </div>
    </div>
  </div>
</section>
  );
}








  