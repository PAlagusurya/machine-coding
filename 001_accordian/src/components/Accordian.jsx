import React from "react";
import "./Accordian.css";

const Accordian = ({ id, info, title, isOpen, toggleAccordian }) => {
  const handleButtonClick = () => {
    toggleAccordian(id);
  };

  return (
    <div className="child-accordian-container">
      <div className="title-container">
        <h4>{title}</h4>
        <button className="toggle-button" onClick={handleButtonClick}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
      <div className={`content-container ${isOpen ? "open" : ""}`}>{info}</div>
    </div>
  );
};

export default Accordian;
