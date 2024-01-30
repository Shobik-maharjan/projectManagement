import React from "react";
import Home from "./components/Page/Home";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateProject from "./components/Content/CreateProject";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-project" element={<CreateProject />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
