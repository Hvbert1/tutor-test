import React from "react";

export const CarouselItem = ({ item }) => {
  return (
    <div className="carouselItem">
      <div>
        <div className="carouselDesc">{item.description}</div>
        <div className="carouselName">{item.person}</div>
      </div>
    </div>
  );
};
