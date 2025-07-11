import React, { useState } from "react";
import "./GregPage2.css";
import Footer from "./Footer2";
import GregBanner from "/assets/gregbnr.webp";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function GregPage2() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Gallery images
  const galleryImages = [
    {
      src: "/assets/next1.webp",
      alt: "next1"
    },
    {
      src: "/assets/next2.webp",
      alt: "next2"
    },
    {
      src: "/assets/next3.webp",
      alt: "next3"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <>
      <div className="gp1">
        <h2 className="gph1">
          A Thousand Gregs.
          <br />
          One Universe Left to Save.
        </h2>
        <p className="gpp1">
          A sci-fi platformer born from meme chaos, where the multiverse
          unravels and only Greg can piece it back together.
        </p>
        <p className="gpp2">
          The multiverse is fracturing. Greg 1 has lost contact with his
          variants, and strange collars, missing heads, and alien signals are
          the only clues left behind. Greg Multiverse is a sci-fi platformer
          that blends conspiracy, chaos, and cosmic mystery—all wrapped in meme
          culture madness.
        </p>
      </div>

      <div className="gp-banner">
        <img src={GregBanner} alt="Banner" className="gp-banner-img" />
        {/* <div className="lb-buttons">
          <Link to={`/game/${gameName}`} className="lb-btn play-btn">
            PLAY
          </Link>
        </div> */}
      </div>

      <div className="gp3">
        <p className="gpp3">
          Dive into the teaser below and witness the first 60 seconds that kick
          it all off!
        </p>
      </div>

      <div className="video-container">
        <iframe
          width="1200"
          height="670"
          src="https://www.youtube.com/embed/F8lHr3ku9zQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setVideoLoaded(true)}
          className={`youtube-iframe ${videoLoaded ? "loaded" : ""}`}
        ></iframe>
      </div>

      <div className="gp4">
        <h2 className="gph2">Powered by $WTF x $Greg</h2>
        <p className="gpp4">
          This game is the product of two meme-world powerhouses:{" "}
          <span className="font-semibold">$WTF</span>, the ultimate meme token
          driving virality and engagement, and{" "}
          <span className="font-semibold">$Greg</span>, a beloved NFT community
          rich with lore and character. Together, they're redefining what meme
          coins can do—no more passive holding. This is
          play-to-earn-meets-play-to-build, where your NFTs and tokens actually
          shape the world.
        </p>
      </div>

      <div className="gp5">
        <p className="gpp5 italic">Sneak peeks of what's coming!</p>
      </div>

      {/* <div className="gp6">GALLERY</div> */}

      {/* Interactive Gallery */}
      <div className="gp6">
        <div className="relative">
          {/* Main image container */}
          <div className="relative overflow-hidden rounded-[10px] bg-transparent">
            <img 
              src={galleryImages[currentImage].src} 
              alt={galleryImages[currentImage].alt}
              className="w-full h-auto"
            />
            
            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Image counter */}
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentImage + 1} / {galleryImages.length}
          </div>
        </div>

        {/* Image info */}
        {/* <div className="bg-white p-6 mt-4 rounded-lg text-center">
          <p className="gpp6 text-lg font-semibold mb-2">{galleryImages[currentImage].title}:</p>
          <p className="gpp7">{galleryImages[currentImage].description}</p>
        </div> */}

        {/* Thumbnail navigation */}
        {/* <div className="flex justify-center mt-4 space-x-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentImage 
                  ? 'bg-blue-500' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div> */}

        {/* Next/Previous buttons */}
        {/* <div className="flex justify-between mt-6">
          <button
            onClick={prevImage}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors duration-200"
          >
            <ChevronLeft size={20} />
            <span>Previous</span>
          </button>
          
          <button
            onClick={nextImage}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
          >
            <span>Next</span>
            <ChevronRight size={20} />
          </button>
        </div> */}
      </div>

      <div className="gp7">
        <h2 className="gph3">
          “Explore. Decode. Survive the Greg Collapse.”
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-white pb-5 p-1 flex flex-col items-center justify-center text-center rounded-[10px]">
            <img
              src="/assets/gregsecond.webp"
              alt="gregsecond"
              className="mb-4 w-[400px] rounded-[10px]" // Add some margin bottom if needed
            />
            <p className="gpp6">Multiverse Theory:</p>
            <p className="gpp7">Built on real science + wild meme logic</p>
          </div>
          <div className="bg-white pb-5 p-1 flex flex-col items-center justify-center text-center rounded-[10px]">
            <img
              src="/assets/gregfourth.webp"
              alt="gregfourth"
              className="mb-4 w-[400px] rounded-[10px]" // Add some margin bottom if needed
            />
            <p className="gpp6">Alien Worlds + Conspiracy Boards:</p>
            <p className="gpp7">You're Greg, you're the detective</p>
          </div>
          <div className="bg-white pb-5 p-1 flex flex-col items-center justify-center text-center rounded-[10px]">
            <img
              src="/assets/gregfirst.webp"
              alt="gregfirst"
              className="mb-4 w-[400px] rounded-[10px]" // Add some margin bottom if needed
            />
            <p className="gpp6">Variant Hunt:</p>
            <p className="gpp7">
              Discover lost Gregs across bizarre alien planets
            </p>
          </div>
        </div>
      </div>

      <div className="gp8">
        <h2 className="gph4">
          Become a part of our legendary communities!
        </h2>
      </div>

      <div className="gp9">
        <p className="gpp8">Follow our socials for future updates:</p>
      </div>

      <div className="gp10">
        <a href="https://x.com/memegameswtf0">
          <img
            src="/assets/twitter4.svg"
            alt="twitterlogo"
            className="gpsocialicon h-[25px] w-[25px]"
          />
        </a>
        <p className="gpp9">||</p>
        <a href="https://t.me/+1sk-SOujR4w1ODRk">
          <img
            src="/assets/telegramwhite.svg"
            alt="telelogo"
            className="gpsocialicon h-[28px] w-[28px]"
          />
        </a>
      </div>

      <div className="gregfooter">
        <Footer />
      </div>
    </>
  );
}
