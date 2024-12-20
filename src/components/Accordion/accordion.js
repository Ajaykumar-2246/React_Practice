import React, { useState } from "react";
import "./accordion.css";
function Accordion() {
  const [details, setDetails] = useState([
    {
      title: "What is React used for?",
      body: "React can be used to build web, mobile, and desktop applications, making it a versatile framework for cross-platform development. React Native, a framework based on React, is specifically designed for mobile app development, while React Desktop allows you to create desktop applications using web technologies",
      showAccordion: false,
    },
    {
      title: "Is React for frontend?",
      body: "To give you a gentle introduction, React is an open-source JavaScript library used for frontend development, which was developed by Facebook.",
      showAccordion: false,
    },
    {
      title: "Is React easy or Python?",
      body: "Python is slightly better than ReactJs because Python is a general-purpose programming language that comes with a huge number of libraries.",
      showAccordion: false,
    },
    {
      title: "Why React is so popular?",
      body: "React has gained widespread adoption in the web development community due to its ease of use, efficiency, and versatility.",
      showAccordion: false,
    },
  ]);
  let toggle = (index) => {
    let res = details.map((item, ind) => {
      if (ind === index) {
        item.showAccordion = !item.showAccordion;
      } else {
        item.showAccordion = false;
      }
      return item;
    });
    setDetails(res);
  };

  return (
    <div className="Accordion">
      {details.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" onClick={() => toggle(index)}>
            <div className="title">{item.title}</div>
            <div className="arrow">
              <svg width="20" height="10" viewBox="-2.5 -5 75 60">
                <path
                  d="M0,0 l35,50 l35,-50"
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeWidth="7"
                />
              </svg>
            </div>
          </div>
          {item.showAccordion && (
            <div className="accordion-body">{item.body}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
