import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card w-75 p-0">
        <div className="row m-0  d-flex ">
          <div className="col-4 p-0">
            <img className=" img-fluid" src="https://picsum.photos/200" alt="loading.." />
          </div>
          <div className="col-8 p-0">
            <h2>Card Title</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              illo officiis quibusdam libero maxime sequi, voluptatem eligendi?
              Reiciendis beatae aliquam. 
            </p>
            <div className="footer bg-secondary d-flex justify-content-between p-2">
              <div className="footer-title d-flex justify-content-between w-100">
                <p> 5 star</p>
                <button className="btn btn-primary">book her</button>
              </div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
