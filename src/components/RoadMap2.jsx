import React from "react";
import "./RoadMap2.css";
import NavBar from "./NavBar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import arrow from "/assets/arrow.svg";
import tick from "/assets/tick.svg";
import hourglass from "/assets/hourglass.svg";
import blank from "/assets/blank.svg";
import greentick from "/assets/greentick.svg";
import pending from "/assets/pending.svg";
import star from "/assets/star.svg";

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

export default function RoadMap2() {
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

        <div className="phasen">
          <div className="rmn1 bg-[#00DB1D]">
            <h2 className="topicn">🚀 PHASE 1: LAUNCH</h2>
            <img src={tick} alt="tick" className="tickn" loading="lazy" />
          </div>

          <div className="rmn2">
            <div className="rmn3 group">
              <div className="rmn4">
                <div className="rmn4second">
                  <div className="rmn6div">
                    <h1 className="rmn6">
                      🎮 <t className="blktopic">GAMES</t>
                    </h1>
                    <img
                      src={star}
                      alt="star"
                      className="star"
                      loading="lazy"
                    />
                  </div>
                  <div className="rmn5">
                    <div className="rmn-item">
                      <img
                        src={greentick}
                        alt="greentick"
                        className="greentick"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Website launched with 10+ meme games
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={greentick}
                        alt="greentick"
                        className="greentick"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        New games every 1-2 days to stay trendy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rmn4">
                <div className="rmn4second">
                  <div className="rmn6div">
                    <h1 className="rmn6">
                      🫂 <t className="blktopic">COMMUNITY</t>
                    </h1>
                    <img
                      src={star}
                      alt="star"
                      className="star"
                      loading="lazy"
                    />
                  </div>
                  <div className="rmn5">
                    <div className="rmn-item">
                      <img
                        src={greentick}
                        alt="greentick"
                        className="greentick"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        All socials up and running (Telegram, X, TikTok)
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={greentick}
                        alt="greentick"
                        className="greentick"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Community team active and engaging with everyone
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rmn4">
                <div className="rmn4second">
                  <div className="rmn6div">
                    <h1 className="rmn6">
                      💰 <t className="blktopic">TOKEN</t>
                    </h1>
                    <img
                      src={star}
                      alt="star"
                      className="star"
                      loading="lazy"
                    />
                  </div>
                  <div className="rmn5">
                    <div className="rmn-item">
                      <img
                        src={greentick}
                        alt="greentick"
                        className="greentick"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        $WTF launched on Solana via fair launch on Pump Fun
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={greentick}
                        alt="greentick"
                        className="greentick"
                        loading="lazy"
                      />
                      <p className="rmn7">Now trading on Raydium</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="phasen">
          <div className="rmn1 bg-[#EA3300]">
            <h2 className="topicn">🏆 PHASE 2: COMMUNITY REPUTATION</h2>
            <img
              src={hourglass}
              alt="hourglass"
              className="hourglassn"
              loading="lazy"
            />
          </div>

          <div className="rmn2">
            <div className="rmn3 group">
              <div className="rmn4">
                <div className="rmn4second">
                  <div className="rmn6div">
                    <h1 className="rmn6">
                      🎮 <t className="blktopic">GAMES</t>
                    </h1>
                    <img
                      src={star}
                      alt="star"
                      className="star"
                      loading="lazy"
                    />
                  </div>
                  <div className="rmn5">
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Adding leaderboards to all meme games
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Connect with X account to play and compete
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Share scores and content directly to X
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rmn4">
                <div className="rmn4second">
                  <div className="rmn6div">
                    <h1 className="rmn6">
                      🫂 <t className="blktopic">COMMUNITY</t>
                    </h1>
                    <img
                      src={star}
                      alt="star"
                      className="star"
                      loading="lazy"
                    />
                  </div>
                  <div className="rmn5">
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Raid leaderboards to track reputation scores
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Gaming leaderboards to show top players
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rmn4">
                <div className="rmn4second">
                  <div className="rmn6div">
                    <h1 className="rmn6">
                      💰 <t className="blktopic">TOKEN</t>
                    </h1>
                    <img
                      src={star}
                      alt="star"
                      className="star"
                      loading="lazy"
                    />
                  </div>
                  {/* <div className="rmn5">
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        $WTF launched on Solana via fair launch on Pump Fun
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">Now trading on Raydium</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="phasen">
          <div className="rmn1 bg-[#000000]">
            <h2 className="topicn">⛓️ PHASE 3: BLOCKCHAIN INTEGRATION</h2>
            <img src={blank} alt="blank" className="blankn" loading="lazy" />
          </div>

          <div className="rmn2">
            <div className="rmn3 group">
              <div className="rmn4">
                <div className="rmn4second">
                  <div className="rmn6div">
                    <h1 className="rmn6">
                      🎮 <t className="blktopic">GAMES</t>
                    </h1>
                    <img
                      src={star}
                      alt="star"
                      className="star"
                      loading="lazy"
                    />
                  </div>
                  <div className="rmn5">
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Add energy system that refills over time for each game
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Add consumables to refill energy faster
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Launch Community Pass NFTs for faster energy recharge
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Connect Solana wallets to player accounts
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Use $WTF from sale of consumables to reward leaderboard
                        winners
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rmn4">
                <div className="rmn4second">
                  <div className="rmn6div">
                    <h1 className="rmn6">
                      🫂 <t className="blktopic">COMMUNITY</t>
                    </h1>
                    <img
                      src={star}
                      alt="star"
                      className="star"
                      loading="lazy"
                    />
                  </div>
                  <div className="rmn5">
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Track on-chain $WTF holders for diamond hands reputation
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Create VIP group for high-reputation members (gaming,
                        raiding, and token holding)
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Give Community Pass to top reputation holders
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rmn4">
                <div className="rmn4second">
                  <div className="rmn6div">
                    <h1 className="rmn6">
                      💰 <t className="blktopic">TOKEN</t>
                    </h1>
                    <img
                      src={star}
                      alt="star"
                      className="star"
                      loading="lazy"
                    />
                  </div>
                  <div className="rmn5">
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Use $WTF to buy consumables in games
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Create token loop: Players spend $WTF on consumables →
                        Split earnings between top players and treasury
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Set up treasury to collect small % from consumables for
                        servers, collabs, airdrops, and marketing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="phasen">
          <div className="rmn1 bg-[#000000]">
            <h2 className="topicn">🔒 PHASE 4: SHARED OWNERSHIP</h2>
            <img src={blank} alt="blank" className="blankn" loading="lazy" />
          </div>

          <div className="rmn2">
            <div className="rmn3 group">
              <div className="rmn4">
                <div className="rmn4second">
                  <div className="rmn6div">
                    <h1 className="rmn6">
                      🎮 <t className="blktopic">GAMES</t>
                    </h1>
                    <img
                      src={star}
                      alt="star"
                      className="star"
                      loading="lazy"
                    />
                  </div>
                  <div className="rmn5">
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Own games through auctions and earn % of their revenue
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rmn4">
                <div className="rmn4second">
                  <div className="rmn6div">
                    <h1 className="rmn6">
                      🫂 <t className="blktopic">COMMUNITY</t>
                    </h1>
                    <img
                      src={star}
                      alt="star"
                      className="star"
                      loading="lazy"
                    />
                  </div>
                  <div className="rmn5">
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Scale growth through treasury-funded marketing and
                        collabs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rmn4">
                <div className="rmn4second">
                  <div className="rmn6div">
                    <h1 className="rmn6">
                      💰 <t className="blktopic">TOKEN</t>
                    </h1>
                    <img
                      src={star}
                      alt="star"
                      className="star"
                      loading="lazy"
                    />
                  </div>
                  <div className="rmn5">
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Enable $WTF payments for game auctions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="phasen">
          <div className="rmn1 bg-[#000000]">
            <h2 className="topicn">⚖️ PHASE 5: SUSTAINABILITY</h2>
            <img src={blank} alt="blank" className="blankn" loading="lazy" />
          </div>

          <div className="rmn2">
            <div className="rmn3 group">
              <div className="rmn4">
                <div className="rmn4second">
                  <div className="rmn6div">
                    <h1 className="rmn6">
                      🎮 <t className="blktopic">GAMES</t>
                    </h1>
                    <img
                      src={star}
                      alt="star"
                      className="star"
                      loading="lazy"
                    />
                  </div>
                  <div className="rmn5">
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Add ads for funding ecosystem sustainability without the
                        need to sell $WTF to cover operational costs
                      </p>
                    </div>
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Add NFT profile pictures for players
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rmn4">
                <div className="rmn4second">
                  <div className="rmn6div">
                    <h1 className="rmn6">
                      🫂 <t className="blktopic">COMMUNITY</t>
                    </h1>
                    <img
                      src={star}
                      alt="star"
                      className="star"
                      loading="lazy"
                    />
                  </div>
                  <div className="rmn5">
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Launch WTF NFT Collection with privileged access to
                        Community Pass Holders
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rmn4">
                <div className="rmn4second">
                  <div className="rmn6div">
                    <h1 className="rmn6">
                      💰 <t className="blktopic">TOKEN</t>
                    </h1>
                    <img
                      src={star}
                      alt="star"
                      className="star"
                      loading="lazy"
                    />
                  </div>
                  <div className="rmn5">
                    <div className="rmn-item">
                      <img
                        src={pending}
                        alt="pending"
                        className="pending"
                        loading="lazy"
                      />
                      <p className="rmn7">
                        Use $WTF to mint WTF NFTs (tokens get burned)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
