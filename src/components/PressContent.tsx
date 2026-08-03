// components/PressContent.tsx
"use client";

import { useState, useRef, useEffect } from "react";

export default function PressContent() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle content switching
  const handleContentSwitch = (index: number) => {
    // Stop audio if playing when switching away from audio player
    if (selectedIndex === 0 && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    setSelectedIndex(index);
  };

  // Cleanup effect when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
  }, []);

  const content = [
    // Instagram Post
    <div
      key="two"
      className="relative w-[300px] sm:w-[400px] sm:h-[600px] rounded-lg cursor-pointer overflow-hidden group"
      onClick={() => {
        window.open("https://www.instagram.com/p/DDw5Or3tAxT/", "_blank");
        setIsPlaying(!isPlaying);
      }}
    >
      {!isPlaying && (
        <img
          src="/assets/icons8-play-button-90.png"
          alt="Play Button"
          className="absolute inset-0 m-auto w-20 h-20 z-10 center cursor-pointer"
        />
      )}
      <a
        href="https://www.instagram.com/p/DDw5Or3tAxT/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 text-xl font-bold text-white z-10 hover:opacity-80"
      >
        Lviv Philharmonic Interview
      </a>
      <img
        src="/assets/470945759_918957847005711_1795247021862034674_n.jpg"
        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        alt="Lviv Philharmonic Interview"
      />
    </div>,
    // Additional content placeholders
    <div
      key="three"
      className="relative w-[300px] sm:w-[400px] sm:h-[600px] rounded-lg cursor-pointer overflow-hidden group"
      onClick={() => {
        setIsPlaying(!isPlaying);
        const video = document.getElementById("pressVideo") as HTMLVideoElement;
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }}
    >
      {!isPlaying && (
        <img
          src="/assets/icons8-play-button-90.png"
          alt="Play Button"
          className="absolute inset-0 m-auto w-20 h-20 z-10 center cursor-pointer"
        />
      )}
      <video
        id="pressVideo"
        src="https://pub-3ab869f41a944b30b62d60600e1c0b62.r2.dev/1_5131944477962798510.mp4"
        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        loop
      />
    </div>,
    <div
      key="three-b"
      className="relative w-[300px] sm:w-[400px] sm:h-[600px] rounded-lg cursor-pointer overflow-hidden group"
      onClick={() => {
        const video = document.getElementById("pressVideo") as HTMLVideoElement;
        setIsPlaying(!isPlaying);
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }}
    >
      {!isPlaying && (
        <img
          src="/assets/icons8-play-button-90.png"
          alt="Play Button"
          className="absolute inset-0 m-auto w-20 h-20 z-10 center cursor-pointer"
        />
      )}
      <video
        id="pressVideo"
        src="https://pub-3ab869f41a944b30b62d60600e1c0b62.r2.dev/1_5132245383371556574.mp4"
        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        loop
      />
    </div>,
    <div
      key="four"
      className="relative w-[300px] sm:w-[400px] sm:h-[600px] rounded-lg cursor-pointer overflow-hidden group"
      onClick={() => {
        const video = document.getElementById("pressVideo") as HTMLVideoElement;
        setIsPlaying(!isPlaying);
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }}
    >
      {!isPlaying && (
        <img
          src="/assets/icons8-play-button-90.png"
          alt="Play Button"
          className="absolute inset-0 m-auto w-20 h-20 z-10 center cursor-pointer"
        />
      )}
      <video
        id="pressVideo"
        src="https://pub-3ab869f41a944b30b62d60600e1c0b62.r2.dev/1_5132222688764363909.mp4"
        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        loop
      />
    </div>,
    <div
      key="eight"
      className="relative w-[400px] sm:w-[1000px] sm:h-[600px] rounded-lg cursor-pointer overflow-hidden group"
      onClick={() => {
        setIsPlaying(!isPlaying);
        window.open(
          "https://www.instagram.com/p/DD1qssHtDqu/?img_index=1",
          "_blank"
        );
      }}
    >
      <a
        href="https://www.instagram.com/p/DD1qssHtDqu/?img_index=1"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 text-xl font-bold text-white z-10 hover:opacity-80"
      >
        Lviv Philharmonic Photos
      </a>
      <img
        src="/assets/470934310_509931904730587_2851978313145844502_n.jpg"
        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        alt="Lviv Philharmonic Photos"
      />
    </div>,
  ];

  return (
    <div className="inset-0 flex flex-col items-center justify-center">
      <h1 className="text-white text-[100px] font-bold">Media</h1>
      <div
        className="
        bg-[#B0AFAB] rounded-lg
        w-[120vw]    h-[73vh]    /* mobile */
        sm:w-[1500px] sm:h-[700px] /* ≥640px */
        flex flex-col items-center justify-center
      "
      >
        <div
          className="
          w-[15px] h-[60vh]        /* mobile */
          sm:w-auto   sm:h-auto      /* ≥640px */
          flex items-center justify-center flex-col
        "
        >
          {content[selectedIndex]}
          <div className="flex gap-4 mt-8">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  handleContentSwitch(index);
                  setIsPlaying(false);
                }}
                className={`
        dot-button
        w-4 h-4 rounded-full cursor-pointer
        ${selectedIndex === index ? "selected bg-white" : "bg-gray-800"}
      `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
