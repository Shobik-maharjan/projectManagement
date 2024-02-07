import React, { useEffect, useState } from "react";
import "./content.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { database } from "../config/FirebaseDatabase";
import { onValue, ref, off } from "firebase/database";

const Content = () => {
  const heading = ["Todo", "In Progress", "Done"];
  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    const fetchData = ref(database, "kanbanUI");
    const fetchDataListener = (snapShot) => {
      const data = snapShot.val();
      data ? setDataa(data) : [];
    };

    onValue(fetchData, fetchDataListener);

    // return () => {
    //   // Clean up the listener when the component is unmounted
    //   off(fetchData, fetchDataListener);
    // };
  }, []);

  // async function fetchData() {
  //   await fetch("https://kanbanui-default-rtdb.firebaseio.com/kanbanUI.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       data ? setDataa(data) : [];
  //       //   if (data) {
  //       //   setDataa(data);
  //       // } else {
  //       //     setDataa([]); // Set to empty array if not an array
  //       //   }
  //     });
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="main">
        {heading.map((list, i) => (
          <div className="main-todo" key={i}>
            <div className="todo-heading">
              <h2>{list}</h2>
              <BsThreeDotsVertical className="three-dot" />
            </div>

            {Object.entries(dataa).map(([key, item]) =>
              item.heading === list ? (
                <div className="card" key={key} draggable="true">
                  <div className="card-date">
                    {item.heading === "Todo" ? item.date : ""}
                    {item.heading === "In Progress" ? item.date : ""}
                    {item.heading === "Done" ? item.date : ""}
                  </div>
                  <div className="card-message">
                    {item.heading === "Todo" ? item.message : ""}
                    {item.heading === "In Progress" ? item.message : ""}
                    {item.heading === "Done" ? item.message : ""}
                  </div>
                  <div className="assign-to"></div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
