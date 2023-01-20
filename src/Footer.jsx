import React from 'react'
import csi from "./assests/images/csilogo.png";
import nandini from "./assests/images/nandni.png";
import pranavasya from "./assests/images/pranavasya.png";
import uco from "./assests/images/UCO.png";
import viswhas from "./assests/images/vishwas.png";

import "./css/footer.css"
export default function Footer() {
  return (
    <div className='footer-container'>

      <div className="footer-image-box">
        <img className="image" src={csi} alt="" />
      </div>

      <div className="footer-image-box">
        <img className="image" src={uco} alt="" />
      </div>

      <div className="footer-image-box">
        <img className="image" src={nandini} alt="" />
      </div>

      <div className="footer-image-box">
        <img className="image" src={pranavasya} alt="" />
      </div>

      <div className="footer-image-box">
        <img className="image" src={viswhas} alt="" />
      </div>

    </div>
  )
}
