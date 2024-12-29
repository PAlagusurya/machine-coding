import React, { useState } from "react";
import PropTypes from "prop-types";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

const Carousel = ({ data }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  setTimeout(() => {
    const timerId = setActiveImageIdx((activeImageIdx + 1) % data.length);

    return () => {
      clearTimeout(timerId);
    };
  }, [5000]);

  const handlePrevious = () => {
    setActiveImageIdx(
      activeImageIdx === 0 ? data.length - 1 : activeImageIdx - 1
    );
  };

  const hanldeNext = () => {
    setActiveImageIdx((activeImageIdx + 1) % data.length);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {data?.map((img, idx) => (
        <CarouselItem
          key={img.id}
          src={img.url}
          alt={img.alt}
          isActive={activeImageIdx === idx}
        />
      ))}
      <BsArrowRightCircleFill
        onClick={hanldeNext}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data?.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImageIdx(idx)}
            className={`indicator ${
              activeImageIdx !== idx ? "indicator-inactive" : ""
            }`}
          ></button>
        ))}
      </span>
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;
