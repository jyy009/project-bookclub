import { useState } from "react";
import { Image } from "../atoms/Image";

export const Carousel = ({ children }) => {
  const [current, setCurrent] = useState(0);

  const showPrev = () => {
    setCurrent((current) =>
      current === 0 ? children.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setCurrent((current) =>
      current === children.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            {child}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          onClick={showPrev}
          className="bg-primary rounded-full p-3 shadow bg-opacity-80 hover:bg-opacity-100"
        >
          <Image link={"/icons/chevron-left.svg"} imgText={"left arrow"} />
        </button>
        <button
          onClick={showNext}
          className="bg-primary rounded-full p-3 shadow bg-opacity-80 hover:bg-opacity-100"
        >
          <Image link={"/icons/chevron-right.svg"} imgText={"left arrow"} />
        </button>
      </div>
      <div className="bottom-0 py-4 flex justify-center gap-3 w-full">
        {children.map((child, index) => {
          return (
            <div
              key={index}
              className={`rounded-full w-4 h-4 cursor-pointer  ${
                index == current ? "bg-tertiary" : "bg-primary"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
