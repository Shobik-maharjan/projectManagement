import React, { useState } from "react";
import "./createProject.scss";
import Content from "./Content";
import { RxCross2 } from "react-icons/rx";
import { ref, push, set, onValue } from "firebase/database";
import { database, db } from "../config/FirebaseDatabase";
import { collection, addDoc } from "firebase/firestore";

const CreateProject = (props) => {
  const [formData, setFormData] = useState({
    date: "",
    message: "",
  });
  const [selectedHeading, setSelectedHeading] = useState("Todo");
  const heading = ["Todo", "In Progress", "Done"];
  const { open } = props;
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

  // const { date, message } = formData;
  // const submitData = async (e) => {
  //   e.preventDefault();
  //   console.log("submit clicked");
  //   const res = await fetch(
  //     "https://kanbanui-default-rtdb.firebaseio.com/kanbanUI.json",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify([
  //         {
  //           date,
  //           message,
  //           heading: selectedHeading,
  //         },
  //       ]),
  //     }
  //   );
  //   if (res) {
  //     setFormData({
  //       date: "",
  //       message: "",
  //     });
  //     alert("Data Stored Successfully");
  //     window.location.reload();
  //   }
  // };

  const submitData = async () => {
    const { date, message } = formData;
    const res = await push(ref(database, "/kanbanUI"), {
      date,
      message,
      heading: selectedHeading,
    });

    if (res) {
      setFormData({
        date: "",
        message: "",
      });
      alert("Data Stored Successfully");
      window.location.reload();
    }
  };

  return (
    <>
      <div id="openForm" className={open ? "openForm" : ""}>
        <form action="" method="POST">
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
            <label htmlFor="date">Date: </label>
            <input
              className="input"
              type="text"
              name="date"
              id="date"
              value={formData.date}
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
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="input-control">
            <button type="button" onClick={submitData}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProject;
