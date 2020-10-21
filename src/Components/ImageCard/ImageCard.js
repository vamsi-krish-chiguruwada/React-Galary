import React from 'react';
import './ImageCard.css';
import sampleImg from "../../Images/img-03.jpg";
function ImageCard() {
  return (

    <div className = "imageCard">
        <figure>
           <img src = {sampleImg}></img>
        </figure>
        <div>
            <p>hello</p>
        </div>
    </div>
  );
}

export default ImageCard;
