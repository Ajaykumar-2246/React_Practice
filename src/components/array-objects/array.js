import React from "react";
import "./array.css";

const ArrayOfObject = () => {
  const users = [
    {
      name: "ravi",
      phno: 435456577,
      study: "college",
    },
    {
      name: "sai",
      phno: 222123454,
      study: "Inter",
    },
    {
      name: "Amit",
      phno: 987676765,
      study: "college",
    },
    {
      name: "Rahul",
      phno: 465467576,
      study: "MBA",
    },
  ];

  return (
    <div className="container">
      <h3>Display Array Of Objects</h3>
      <ul className="list">
        {users.map((user, index) => {
          return (
            <li key={index} className="item">
              <div>
                <span className="details">Name:{user.name}</span>
                <span className="details">PhoneNo: {user.phno}</span>
                <span className="details">Study: {user.study}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArrayOfObject;
