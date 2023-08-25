import React from "react";
const Img: any[] = [];

for (let entry = 1; entry < 8; entry++) {
  Img[entry] = require(`../assets/ict/eng/${entry.toString()}.png`);
}

export default function ICTAwardDetail() {
  return (
    <div>
      {Img.map((imgSrc) => {
        return (
          <img alt="gallery" className="block w-screen" src={imgSrc}></img>
        );
      })}
    </div>
  );
}
