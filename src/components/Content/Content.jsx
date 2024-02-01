import React, { useEffect, useState } from "react";
import "./content.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { database } from "../config/FirebaseDatabase";
import { onValue, ref, off } from "firebase/database";

const Content = (props) => {
  // const database = getDatabase();
  const { date, message, formheading } = props;
  const heading = ["Todo", "In Progress", "Done"];
  const [dataa, setDataa] = useState([]);
  // console.log(database);

  useEffect(() => {
    const fetchData = ref(database, "kanbanUI");

    const fetchDataListener = (snapShot) => {
      const data = snapShot.val();
      if (Array.isArray(data)) {
        setDataa(data);
      } else {
        setDataa([]); // Set to an empty array if not an array
      }

      console.log(data);
      setDataa(data);
    };

    onValue(fetchData, fetchDataListener);

    return () => {
      // Clean up the listener when the component is unmounted
      off(fetchData, fetchDataListener);
    };
  }, []);
  // const fetchData2 = () => {

  // function fetchData() {
  //   fetch("https://kanbanui-default-rtdb.firebaseio.com/kanbanUI.json", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (Array.isArray(data)) {
  //         setDataa(data);
  //       } else {
  //         setDataa([]); // Set to empty array if not an array
  //       }
  //     });
  // }

  // useEffect(() => {
  //   fetchDataListener();
  //   // fetchData();
  // }, []);

  console.log(dataa);
  // };

  return (
    <>
      <div className="main">
        {heading.map((list, i) => (
          <div className="main-todo" id={i} key={list}>
            <div className="todo-heading">
              <h2>{list}</h2>
              <BsThreeDotsVertical className="three-dot" />
            </div>

            {Array.isArray(dataa) &&
              dataa.map((item, i) => (
                <div className="card" key={i} draggable="true">
                  {item.message}
                  <div className="card-date">
                    {list == formheading ? date : ""}
                    {item}
                  </div>
                  <div className="card-message">
                    {list == formheading ? message : ""}
                  </div>
                  <div className="assign-to"></div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
