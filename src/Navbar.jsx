import React from 'react';
import ieee from "./assests/images/IEEE-WHITE.png";
import ieeeBlr from "./assests/images/ieee-blr.png";
import wie from "./assests/images/WIELogo-removebg-preview.png";
import "./css/navbar.css";

export default function Navbar() {
  return (
    <div className='header-container'>

      <div className="header-image-box">
        <img className="image" src={ieee} alt="" />
      </div>

      <div className="header-image-box">
        <img className="image" src={ieeeBlr} alt="" />
      </div>

      <div className="header-image-box">
        <img className="image2" src={wie} alt="" />
      </div>

    </div>
  )
}
