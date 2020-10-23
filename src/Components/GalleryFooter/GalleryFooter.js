import React from "react";
import "./GalleryFooter.css";
import GalleryNavigationBtn from "../GalleryNavigationBtn/GalleryNavigationBtn";

function GalleryFooter(props) {
  console.log(props.noOfPages, "noOfPages");
  return (
    <div className="galleryFooter">
      <GalleryNavigationBtn
        noCursor={props.isFirstPage ? "noCursor" : ""}
        squreButton={"nextBtn"}
        value={"Previous"}
        handleBtn={props.handleBtn}
      />
      <div className="PageNumHolder">
        {[...Array(props.noOfPages).keys()].map((page) => {
          return (
            <GalleryNavigationBtn
              squreButton={"squreBtn"}
              value={page + 1}
              curentPage={props.curentPage}
              handleBtn = {props.handleBtn}
            />
          );
        })}
      </div>
      <GalleryNavigationBtn
        noCursor={props.isLastPage ? "noCursor" : ""}
        squreButton={"nextBtn"}
        value={"Next Page"}
        handleBtn = {props.handleBtn}
      />
    </div>
  );
}

export default GalleryFooter;

{
  /* <GalleryNavigationBtn squreButton={"squreBtn"} value={"1"} />
  <GalleryNavigationBtn squreButton={"squreBtn"} value={"2"} />
  <GalleryNavigationBtn squreButton={"squreBtn"} value={"3"} />
  <GalleryNavigationBtn squreButton={"squreBtn"} value={"4"} /> */
}
