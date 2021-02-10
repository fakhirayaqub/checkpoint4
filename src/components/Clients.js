import React from "react";
import goldengrid from "../images/goldengrid.png";
import ronjones from "../images/ronjones.png";


export default function Clients() {
  return (
  

<section className="client" id="clients">
<div className="row">
  <h2>Clients</h2>
  <div className="client__logos">
   
    <img src={goldengrid} className="client__logo" alt="Company 2" />
    <img src={ronjones} className="client__logo" alt="Company 3" />
    <img src={goldengrid} className="client__logo" alt="Company 2" />

    <img src={ronjones} className="client__logo" alt="Company 3" />
   
  </div>
</div>
</section>
      
  
  );
}




