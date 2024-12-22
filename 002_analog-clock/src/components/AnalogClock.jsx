import React from "react";
import useClockHandDegrees from "../customHooks/useClockHandDegrees";
import ClockHand from "./ClockHand";

const AnalogClock = () => {
  const { hourDegrees, secondDegrees, minuteDegrees } = useClockHandDegrees();

  return (
    <div className="clock">
      <div className="clock-face">
        <ClockHand type="hour-hand" degrees={hourDegrees} />
        <ClockHand type="second-hand" degrees={secondDegrees} />
        <ClockHand type="min-hand" degrees={minuteDegrees} />
      </div>
    </div>
  );
};

export default AnalogClock;
