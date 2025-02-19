import React, { useState } from "react";
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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="comicmain">
        {/* <div className="c0">
          <h2 className="comicbigtopic">Comic</h2>
        </div> */}
        <div className="c1">
          {currentComic && (
            <div key={currentComic.id} className="comic-card">
              <img
                src={currentComic.comic_image}
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
        {Array.from(
          { length: Math.ceil(comicsData.length / comicsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              className={`page-btn ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
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
