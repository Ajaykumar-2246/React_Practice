import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./portfolio.css";

const Portfolio = () => {
  let [list, setList] = useState(false);

  let data  =[
    {
      to:"my-portfolio",
      label:"Home",
      
    },
    {
      to:"my-portfolio/about",
      label:"About",
    },
    {
      to:"my-portfolio/education",
      label:"Education",
    },
    {
      to:"my-portfolio/service",
      label:"Service",
    },
    {
      to:"my-portfolio/contact",
      label:"Contact Me",
    }
  ]

  let toggleclose = () => {
    setList(false);
  };
  return (
    <nav className="nav-container">
      <Link className="title" to="#">
        <b>P</b>ortfolio
      </Link>
      <div className="menu" onClick={() => setList(!list)}>
        <span className="menu-item "></span>
        <span className="menu-item"></span>
        <span className="menu-item"></span>
      </div>
      <ul className={list ? "open" : ""} onClick={toggleclose}>
        {
          data.map((item,index)=>(
            <li key={index}>
              <Link className="navigate" to={item.to}>{item.label}</Link>
            </li>
          ))
        }
        
      </ul>
    </nav>
  );
};

export default Portfolio;
