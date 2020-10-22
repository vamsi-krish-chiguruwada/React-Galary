import React from "react";
import "./GalleryHeader.css";

function GalleryHeader() {
  const handleGHeaderInput = () => {};
  return (
    <div className="galleryHeader">
      <h2>Latest Photos</h2>
      <form>
        <p>page</p>
        <input onChange={handleGHeaderInput} className="galleryHeaderInput" type="text" value="1" />
        <p>of 200</p>
      </form>
    </div>
  );
}
export default GalleryHeader;
