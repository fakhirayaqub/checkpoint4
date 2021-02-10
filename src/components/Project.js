import React from "react";
import githubImg from "../images/github.svg";

export default function Project(props) {
  return (
    <div className="work__box">
      <div className="work__text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>

        <div className="work__links">
          <a href={props.projectURL} target="_blank" className="link__text">
            Visit Site <span>&rarr;</span>
          </a>
          <a href={props.githubLink} title="View Source Code" target="_blank">
            <img src={githubImg} className="work__code" alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="work__image-box">
        <img
          src={`http://localhost:8080/api/image/${props.projectImage}`}
          className="work__image"
          alt="Project 1"
        />
      </div>
    </div>
  );
}
