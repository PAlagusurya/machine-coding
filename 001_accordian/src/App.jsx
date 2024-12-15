import { useState } from "react";
import Accordian from "./components/Accordian";
import holidayDestinations from "./data";
import "./App.css";

function App() {
  const [allowMultipleOpen, setAllowMultipleOpen] = useState(false);
  const [activeAccordians, setActiveAccordians] = useState(new Set());

  const handleCheckboxChange = () => {
    setAllowMultipleOpen((prevState) => !prevState);
  };

  const toggleAccordian = (id) => {
    setActiveAccordians((prevId) => {
      const newActiveAccordians = new Set(prevId);
      if (activeAccordians.has(id)) {
        newActiveAccordians.delete(id);
      } else {
        if (!allowMultipleOpen) {
          newActiveAccordians.clear();
        }
        newActiveAccordians.add(id);
      }
      return newActiveAccordians;
    });
  };

  return (
    <div className="app-container">
      <div className="toggle-container">
        <label htmlFor="allow-multiple-toggle">
          Allow multiple accordions to open simultaneously?
        </label>
        <input
          type="checkbox"
          id="allow-multiple-toggle"
          checked={allowMultipleOpen}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="accordian-container">
        {holidayDestinations.map((destination) => (
          <Accordian
            key={destination.id}
            {...destination}
            isOpen={activeAccordians.has(destination.id)}
            toggleAccordian={toggleAccordian}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
