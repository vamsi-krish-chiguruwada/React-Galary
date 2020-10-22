import React from "react";
import "./ImageCard.css";

function ImageCard(props) {
  console.log(props.sampleImg);
  return (
    <div className="imageCard">
      <figure>
        <img src={require("../../Images/"+props.sampleImg+".jpg")}></img>
      </figure>
      <div className="dateLikeHolder">
        <p className="date">{Math.round(Math.random() * 30)} Feb 2020 </p>
        <p className="views">views: {Math.round(Math.random() * 1000)}</p>
      </div>
    </div>
  );
}

export default ImageCard;
