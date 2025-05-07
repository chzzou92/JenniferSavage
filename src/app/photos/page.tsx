"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLine from "../../components/NavLine";
import "../globals.css";
import HorizontalLine2 from "@/components/HorizontalLine2";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiFolderMusicFill } from "react-icons/ri";

// Define the type for a location object
type Location = {
  name: string;
  src: string;
  date: string;
  Top: string;
  Orchestra: string;
  Conductor: string;
  Venue: string;
  ProgramRepertoire: string;
};

const locations: Location[] = [
  {
    name: "Guayaquil Philharmonic",
    src: "/assets/DSC07113.png",
    date: "12.5.2024",
    Top: " Guayaquil, Equador",
    Orchestra:
      "Guayaquil Municipal Philharmonic (Orquesta Filarmonica de Municipalidad de Guayaquil)",
    Conductor: "Manuel Campos",
    Venue: "Iglesia católica Santa Isabel, Madre del Precursor",
    ProgramRepertoire: "Rachmaninov Piano Concerto No. 2",
  },
  {
    name: "Zlin Congress Center",
    src: "/assets/5.5.2024 Bohuslav Martinu Philharmonic at Zlin Congress Center Rach 2.png",
    date: "05.5.2024",
    Top: "Zlin, Czech Republic",
    Orchestra: "Bohuslav Martinů Philharmonic Orchestra",
    Conductor: "Gevorg Sargsyan",
    Venue: "Zlin Congress Center",
    ProgramRepertoire: "Rachmaninov - Piano Concerto No. 2",
  },
  {
    name: "Lviv Philharmonic",
    src: "/assets/Lviv Great Hall Lyudkevich Hall 12.20.2024 1.JPG",
    date: "12.20.2024",
    Top: "Lviv, Ukraine",
    Orchestra: "Lviv National Philharmonic",
    Conductor: "Theodore Kuchar",
    Venue: "Lyudkevych Concert Hall",
    ProgramRepertoire: "Gershwin Piano Concerto in F",
  },
  {
    name: "Carnegie Hall",
    src: "/assets/6.20.2023 Carnegie Hall 1.jpg",
    date: "11.21.2023",
    Orchestra: "NYCPO (New York Chamber Players Orchestra)",
    Conductor: "Giacomo Franci",
    Venue: "Carnegie Hall, New York",
    ProgramRepertoire: "Saint Saens Piano Concerto No. 2",
    Top: "New York City, NY",
  },
];

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [fade, setFade] = useState(false);

  // Handle hover and update selected location
  const handleHover = (location: Location) => {
    setSelectedLocation(location);
    setFade(true);
    setTimeout(() => {
      setFade(false); // Start fade-in
    }, 150);
  };

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
            [Photos]
          </Link>
          <Link href="/press" className="opacity-70 hover:opacity-100">
            Press
          </Link>
        </nav>
        <NavLine />
      </div>

      {/* Body */}
      <div className="flex flex-col sm:flex-row h-screen w-full pt-10">
        <div
          className="
      w-full            /* full width on mobile */
      h-[70vh]          /* take up ~70% of viewport height on mobile */
      sm:w-3/5 sm:h-full  /* 60% width + full height ≥640px */
      flex flex-col items-center justify-end pl-2
    "
        >
          <div className="relative w-full h-full">
            <div className="w-full relative text-white text-sm px-4 mt-10 my-5">
              {/* Top Section: Date and More Info Link */}
              <div className="flex justify-between items-center">
                <p className="tracking-wide">{selectedLocation.date}</p>
                <a
                  href="#"
                  className="opacity-90 hover:opacity-100 inline-flex items-center"
                >
                  {selectedLocation.Top}
                </a>
              </div>
              <HorizontalLine2 fade={fade} />
            </div>

            {/* Render All Images on Top of Each Other */}
            {locations.map((location) => (
              <div
                className="absolute w-full h-full px-4"
                style={{
                  display: selectedLocation === location ? "inherit" : "none",
                }}
                key={location.name}
              >
                <Image
                  src={location.src}
                  alt="Performance Image"
                  layout="responsive"
                  width={1920}
                  height={500}
                  className={` top-0 left-0 w-full h-full object-fill rounded-lg transition-opacity duration-300 `}
                />

                <div
                  className="
    pt-2 px-2          /* mobile: tighter padding */
    sm:pt-4 sm:px-4    /* ≥640px: your original padding */
    z-10 bg-[#181818] bg-opacity-70 rounded-b-lg

    text-sm            /* mobile: smaller text */
    sm:text-base       /* ≥640px: back to normal */
  "
                >
                  <div className="flex">
                    <h1
                      className="font-bold mr-2"
                      style={{ fontFamily: "HelveticaNeueMedium" }}
                    >
                      Orchestra:
                    </h1>
                    <p>{selectedLocation.Orchestra}</p>
                  </div>
                  <div className="flex">
                    <h1
                      className="font-bold mr-2"
                      style={{ fontFamily: "HelveticaNeueMedium" }}
                    >
                      Conductor:
                    </h1>
                    <p>{selectedLocation.Conductor}</p>
                  </div>
                  <div className="flex">
                    <h1
                      className="font-bold mr-2"
                      style={{ fontFamily: "HelveticaNeueMedium" }}
                    >
                      Venue:
                    </h1>
                    <p>{selectedLocation.Venue}</p>
                  </div>
                  <div className="flex">
                    <h1
                      className="font-bold mr-2"
                      style={{ fontFamily: "HelveticaNeueMedium" }}
                    >
                      Program Repertoire:
                    </h1>
                    <p>{selectedLocation.ProgramRepertoire}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Locations List */}
        <div
          className="
          w-full              /* full width on mobile */
          h-[30vh]            /* take up ~30% of viewport height on mobile */
          sm:w-2/5 sm:h-full    /* 40% width + full height ≥640px */
          flex flex-col justify-start pl-4 overflow-auto"
        >
          {locations.map((location) => (
            <h1
              key={location.name}
              onMouseEnter={() => handleHover(location)}
              onClick={() => handleHover(location)}
              className={`
      text-[30px] sm:text-[65px] font-bold
      transition-opacity duration-300 cursor-pointer

      /* mobile: highlight permanently if selected */
      ${selectedLocation === location ? "opacity-100" : "opacity-70"}

      /* ≥640px: always baseline 70% opacity, hover to 100% */
      sm:opacity-70 hover:opacity-100
    `}
            >
              {location.name}
            </h1>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-5 left-10 flex justify-between w-[calc(100%-80px)]">
        <div className="flex gap-4"></div>
        <span className="sm:opacity-80 sm:text-[15px] text-[5px] opacity-0">
          jensavagepiano@gmail.com
        </span>
      </div>
      <span className="absolute bottom-0 right-10 sm:opacity-80 sm:text-[15px] opacity-0">
        2025
      </span>
    </div>
  );
};

export default Home;
