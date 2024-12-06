import React from "react";
import "./AboutUs.css";
import NavBar from "./NavBar";
import arrow from "/assets/arrow.svg";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="backbutton">
        <button
          onClick={() => navigate(-1, { replace: true })}
          style={{
            border: "none",
            background: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <img src={arrow} alt="arrow" className="backarrow" loading="lazy" />
        </button>
      </div>
      <div className="aboutus-container"></div>
    </>
  );
}
