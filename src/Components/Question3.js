import React from "react";
import "./question3.css"
const Question3 = () => {
  return (
    <div className="container">
      <header>
        <h1>Photo Gallery</h1>
      </header>
      <nav>
        <ul className="navbar">
          <li className="btn">All</li>
          <li>Nature</li>
          <li>Birds</li>
          <li>Animal</li>
        </ul>
      </nav>
      <div className="image-section">
        <div className="image-box">
            <img src="https://stockarch.com/files/imagecache/Preview/16/02/cardboard_box.jpg" alt="Not Available" />
        </div>
        <div className="image-box">
            <img src="https://stockarch.com/files/imagecache/Preview/16/02/cardboard_box.jpg" alt="Not Available" />
        </div>
        <div className="image-box">
            <img src="https://stockarch.com/files/imagecache/Preview/16/02/cardboard_box.jpg" alt="Not Available" />
        </div>
      </div>
    </div>
  );
};

export default Question3;
