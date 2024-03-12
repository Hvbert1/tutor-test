import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "./Carousel.css";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      key: 1,
      description:
        '"My tutor, Sanchea, seemed to have a lesson for any obscure concept that I needed help with, from the big picture to the smallest detail. She also gave me a number of test-taking strategies, including the exact timing I needed to achieve on a test given my previous history.."',
      person: "-Chidli",
    },
    {
      key: 2,
      description:
        '"Sanchea is amazing. She is not only a great teacher she is patient and kind and able to relate to my daughter. I have seen my daughter’s confidence grow since she started with Sanchea – thank you Sanchea you are brilliant!"',
      person: "-Gabrielle, Seaforth",
    },
    {
      key: 3,
      description:
        '"Sanchea has been an amazing and diligent tutor for me within english and maths. She has helped me  developed my analytical writing skills that I ended up transforming my grades from C to an A. Furthermore, she has also helped me in maths by breaking down a problem and make it simpler to solve. Overall, Sanchea is a hardworking and diligent tutor that will help your child achieve their desire results."',
      person: "-Aloha",
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <h1> From our families...</h1>
      <span className="material-symbols-outlined star-symbol">family_star</span>
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem key={item.key} item={item} />;
        })}
      </div>
      <div className="carouselButtons">
        <button
          className="buttonArrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicatorButtons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicatorSynmbolActive"
                      : "indicatorSymbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="buttonArrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};