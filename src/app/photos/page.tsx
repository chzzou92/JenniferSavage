"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLine from "../../components/NavLine";
import "../globals.css";
import HorizontalLine2 from "@/components/HorizontalLine2";

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
  const [hoveredImage, setHoveredImage] = useState(locations[0].src);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [fade, setFade] = useState(false);

  const handleHover = (location: Location) => {
    setFade(true); // Start fade-out
    setTimeout(() => {
      setHoveredImage(location.src); // Change image after fade-out
      setSelectedLocation(location);
      setFade(false); // Start fade-in
    }, 150); // Adjust delay to match transition duration
  };

  return (
    <div className="relative h-screen w-screen bg-[#181818] text-white overflow-hidden flex flex-col">
      {/* Navbar */}
      <div className="fixed top-0 w-full bg-[#181818] z-20 flex flex-col items-center h-8">
        <nav className="flex justify-evenly gap-[300px] items-center w-full h-full text-sm">
          <Link href="/" className="text-white opacity-70 hover:opacity-100">
            Home
          </Link>
          <Link href="/bio" className="text-white opacity-70 hover:opacity-100">
            Bio
          </Link>
          <Link
            href="/photos"
            className="text-white opacity-70 hover:opacity-100"
          >
            [Photos]
          </Link>
          <Link
            href="/press"
            className="text-white opacity-70 hover:opacity-100"
          >
            Press
          </Link>
        </nav>
        <NavLine />
      </div>

      {/* Body */}
      <div className="flex flex-row h-screen w-full pt-10">
        <div className="w-3/5 flex-col items-center justify-end flex-1 pl-2">
          <div className="relative w-fit">
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

            {/* Image with Fade Effect */}
            <div
              className={`relative transition-opacity duration-150 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src={hoveredImage || ""}
                alt="Performance Image"
                layout="responsive"
                width={1920} // Set the image's natural width
                height={500} // Set the image's natural height
                className="object-cover w-full transition-all duration-300 px-4 rounded-lg"
              />
              <div className="">
                <p>Orchestra: {selectedLocation.Orchestra}</p>
                <p>Conductor: {selectedLocation.Conductor}</p>
                <p>Venue: {selectedLocation.Venue}</p>
                <p>Program Repertoire: {selectedLocation.ProgramRepertoire}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Locations List */}
        <div className="w-2/5 flex flex-col justify-start pl-4">
          {locations.map((location) => (
            <h1
              key={location.name}
              className="text-[65px] font-bold transition-opacity duration-300 cursor-pointer hover:opacity-100 opacity-70"
              onMouseEnter={() => handleHover(location)}
            >
              {location.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
