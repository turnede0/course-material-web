import React from "react";
import image1 from "../assets/ict/eng/1.png";
import image2 from "../assets/ict/eng/2.png";
import image3 from "../assets/ict/eng/3.png";
import image4 from "../assets/ict/eng/4.png";
import image5 from "../assets/ict/eng/5.png";
import image6 from "../assets/ict/eng/6.png";
import image7 from "../assets/ict/eng/7.png";

const images: string[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];

export default function ICTAwardDetail() {
  return (
    <div>
      {images.map((imgSrc) => {
        return (
          <img alt="gallery" className="block w-screen" src={imgSrc}></img>
        );
      })}
    </div>
  );
}
