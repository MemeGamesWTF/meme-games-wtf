import React from "react";
import "./RoadMap.css";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import arrow from "/assets/arrow.svg";
import tick from "/assets/tick.svg";
import hourglass from "/assets/hourglass.svg";
import blank from "/assets/blank.svg";
import rm1 from "/assets/rm1.webp";
import rm2 from "/assets/rm2.webp";
import rm3 from "/assets/rm3.webp";
import rm4 from "/assets/rm4.webp";
import rm5 from "/assets/rm5.webp";
import rm6 from "/assets/rm6.webp";
import rm7 from "/assets/rm7.webp";
import rm8 from "/assets/rm8.webp";
import rm9 from "/assets/rm9.webp";
import rm10 from "/assets/rm10.webp";
import rm11 from "/assets/rm11.webp";
import rm12 from "/assets/rm12.webp";
import rm13 from "/assets/rm13.webp";
import rm14 from "/assets/rm14.webp";
import rm15 from "/assets/rm15.webp";

export default function RoadMap() {
  const navigate = useNavigate();
  return (
    <>
      <>
        <NavBar />

        <div className="backbutton">
          <button
            onClick={() => navigate(-1)}
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

        <div className="phase">
          <div className="rm1 bg-[#00DB1D]">
            <h2 className="topic">🚀 PHASE 1: LAUNCH</h2>
            <img src={tick} alt="tick" className="tick" loading="lazy" />
          </div>

          <div className="rm2">
            <div className="rm3 group">
              <img src={rm1} alt="rm1" className="rm" loading="lazy" />
              <img src={rm2} alt="rm2" className="rm" loading="lazy" />
              <img src={rm3} alt="rm3" className="rm" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="phase">
          <div className="rm1 bg-[#EA3300]">
            <h2 className="topic">🏆 PHASE 2: COMMUNITY REPUTATION</h2>
            <img src={hourglass} alt="hourglass" className="hourglass" loading="lazy" />
          </div>

          <div className="rm2">
            <div className="rm3 group">
              <img src={rm4} alt="rm4" className="rm" loading="lazy" />
              <img src={rm5} alt="rm5" className="rm" loading="lazy" />
              <img src={rm6} alt="rm6" className="rm" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="phase">
          <div className="rm1 bg-[#000000]">
            <h2 className="topic">⛓️ PHASE 3: BLOCKCHAIN INTEGRATION</h2>
            <img src={blank} alt="blank" className="blank" loading="lazy" />
          </div>

          <div className="rm2">
            <div className="rm3 group">
              <img src={rm7} alt="rm7" className="rm" loading="lazy" />
              <img src={rm8} alt="rm8" className="rm" loading="lazy" />
              <img src={rm9} alt="rm9" className="rm" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="phase">
          <div className="rm1 bg-[#000000]">
            <h2 className="topic">🔒 PHASE 4: SHARED OWNERSHIP</h2>
            <img src={blank} alt="blank" className="blank" loading="lazy" />
          </div>

          <div className="rm2">
            <div className="rm3 group">
              <img src={rm10} alt="rm10" className="rm" loading="lazy" />
              <img src={rm11} alt="rm11" className="rm" loading="lazy" />
              <img src={rm12} alt="rm12" className="rm" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="phase">
          <div className="rm1 bg-[#000000]">
            <h2 className="topic">⚖️ PHASE 5: SUSTAINABILITY</h2>
            <img src={blank} alt="blank" className="blank" loading="lazy" />
          </div>

          <div className="rm2">
            <div className="rm3 group">
              <img src={rm13} alt="rm13" className="rm" loading="lazy" />
              <img src={rm14} alt="rm14" className="rm" loading="lazy" />
              <img src={rm15} alt="rm15" className="rm" loading="lazy" />
            </div>
          </div>
        </div>

      </>
    </>
  );
}
