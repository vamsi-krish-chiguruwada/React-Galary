import React, { useState } from "react";
import "./Gallery.css";
import ImageCard from "../ImageCard/ImageCard";
import GalleryHeader from "../GalleryHeader/GalleryHeader";
import GalleryFooter from "../GalleryFooter/GalleryFooter";

function Gallery() {
  const [curentPage, setCurentPage] = useState(1);
  const [totalPics, setTotalPics] = useState(32);
  const [noOfPicsPerPage, setnoOfPicsPerPage] = useState(8);
  const [curentHeaderInput, setcurentHeaderInput] = useState(curentPage);

  var noOfPages = totalPics / noOfPicsPerPage;
  let isLastPage = curentPage === noOfPages;
  let isFirstPage = curentPage === 1;

  const handleBtn = (per) => {
    if (per === "Next Page") {
      if (curentPage < noOfPages) {
        console.log("next");
        handleNextbtn();
      }
    } else if (per === "Previous") {
      if (curentPage > 1) {
        console.log("Previous");
        handlePreviousbtn();
      }
    } else handleSqurebtn(per);
  };

  const handleNextbtn = () => {
    setCurentPage(curentPage + 1);
  };

  const handlePreviousbtn = () => {
    setCurentPage(curentPage - 1);
  };

  const handleSqurebtn = (per) => {
    console.log("squre");

    setCurentPage(per);
  };
const handleGInputChange = (e)=>{
  setcurentHeaderInput( e.target.value);
}
  const handleGInputSubmit = (e) => {
    e.preventDefault();
  
    if (curentHeaderInput > 0 && curentHeaderInput <= noOfPages) {
      setCurentPage(curentHeaderInput);
    }
   
  };

  return (
    <div className="Gallery">
      <GalleryHeader
        noOfPages={noOfPages}
        handleGInputChange={handleGInputChange}
        handleGInputSubmit={handleGInputSubmit}
        curentHeaderInput={curentHeaderInput}
      />

      <div className="imageWraper">
        {[...Array(noOfPicsPerPage).keys()].map((num) => {
          return (
            <ImageCard
              key={"img-" + (num + 1 + noOfPicsPerPage * (curentPage - 1))}
              sampleImg={"img-" + (num + 1 + noOfPicsPerPage * (curentPage - 1))}
            />
          );
        })}
      </div>

      <GalleryFooter
        curentPage={curentPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        noOfPages={noOfPages}
        handleBtn={handleBtn}
      />
    </div>
  );
}

export default Gallery;
