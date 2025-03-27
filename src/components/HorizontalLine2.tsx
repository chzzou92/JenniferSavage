import { useState, useEffect } from "react";

interface Props {
  fade: boolean; // This prop controls the animation
}

const HorizontalLine2: React.FC<Props> = ({ fade }) => {
  const [split, setSplit] = useState(false);

  useEffect(() => {
    if (fade) {
      setSplit(true);
      setTimeout(() => setSplit(false), 300); // Match with image transition
    }
  }, [fade]);

  return (
    <div className="relative w-full h-[2px] mt-1 overflow-hidden">
      {/* Left Half */}
      <div
        className={`absolute h-full bg-white transition-all duration-300 ${
          split ? "w-1/2 left-0 scale-x-0" : "w-full left-0 scale-x-100"
        }`}
      ></div>

      {/* Right Half */}
      <div
        className={`absolute h-full bg-white transition-all duration-300 ${
          split ? "w-1/2 right-0 scale-x-0" : "w-full right-0 scale-x-100"
        }`}
      ></div>
    </div>
  );
};

export default HorizontalLine2;
