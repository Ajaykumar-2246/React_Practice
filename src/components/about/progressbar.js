import React from "react";

import "./progressbar.css";

const Progressbar = () => {
  return (
    <div className="progress-container">
      <h5>HTML</h5>
      <div className="progressbar">
        <div className="progressbar-fill">
          <div className="progress-label">100%</div>
        </div>
      </div>
      <h5>CSS</h5>
      <div className="progressbar">
        <div className="progressbar-fill css">
          <div className="progress-label  progress-css">90%</div>
        </div>
      </div>
      <h5>javascript</h5>
      <div className="progressbar">
        <div className="progressbar-fill javascript">
          <div className="progress-label progressjs">80%</div>
        </div>
      </div>
      <h5>React</h5>
      <div className="progressbar">
        <div className="progressbar-fill react">
          <div className="progress-label progressreact">80%</div>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;