"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("February 10, 2025 18:00:00 GMT+0530").getTime();
  const [timeRemaining, setTimeRemaining] = useState(
    targetDate - new Date().getTime()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      setTimeRemaining(targetDate - currentTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const calculateTimeLeft = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = calculateTimeLeft(timeRemaining);

  return (
    <div className="flex flex-col items-center justify-center bg-black/40 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/10 w-full max-w-md lg:max-w-2xl xl:max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Registration <span className="text-red-700">Closes </span>in !!
      </h2>
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-white text-4xl sm:text-6xl font-bold">
        <div className="flex flex-col items-center mb-2 sm:mb-0">
          <span className="text-red-700">{days}</span>
          <span className="text-sm mt-1">Days</span>
        </div>
        <div className="flex flex-col items-center mb-2 sm:mb-0">
          <span>: {hours} :</span>
          <span className="text-sm mt-1">Hours</span>
        </div>
        <div className="flex flex-col items-center mb-2 sm:mb-0">
          <span>{minutes} :</span>
          <span className="text-sm mt-1">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-red-700">{seconds}</span>
          <span className="text-sm mt-1">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
