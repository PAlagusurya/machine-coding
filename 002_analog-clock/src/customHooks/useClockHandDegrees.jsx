import { useEffect, useState } from "react";

const useClockHandDegrees = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const getDegree = (unit, maxUnit) => {
    return (unit / maxUnit) * 360 + 90;
  };

  const hourDegrees = getDegree(hours, 12);
  const minuteDegrees = getDegree(minutes, 60);
  const secondDegrees = getDegree(seconds, 60);

  return { hourDegrees, secondDegrees, minuteDegrees };
};

export default useClockHandDegrees;
