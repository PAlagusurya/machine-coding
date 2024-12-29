import PropTypes from "prop-types";
import "./Carousel.css";

const CarouselItem = ({ alt, src, isActive }) => (
  <img
    src={src}
    alt={alt}
    className={`slide ${isActive ? "slide-active" : ""}`}
  />
);

CarouselItem.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default CarouselItem;
