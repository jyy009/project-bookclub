import Lottie from "lottie-react";
import animationData from "../Animation.json";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-40 max-h-32">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};
