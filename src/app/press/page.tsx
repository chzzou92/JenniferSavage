"use client";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiFolderMusicFill } from "react-icons/ri";
import HorizontalLine from "../../components/HorizontalLine";
import NavLine from "../../components/NavLine";
import "../globals.css";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Home = () => {
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

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const content = [
    // Audio Player
    // <div key="audio" className="audio-player">
    //   <audio ref={audioRef} src="/assets/CUE 4 (02.28.2025).wav" />
    //   <div className="album-cover">
    //     <Image
    //       src="/assets/DSC07113 copy.png"
    //       alt="Album Cover"
    //       width={64}
    //       height={64}
    //       className="w-full h-full object-cover rounded-full"
    //     />
    //   </div>
    //   <div className="player-controls">
    //     <div className="song-info">
    //       <div className="song-title">Rachmaninoff Piano Concerto No. 2</div>
    //       <p className="artist">Jennifer Savage</p>
    //     </div>
    //     <div className="progress-bar">
    //       <div className="progress"></div>
    //     </div>
    //     <div className="buttons">
    //       <button className="play-btn" onClick={togglePlay}>
    //         {!isPlaying ? (
    //           <svg
    //             viewBox="0 0 16 16"
    //             className="bi bi-play-fill"
    //             fill="currentColor"
    //             height="16"
    //             width="16"
    //             xmlns="http://www.w3.org/2000/svg"
    //             style={{ color: "white" }}
    //           >
    //             <path
    //               fill="white"
    //               d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
    //             ></path>
    //           </svg>
    //         ) : (
    //           <svg
    //             viewBox="0 0 16 16"
    //             className="bi bi-pause-fill"
    //             fill="currentColor"
    //             height="16"
    //             width="16"
    //             xmlns="http://www.w3.org/2000/svg"
    //             style={{ color: "white" }}
    //           >
    //             <path
    //               fill="white"
    //               d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"
    //             ></path>
    //           </svg>
    //         )}
    //       </button>
    //     </div>
    //   </div>
    // </div>,
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
        src="/assets/1_5131944477962798510.mp4"
        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        loop
      />
    </div>,
    <div
      key="three"
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
        src="/assets/1_5132245383371556574.mp4"
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
        src="/assets/1_5132222688764363909.mp4"
        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        loop
      />
    </div>,
    <div
      key="five"
      className="relative w-[400px] sm:w-[1000px] sm:h-[600px] rounded-lg overflow-hidden group cursor-pointer"
      onClick={() => {
        if (!isPlaying) {
          setIsPlaying(true);
        }
      }}
    >
      {isPlaying ? (
        // Embedded YouTube iframe when playing
        <iframe
          className="w-[400px] h-[220px] sm:w-full sm:h-full"
          src="https://www.youtube.com/embed/p4DFo1XkQwc?autoplay=1"
          title="Gershwin - Piano Concerto in F Mvt I. - Jennifer Savage"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          {/* Play Button */}
          <img
            src="/assets/icons8-play-button-90.png"
            alt="Play Button"
            className="absolute inset-0 m-auto w-20 h-20 z-10 cursor-pointer"
          />
          {/* Title */}
          <h1 className="absolute top-4 left-4 text-xl font-bold text-white z-10">
            Gershwin - Piano Concerto in F Mvt I. - Jennifer Savage
          </h1>
          {/* Thumbnail Image */}
          <img
            src="/assets/Screenshot 2025-03-27 at 12.18.24 PM.png"
            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            alt="Lviv Philharmonic Interview"
          />
        </>
      )}
    </div>,
    <div
      key="six"
      className="relative w-[400px] sm:w-[1000px] sm:h-[600px] rounded-lg overflow-hidden group cursor-pointer"
      onClick={() => {
        if (!isPlaying) {
          setIsPlaying(true);
        }
      }}
    >
      {isPlaying ? (
        // Embedded YouTube iframe when playing
        <iframe
          className="w-[400px] h-[220px] sm:w-full sm:h-full"
          src="https://www.youtube.com/embed/hfEfoaDK34A?autoplay=1"
          title="Gershwin - Piano Concerto in F Mvt II. - Jennifer Savage"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          {/* Play Button */}
          <img
            src="/assets/icons8-play-button-90.png"
            alt="Play Button"
            className="absolute inset-0 m-auto w-20 h-20 z-10 cursor-pointer"
          />
          {/* Title */}
          <h1 className="absolute top-4 left-4 text-xl font-bold text-white z-10">
            Gershwin - Piano Concerto in F Mvt II. - Jennifer Savage
          </h1>
          {/* Thumbnail Image */}
          <img
            src="/assets/Screenshot 2025-03-27 at 12.19.23 PM.png"
            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            alt="Lviv Philharmonic Interview"
          />
        </>
      )}
    </div>,
    <div
      key="seven"
      className="relative w-[400px] sm:w-[1000px] sm:h-[600px] rounded-lg overflow-hidden group cursor-pointer"
      onClick={() => {
        if (!isPlaying) {
          setIsPlaying(true);
        }
      }}
    >
      {isPlaying ? (
        // Embedded YouTube iframe when playing
        <iframe
          className="w-[400px] h-[220px] sm:w-full sm:h-full"
          src="https://www.youtube.com/embed/8pv5CmpmCpI?autoplay=1"
          title="Gershwin - Piano Concerto in F Mvt III. - Jennifer Savage"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          {/* Play Button */}
          <img
            src="/assets/icons8-play-button-90.png"
            alt="Play Button"
            className="absolute inset-0 m-auto w-20 h-20 z-10 cursor-pointer"
          />
          {/* Title */}
          <h1 className="absolute top-4 left-4 text-xl font-bold text-white z-10">
            Gershwin - Piano Concerto in F Mvt III. - Jennifer Savage
          </h1>
          {/* Thumbnail Image */}
          <img
            src="/assets/Screenshot 2025-03-27 at 12.20.19 PM.png"
            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            alt="Lviv Philharmonic Interview"
          />
        </>
      )}
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
    <div className="relative h-screen w-screen bg-[#181818] text-white overflow-hidden flex flex-col">
      {/* Navbar Container */}
      <div className="fixed top-0 w-full bg-[#181818] z-20">
        <nav
          className="
      flex items-center justify-evenly w-full h-full mt-2 text-sm
      px-4           /* default: small screens */
      sm:px-8        /* ≥640px */
      md:px-16       /* ≥768px */
      lg:px-24       /* ≥1024px */
      xl:px-32       /* ≥1280px */
      2xl:px-40      /* ≥1536px */

      gap-2          /* default gap between links */
      sm:gap-4       /* ≥640px */
      md:gap-8       /* ≥768px */
      lg:gap-12      /* ≥1024px */
      xl:gap-20      /* ≥1280px */
      2xl:gap-32     /* ≥1536px */
    "
        >
          <a href="/" className="opacity-70 hover:opacity-100">
            Home
          </a>
          <Link href="/bio" className="opacity-70 hover:opacity-100">
            Bio
          </Link>
          <Link href="/photos" className="opacity-70 hover:opacity-100">
            Photos
          </Link>
          <Link href="/press" className="opacity-70 hover:opacity-100">
            [Press]
          </Link>
        </nav>
        <NavLine />
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Text Overlay (Behind Image) */}
        <div className="inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-[100px] font-bold">Press</h1>
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
      </div>

      {/* Footer */}
      <div className="absolute bottom-3 left-10 flex justify-between w-[calc(100%-80px)]">
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/realjennifersavage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-[#E1306C]" />
          </a>
          {/* <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-[#1877F2]" />
          </a> */}
          <a
            href="https://www.youtube.com/@JenniferSavagePiano"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="hover:text-[#FF0000]" />
          </a>
          {/* <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-[#0A66C2]" />
          </a> */}
          <a
            href="https://www.priceattractions.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiFolderMusicFill className="hover:text-[#E1306C]" />
          </a>
        </div>
        <span className="sm:opacity-80 opacity-0">
          jensavagepiano@gmail.com
        </span>
      </div>
      <span className="absolute bottom-0 right-10 sm:opacity-80 opacity-0">
        2025
      </span>
    </div>
  );
};

export default Home;
