"use client";
import { useEffect, useRef, useState } from "react";

const AleatoryNumber = () => {
  const genNumber = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };

  const [randNum, setRandNum] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [btn, setBtn] = useState("◼");

  const startInterval = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setRandNum(genNumber());
      }, 100);
    }
  };

  const stopInterval = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleClick = () => {
    switch (btn) {
      case "◼":
        stopInterval();
        setBtn("▶");
        break;
      case "▶":
        startInterval();
        setBtn("◼");
        break;
    }
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  return (
    <>
      <div className="p-2 w-20 mx-auto my-2 font-bold text-lg text-mono bg-black text-green-500 rounded-lg text-center">
        {randNum}
      </div>
      <button onClick={handleClick} className="button-blue mx-auto mt-4 block">
        {btn}
      </button>
    </>
  );
};

export default AleatoryNumber;
