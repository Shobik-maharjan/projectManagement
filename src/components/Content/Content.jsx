import React, { useState } from "react";
import "./content.scss";
import { BsThreeDotsVertical } from "react-icons/bs";

const Content = () => {
  const card = ["Todo", "In Progress", "Done"];
  return (
    <>
      <div className="main">
        {card.map((list, i) => (
          <div className="main-todo" key={list}>
            <div className="todo-heading">
              <h2>{list}</h2>
              <BsThreeDotsVertical className="three-dot" />
            </div>
            <div className="card">
              <div className="card-date">Tomorrow</div>
              <div className="card-message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, cumque.
              </div>
              <div className="assign-to">assign</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
