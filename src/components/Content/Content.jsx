import React, { useState } from "react";
import "./content.scss";
import { BsThreeDotsVertical } from "react-icons/bs";

const Content = (props) => {
  const { date, message, formheading } = props;
  const heading = ["Todo", "In Progress", "Done"];
  console.log(date, "asdadsa");
  console.log(heading[0], "headingasond");
  return (
    <>
      <div className="main">
        {heading.map((list, i) => (
          <div className="main-todo" id={i} key={list}>
            <div className="todo-heading">
              <h2>{list}</h2>
              <BsThreeDotsVertical className="three-dot" />
            </div>
            <div className="card" draggable="true">
              <div className="card-date">
                {" "}
                {list == formheading ? date : ""}
              </div>
              <div className="card-message">
                {list == formheading ? message : ""}
              </div>
              <div className="assign-to"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
