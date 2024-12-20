import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./dropdown.css";

const Dropdown = () => {
  let [click,setClick]=useState(false);
  let menu= [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/about",
      text: "About",
    },
    {
      to: "/dropdown",
      text: "Dropdown",
    },
  ]
  let dropmenu =[
    {
      to:"service",
      text: "Service",
    },
    {
      to:"education",
      text: "Education",
    },
    {
      to:"experience",
      text: "Experience",
    },
  ]

  return (
    <React.Fragment>
      <nav className="navbar">
        <Link to="" className="title">
          Navbar
        </Link>
        <ul className="nav-menu">
          {menu.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link to={item.to}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="enter your search"
          />
          <button className="search-input btn">Search</button>
        </div>
      </nav>
      <div className="drop-wrap">
      <ul className={ click ?"show" :" "}
      onClick={()=>setClick(!dropmenu)}>
        {dropmenu.map((content, ind) => (
          <li key={ind}>
            <Link className="drop-item" to={content.to} onClick={()=>setClick(false)}>{content.text}</Link>
          </li>
        ))}
      </ul>
      </div>
      <div></div>
    </React.Fragment>
  );
};

export default Dropdown;