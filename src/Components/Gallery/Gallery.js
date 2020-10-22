import React from "react";
import "./Gallery.css";
import ImageCard from "../ImageCard/ImageCard";
import GalleryHeader from "../GalleryHeader/GalleryHeader";

function Gallery() {

  return (
    <div className="Gallery">
      <GalleryHeader />
      <div className="imageWraper">
        {[...Array(16).keys()].map((num) => {
          return <ImageCard key={"img-" + (num + 1)} sampleImg={"img-" + (num + 1)} />;
        })}
      </div>
    </div>
  );
}

export default Gallery;
