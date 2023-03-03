import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../components/image.css";

type Provider = {
  slides: Array<any>;
};

const ImageSlider = ({ slides }: Provider) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="bg-slate-800">
      <h1 className="uppercase text-6xl text-white flex justify-center">
        classic multiplayer maps
      </h1>
      <p className="flex justify-center text-white text-xl mt-3">
        <span className="mr-1 capitalize font-bold">fight</span>your way through
        these different maps
      </p>
      <div className="h-screen relative flex justify-center items-center">
        <span className="flex">
          <FaArrowAltCircleLeft
            onClick={prevSlide}
            style={{
              position: "absolute",
              top: "50%",
              fontSize: "3rem",
              left: "32px",
              color: "#000",
              cursor: "pointer",
              zIndex: "10",
              userSelect: "none",
            }}
          />
          <FaArrowAltCircleRight
            onClick={nextSlide}
            style={{
              position: "absolute",
              top: "50%",
              fontSize: "3rem",
              right: "32px",
              color: "#000",
              cursor: "pointer",
              zIndex: "10",
              userSelect: "none",
            }}
          />
        </span>
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  className=""
                  src={slide.image}
                  alt="map_image"
                  style={{
                    width: "1000px",
                    height: "500px",
                    borderRadius: "10px",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ImageSlider;
