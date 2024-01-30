import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import CreateProject from "../Content/CreateProject";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function create() {
    !isOpen ? setIsOpen("openForm") : setIsOpen("");
  }
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-container">
          <li className="navbar-3dash">=</li>
          <div className="navbar-search">
            <button className="search-button">
              <CiSearch />
            </button>
            <input
              type="search"
              name="search"
              className="search"
              placeholder="Search for members, projects, tasks"
            />
          </div>
          <li>
            <Link>
              <button onClick={create} className="navbar-button">
                Create&nbsp;Project
              </button>
            </Link>
          </li>
          <li className="navbar-avatar">
            <Link>
              <RxAvatar />
            </Link>
          </li>
        </ul>
      </nav>
      <CreateProject open={isOpen} />
    </>
  );
};

export default Navbar;
