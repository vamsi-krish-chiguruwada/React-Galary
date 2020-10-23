import React from "react";
import "./GalleryNavigationBtn.css";

function GalleryNavigationBtn(props) {
  //   if (props.isFirstPage || props.isLastPage) {
  // var noCursor = "";
  //   }
  // props.isFirstPage? "noCursor":"";
  let customId = props.curentPage === props.value ? "activeBtn" : null;
  return (
    <div
      onClick={()=>props.handleBtn(props.value)}
      id={customId}
      className={"galleryNavigationBtn " + props.noCursor + " " + props.squreButton}
    >
      <p>{props.value}</p>
    </div>
  );
}

export default GalleryNavigationBtn;
