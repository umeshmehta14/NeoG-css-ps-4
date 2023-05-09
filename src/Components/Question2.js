import React from "react";
import "./question2.css";

const Question2 = () => {
  return (
    <>
    <form className="form-login">
    <h2>Login</h2>
      <label htmlFor="email">
       <strong>
         Email
        </strong>
        <p>
          <input type="email" id="email" className="inp" />
        </p>
      </label>
      <label htmlFor="password">
        <strong>
        Password
        </strong>
        <p>
          <input type="password" id="password" className="inp" />
        </p>
      </label>
      <button className="btn">Login</button>
      <a className="forget-link" href="/">Forget Password?</a>
    </form>
    </>
  );
};

export default Question2;
