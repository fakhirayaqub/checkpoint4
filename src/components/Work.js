import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Project from "./Project";
import { getDataFromPath, postDataToPath } from "../api";
import "./Work.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export default function Work() {
  const [projects, setProjects] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectURL, setProjectURL] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [message, setMessage] = useState("");

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("projectImage", projectImage);
    formData.append("projectTitle", projectTitle);
    formData.append("projectDescription", projectDescription);
    formData.append("projectURL", projectURL);
    formData.append("githubLink", githubLink);

    const response = await postDataToPath("/api/projects", formData);
    if (response.error) {
      setMessage(response.error);
    } else {
      setMessage("");
      console.log(response);
    }
    setIsOpen(false);
  };

  const getProjects = async () => {
    const response = await getDataFromPath("/api/projects");
    console.log(response);
    setProjects(response);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section className="work" id="work">
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} id="add-project-form">
          <h3>Add new project</h3>
          <fieldset>
            <input
              onChange={(e) => setProjectTitle(e.target.value)}
              placeholder="Project Title"
              type="text"
              tabIndex="1"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <textarea
              onChange={(e) => setProjectDescription(e.target.value)}
              placeholder="Description"
              tabIndex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              onChange={(e) => setProjectURL(e.target.value)}
              placeholder="Project URL"
              type="url"
              tabIndex="3"
              required
            />
          </fieldset>
          <fieldset>
            <input
              onChange={(e) => setGithubLink(e.target.value)}
              placeholder="Github Link"
              type="text"
              tabIndex="4"
              required
            />
          </fieldset>
          <fieldset>
            <input
              onChange={(e) => setProjectImage(e.target.files[0])}
              type="file"
              tabIndex="4"
              required
            />
          </fieldset>

          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
          <button onClick={closeModal}>close</button>
          <p>{message}</p>
        </form>
      </Modal>
      <div className="row">
        <h2>
          My Work
          <svg
            onClick={openModal}
            className="svg-circleplus"
            viewBox="0 0 100 100"
          >
            <line x1="52.5" y1="80" x2="87.5" y2="80" strokeWidth="5"></line>
            <line x1="70" y1="62.5" x2="70" y2="97.5" strokeWidth="5"></line>
          </svg>
        </h2>

        <div className="work__boxes">
          {projects
            ? projects.map((project) => (
                <Project
                  title={project.title}
                  description={project.description}
                  projectImage={project.project_image}
                  projectURL={project.project_URL}
                  githubLink={project.github_link}
                />
              ))
            : ""}
        </div>
      </div>
    </section>
  );
}
