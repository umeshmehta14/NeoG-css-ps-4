import React from "react";
import "./question4.css";
const Question4 = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="upper-section">
          <button className="btn-1">1 month Free</button>
          <h2>Basic Plan</h2>
          <button className="btn-2">$9.99/mo</button>
        </div>
        <div className="lower-section">
          <ul>
            <li>Ad-free music listening</li>
            <li>Download 10k songs/device</li>
            <li>Login from 3 devices</li>
          </ul>
          <button className="btn">Sign Up</button>
        </div>
      </div>
      <div className="card">
        <div className="upper-section">
          <button className="btn-1">1 month Free</button>
          <h2>Pro Plan</h2>
          <button className="btn-2">$19.99/mo</button>
        </div>
        <div className="lower-section">
          <ul>
            <li>Ad-free music listening</li>
            <li>Download 20k songs/device</li>
            <li>Login from 5 devices</li>
          </ul>
          <button className="btn">Sign Up</button>
        </div>
      </div>
      <div className="card">
        <div className="upper-section">
          <button className="btn-1">1 month Free</button>
          <h2>Enterprise Plan</h2>
          <button className="btn-2">$59.99/mo</button>
        </div>
        <div className="lower-section">
          <ul>
            <li>Ad-free music listening</li>
            <li>Download 40k songs/device</li>
            <li>Login from unlimited devices</li>
          </ul>
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Question4;
