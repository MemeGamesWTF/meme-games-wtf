import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "./Footer2";
import "./Comic.css";
import { supabase } from "../supabaseClient";

const Comic = () => {
  const { comicsData: initialComicsData } = useLoaderData();
  const [comicsData, setComicsData] = useState(initialComicsData);
  const [currentPage, setCurrentPage] = useState(1);
  const comicsPerPage = 1; // Show one comic per page
  
  const indexOfLastComic = currentPage * comicsPerPage;
  const indexOfFirstComic = indexOfLastComic - comicsPerPage;
  const currentComic = comicsData.slice(indexOfFirstComic, indexOfLastComic)[0]; // Get only one comic
  
  // State to determine which image to show
  const [showSecondImage, setShowSecondImage] = useState(false);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [comicsData]);
  
  // Effect to check if the current time is past the enable_at time
  useEffect(() => {
    if (!currentComic) return;
    
    const checkEnableTime = () => {
      const now = new Date();
      const enableAt = new Date(currentComic.enable_at);
      
      if (now >= enableAt) {
        setShowSecondImage(true);
      } else {
        setShowSecondImage(false);
        
        // If not enabled yet, set a timeout to check again at the enable time
        // const timeUntilEnable = enableAt - now;
        // if (timeUntilEnable > 0 && timeUntilEnable < 2147483647) {
        //   const timer = setTimeout(() => {
        //     setShowSecondImage(true);
        //   }, timeUntilEnable);
          
        //   return () => clearTimeout(timer);
        // }
      }
    };
    
    // Check immediately when the component mounts or when the comic changes
    checkEnableTime();
    
    // Also set an interval to periodically check (every minute)
    const intervalId = setInterval(checkEnableTime, 60000);
    
    return () => clearInterval(intervalId);
  }, [currentComic]);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <>
      <div className="comicmain">
        <div className="c1">
          {currentComic && (
            <div key={currentComic.id} className="comic-card">
              <img
                src={showSecondImage ? currentComic.comic_image2 : currentComic.comic_image}
                alt={currentComic.title}
                className="comic-image"
              />
            </div>
          )}
        </div>
      </div>
      <div className="pagination">
        <button
          className="page-btn"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: 4 }, (_, index) => {
          const totalPages = Math.ceil(comicsData.length / comicsPerPage);
          const startPage = Math.max(1, Math.min(currentPage - 1, totalPages - 3));
          const pageNumber = startPage + index;
          if (pageNumber > totalPages) return null;
          return (
            <button
              key={pageNumber}
              className={`page-btn ${currentPage === pageNumber ? "active" : ""}`}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="page-btn"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage >= Math.ceil(comicsData.length / comicsPerPage)}
        >
          &gt;
        </button>
      </div>
      <div className="comicfooter">
        <Footer />
      </div>
    </>
  );
};

export default Comic;

export const comicsLoader = async () => {
  const { data: comics } = await supabase
    .from("comics")
    .select("*")
    .order("id", { ascending: true });
  
  return { comicsData: comics };
};