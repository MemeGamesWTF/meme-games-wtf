import React from "react";
import "./Footer2.css";
import Box from "../assets/empbox.png";

export default function Footer2() {
  return (
    <div className="footermain">
      {/* <a href="https://x.com/memegameswtf" className="footicon2">
      <footer className="foot1">
        <div className="foot2">
          <ul className="foot3 group">
            <p className="text-white font-bold text-lg">Follow us on &nbsp;</p>
            <a
              href="https://x.com/memegameswtf"
              className="footicon1"
            ></a>
          </ul>
        </div>
      </footer>
      </a> */}
      <div className="footfoot">
        <img src={Box} alt="aboutus" className="foot" loading="lazy" />
      </div>
      <div className="footfoot2">
        <p className="ptag text-back font-bold text-xl">Follow us on &nbsp;</p>
        <a href="https://x.com/memegameswtf?s=21" className="footicon1"></a>
        <p className="text-back font-bold text-lg">&nbsp;&nbsp;&nbsp;</p>
        <a href="https://t.me/memegameswtf" className="footicon11"></a>
      </div>
    </div>
  );
}
