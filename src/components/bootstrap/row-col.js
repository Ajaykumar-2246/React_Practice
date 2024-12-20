import React from "react";

import "./row-col.css";

const Rowcol = () => {
  return (
    <div className="container p-0 ">
      <div className="row gx-1  ">
        <div className="col-sm-3 col-lg-3   bg-warning">
          <div>col-sm-3</div>
        </div>
        <div className="col-sm-4 col-lg-4 bg-danger">
          <div>col-sm-4</div>
        </div>
        <div className="col-sm-3 col-lg-3 bg-primary">
          <div>col-sm-3</div>
        </div>
        <div className="col-sm-2 col-lg-2 bg-secondary">
          <div>col-sm-2</div>
        </div>
      </div>
      <div className="row gx-1">
        <div className="col-sm-7 brown">
          <div>col-sm-7</div>
        </div>
        <div className="col-sm-4 bg-success">
          <div>col-sm-4</div>
        </div>
        <div className="col-sm-1 bg-dark">
          <div>col-sm-1</div>
        </div>
      </div>
      <div className="row gx-1">
        <div className="col-sm-2 color">
          <div>col-sm-2</div>
        </div>
        <div className="col-sm-5 bg-warning">
          <div>col-sm-5</div>
        </div>
        <div className="col-sm-5 bg-primary">
          <div>col-sm-5</div>
        </div>
      </div>
    </div>
  );
};

export default Rowcol;
