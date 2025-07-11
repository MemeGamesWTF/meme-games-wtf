import React, { useState } from "react";
import "./Footer2.css";
import Copy from "/assets/duplicate.svg";
import { Link } from "react-router-dom";

const x_url = import.meta.env.VITE_X_URL
  ? import.meta.env.VITE_X_URL
  : "https://x.com/memegameswtf";

export default function Footer2() {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = () => {
    const textToCopy = "AgDNMAi8r2QS1FQEeTHLsZSmkQKCK7xXP2bR7jQ2pump";
    navigator.clipboard.writeText(textToCopy).then(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
    });
  };

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
      <div className="footNew">
        <p className="ptag text-black text-xl">
          CA: AgDNMAi8r2QS1FQEeTHLsZSmkQKCK7xXP2bR7jQ2pump &nbsp;
          {/* <button
          onClick={copyToClipboard}
          className="copyButton text-blue-500"
        >
          <img src={Copy} className="copyimg" loading="lazy" />
        </button> */}
        </p>
        <button onClick={copyToClipboard} className="copyButton text-blue-500">
          <img src={Copy} className="copyimg" loading="lazy" />
        </button>
        {showTooltip && <span className="tooltip">Copied to clipboard!</span>}
      </div>
      <div className="footNew2">
        <p className="ptag2 text-black text-xl">
          CA: AgDNMAi8r2QS1FQEeTHLsZSmkQKCK7xXP2bR7jQ2pump &nbsp;
        </p>
        <button onClick={copyToClipboard} className="copyButton text-blue-500">
          <img src={Copy} className="copyimg" loading="lazy" />
        </button>
        {showTooltip && <span className="tooltip">Copied to clipboard!</span>}
      </div>

      <div className="atag22">
        <div className="atag222">
          {/* X */}
          <p className="ptag text-back font-bold text-xl">
            Follow us on &nbsp;
          </p>
          <a href={x_url} className="footicon1"></a>
          {/* Insta */}
          <p className="text-white font-bold text-lg">
            &nbsp;&nbsp;&nbsp;
          </p>
          <a href="https://www.instagram.com/memegameswtf" className="instaicon"></a>
          {/* TikTok */}
          <p className="text-white font-bold text-lg">
            &nbsp;&nbsp;&nbsp;
          </p>
          <a href="https://www.tiktok.com/@memegames.wtf" className="tiktokicon"></a>
          {/* YT */}
          <p className="text-white font-bold text-lg">
            &nbsp;&nbsp;&nbsp;
          </p>
          <a href="https://www.youtube.com/@memegameswtf" className="yticon"></a>
          {/* Telegram */}
          <p className="text-back font-bold text-lg">&nbsp;&nbsp;&nbsp;</p>
          <a href="https://t.me/+1sk-SOujR4w1ODRk" className="footicon11"></a>
          {/* Kick */}
          <p className="text-back font-bold text-lg">&nbsp;&nbsp;&nbsp;</p>
          <a href="https://kick.com/memegameswtf" className="kickicon"></a>
          {/* Gecko */}
          <p className="text-back font-bold text-lg">&nbsp;&nbsp;&nbsp;</p>
          <a href="https://www.geckoterminal.com/solana/pools/7bNW3AZzo8Jc8gFs2Q2a5gEbji8SoDD8YKbvURJfy6M8" className="geckoicon"></a>
          {/* Pump */}
          {/* <p className="text-white font-bold text-lg">&nbsp;&nbsp;&nbsp;</p>
        <a
          href="https://pump.fun/coin/AgDNMAi8r2QS1FQEeTHLsZSmkQKCK7xXP2bR7jQ2pump"
          className="pumpicon"
        ></a> */}
          {/* Dex */}
          <p className="text-white font-bold text-lg">
            &nbsp;&nbsp;&nbsp;
          </p>
          <a
            href="https://dexscreener.com/solana/7bNW3AZzo8Jc8gFs2Q2a5gEbji8SoDD8YKbvURJfy6M8"
            className="dexicon"
          ></a>
        </div>
      </div>
      <div className="mobileatag22">
        <div className="mobileatag222">
          {/* X */}
          <p className="mobileptag text-back font-bold text-sm">
            Follow us on &nbsp;
          </p>
          <a href={x_url} className="footicon1"></a>
          {/* Insta */}
          <p className="text-white font-bold text-lg">
            &nbsp;
          </p>
          <a href="https://www.instagram.com/memegameswtf" className="instaicon"></a>
          {/* TikTok */}
          <p className="text-white font-bold text-lg">
            &nbsp;
          </p>
          <a href="https://www.tiktok.com/@memegames.wtf" className="tiktokicon"></a>
          {/* YT */}
          <p className="text-white font-bold text-lg">
            &nbsp;
          </p>
          <a href="https://www.youtube.com/@memegameswtf" className="yticon"></a>
          {/* Telegram */}
          <p className="text-back font-bold text-lg">&nbsp;</p>
          <a href="https://t.me/+bTQird4VphdlNzhk" className="footicon11"></a>
          {/* Kick */}
          <p className="text-back font-bold text-lg">&nbsp;</p>
          <a href="https://kick.com/memegameswtf" className="kickicon"></a>
          {/* Gecko */}
          <p className="text-back font-bold text-lg">&nbsp;</p>
          <a href="https://www.geckoterminal.com/solana/pools/7bNW3AZzo8Jc8gFs2Q2a5gEbji8SoDD8YKbvURJfy6M8" className="geckoicon"></a>
          {/* Pump */}
          {/* <p className="text-white font-bold text-lg">&nbsp;&nbsp;&nbsp;</p>
        <a
          href="https://pump.fun/coin/AgDNMAi8r2QS1FQEeTHLsZSmkQKCK7xXP2bR7jQ2pump"
          className="pumpicon"
        ></a> */}
          {/* Dex */}
          <p className="text-white font-bold text-lg">
            &nbsp;
          </p>
          <a
            href="https://dexscreener.com/solana/7bNW3AZzo8Jc8gFs2Q2a5gEbji8SoDD8YKbvURJfy6M8"
            className="dexicon"
          ></a>
        </div>
      </div>
    </div>
  );
}
