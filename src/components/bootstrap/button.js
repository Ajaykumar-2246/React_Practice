import React from 'react';
import './button.css'; 

const Button = () => {
  return (
    <div className='container bg-secondary d-flex p-0 align-items-center'>
      <div className="card bg-light p-10 mw-100"> 
        <h3>Buttons</h3>
        <p>you can have different types of button</p>
        <div className='card-btn'>
          <button className='btn btn-success'>Cancel</button>
          <button className='btn btn-danger'>Yes</button>
          <button className='btn btn-warning'>Ok</button>
          <button className='btn btn-primary'>No</button>
        </div>
      </div>
    </div>
  )
}

export default Button;
