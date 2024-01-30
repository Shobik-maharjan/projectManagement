import React, { useState } from "react";
import "./createProject.scss";

const CreateProject = (props) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { open } = props;
  console.log(name, message);
  return (
    <>
      <div id="openForm" className={open ? "openForm" : ""}>
        <h2>Create Project</h2>
        <div className="input-control">
          <label htmlFor="name">Name: </label>
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="input-control">
          <label htmlFor="message">Message: </label>
          <textarea
            className="textarea"
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
