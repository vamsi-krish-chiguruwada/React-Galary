import React from "react";
import "./GalleryHeader.css";

function GalleryHeader(props) {
  return (
    <div className="galleryHeader">
      <h2>Latest Photos</h2>
      <form onSubmit={(e) => props.handleGInputSubmit(e)}>
        <p>page</p>
        <input
          onChange={(e) => props.handleGInputChange(e)}
          className="galleryHeaderInput"
          type="text"
          value={props.curentHeaderInput}
        />
        <p>of {props.noOfPages}</p>
      </form>
    </div>
  );
}
export default GalleryHeader;
