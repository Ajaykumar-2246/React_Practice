import React from "react";

import "./checkout.css";

const Checkout = () => {
  let data = [
    {
      product: "fossil",
      describe: "Breif decription",
      price: 9.9,
    },
    {
      product: "titan",
      describe: "breif description",
      price: 14,
    },
    {
      product: "iphone",
      describe: "breif description",
      price: 1109,
    },
    {
      product: "smart watch",
      describe: "breif description",
      price: 200,
    },
  ];
  return (
    <div className="checkout">
      <div className="header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_i6mdYwrQX2HH4BV7XulFmA6ZCVqltO6nw&usqp=CAU"
          alt="Loading.."
        />
        <h1>Checkout form</h1>
      </div>
      <p className="description">
        Below is an example form built entirely with Bootstrap's form controls.
        Each required form group has a validation state that can be triggered by
        attempting to submit the form without completing it
      </p>
      <div className="form-container">
        <div className="row">
          <div className="cart-container">
            <h4>
              <span className="title">your cart</span>
              <span className="badge">4</span>
            </h4>
            <ul className="list-group">
              {data.map((item, index) => (
                <li className="list" key={index}>
                  <div className="cart">
                    <h5>{item.product}</h5>
                    <small>{item.describe}</small>
                  </div>
                  <span className="price">${item.price}</span>
                </li>
              ))}
            </ul>
            <div className="cart-redeem">
              <input type="text" placeholder="prommo code" />
              <button>Redeem</button>
            </div>
          </div>
        </div>
        <form action="" className="checkout-form">
          <h2 className="form-title">Billing address</h2>
          <div className="input-container">
            <div className="input-line">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstname"
                className="input-items"
                required
              />
            </div>
            <div className="input-line">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                className="input-items"
                required
              />
            </div>
          </div>

          <div className="input-line input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="enter your username"
            />
          </div>

          <div className="input-line input-group ">
            <label htmlFor="email">
              Email<span className="optional"> (optional)</span>
            </label>
            <input type="text" id="email" placeholder="enter your email" />
          </div>
          <div className="input-line input-group ">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="enter address"
              required
            />
          </div>
          <div className="input-line input-group ">
            <label htmlFor="address2">
              Address2<span className="optional">(optional)</span>
            </label>
            <input type="text" id="address2" placeholder="enter address" />
          </div>
          <div className=" select-option">
            <div className="input-line">
              <label htmlFor="country">Country</label>
              <select name="country" className="select" id="country">
                <option value="choose">choose</option>
                <option value=" india ">India</option>
                <option value="usa">United States </option>
              </select>
            </div>
            <div className="input-line">
              <label htmlFor="state">State</label>
              <select name="state" className="select" id="State">
                <option value="choose">choose</option>
                <option value="kerala">kerala</option>
              </select>
            </div>
            <div className="select">
              <label className="zip" htmlFor="zipcode">
                Zip
              </label>
              <input
                className="input"
                type="text"
                pattern="[0-9]{5}"
                id="zipcode"
              />
            </div>
          </div>

          <div className="checkbox">
            <div className="checkbox-item">
              <div className="check-one">
                <input type="checkbox" id="check" name="check" value="check" />
                <label htmlFor="check">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <input type="checkbox" id="check1" name="check1" value="check1" />
              <label htmlFor="check1">
                Save this information for next time
              </label>
            </div>
          </div>
          <div className="payment">
            <h4 className="payment-header">Payment</h4>
            <input type="radio" id="credit" name="payment" value="credit" />
            <label htmlFor="credit">Credit Card</label>
            <br />
            <input type="radio" id="debit" name="payment" value="debit" />
            <label htmlFor="debit">Debit Card</label>
            <br />
            <input type="radio" id="paypal" name="payment" value="paypal" />
            <label htmlFor="paypal">Paypal</label>
          </div>
          <div className="input-container">
            <div className="input-line">
              <label htmlFor="cardname">Name on a card</label>
              <input type="text" id="cardname" required />
            </div>
            <div className="input-line">
              <label htmlFor="cardno">Number on a card</label>
              <input type="text" id="cardno" required />
            </div>
          </div>
          <small className="text">Full name as displayed on card</small>
          <div className="expire">
            <div className="expire-input">
              <label htmlFor="expmonth">Expiry</label>
              <input type="text" id="expmonth" />
            </div>
            <div className="expire-input">
              <label htmlFor="cvv">CVV</label>
              <input type="number" id="cvv" />
            </div>
          </div>
          <br />
          <button className="btn">continue to checkout</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
