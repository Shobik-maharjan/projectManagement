import React, { useState } from "react";
import "./createProject.scss";
import Content from "./Content";
import { RxCross2 } from "react-icons/rx";

const CreateProject = (props) => {
  const [formData, setFormData] = useState({
    date: "today",
    message: "todays message",
    heading: ["Todo", "In Progress", "Done"],
  });
  const [selectedHeading, setSelectedHeading] = useState("Todo");
  const heading = ["Todo", "In Progresss", "Done"];
  const { open } = props;
  // console.log(heading);
  const [closeForms, setCloseForms] = useState("");
  const close = () => {
    setCloseForms("openForm");
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleHeadingChange = (e) => {
  //   const selectedHeading = e.target.value;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     heading: selectedHeading,
  //   }));
  // };

  const submitBtn = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div id="openForm" className={open ? "openForm" : ""}>
        <form action="" onSubmit={submitBtn}>
          <div className="head">
            <h2>Create Project</h2>
            <button className="closeForm" onClick={close}>
              <RxCross2 />
            </button>
          </div>
          <div className="input-control">
            <select
              name="heading"
              id="heading"
              value={selectedHeading}
              onChange={(e) => {
                setSelectedHeading(e.target.value);
              }}
            >
              {heading.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="input-control">
            <label htmlFor="name">Date: </label>
            <input
              className="input"
              type="text"
              name="date"
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="input-control">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <Content
        date={formData.date}
        message={formData.message}
        formheading={selectedHeading}
      />
    </>
  );
};

export default CreateProject;
