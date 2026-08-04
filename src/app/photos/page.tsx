// app/photos/page.tsx  (or wherever your Photos page lives)
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLine from "@/components/NavLine";
import HorizontalLine2 from "@/components/HorizontalLine2";
import PressContent from "@/components/PressContent";

type Location = {
  name: string;
  photos: string[]; // now an array
  date: string;
  Top: string;
  Orchestra: string;
  Conductor: string;
  Venue: string;
  ProgramRepertoire: string;
};
const locations: Location[] = [
  {
    name: "Carnegie Hall",
    photos: [
      "/assets/carnegie/6.20.2023 Carnegie Hall 1.jpg",
      "/assets/carnegie/IMG_2244.jpg",
      "/assets/carnegie/PHOTO-2023-11-21-23-33-56 10.jpg",
      "/assets/carnegie/Teresa Laiz, Marta Vazquez & Igor Zubkovsky3.jpg",
      "/assets/carnegie/Venicia Rasmussen3.jpg",
    ],
    date: "11.21.2023",
    Orchestra: "NYCPO (New York Chamber Players Orchestra)",
    Conductor: "Giacomo Franci",
    Venue: "Carnegie Hall, New York",
    ProgramRepertoire: "Saint Saens Piano Concerto No. 2",
    Top: "New York City, NY",
  },
  {
    name: "Guayaquil Philharmonic",
    photos: ["/assets/DSC07113.png"],
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
    photos: [
      "/assets/5.5.2024 Bohuslav Martinu Philharmonic at Zlin Congress Center Rach 2.png",
    ],
    date: "05.5.2024",
    Top: "Zlin, Czech Republic",
    Orchestra: "Bohuslav Martinů Philharmonic Orchestra",
    Conductor: "Gevorg Sargsyan",
    Venue: "Zlin Congress Center",
    ProgramRepertoire: "Rachmaninov - Piano Concerto No. 2",
  },
  {
    name: "Lviv Philharmonic",
    photos: ["/assets/Lviv Great Hall Lyudkevich Hall 12.20.2024 1.JPG"],
    date: "12.20.2024",
    Top: "Lviv, Ukraine",
    Orchestra: "Lviv National Philharmonic",
    Conductor: "Theodore Kuchar",
    Venue: "Lyudkevych Concert Hall",
    ProgramRepertoire: "Gershwin Piano Concerto in F",
  },
];

export default function PhotosPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(
    locations[0]
  );
  const [photoIndex, setPhotoIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleHover = (location: Location) => {
    setSelectedLocation(location);
    setPhotoIndex(0); // reset to first photo
    setFade(true); // trigger fade‐out
    setTimeout(() => setFade(false), 150);
  };

  // hide the page scrollbars / block horizontal scroll while on this page
  useEffect(() => {
    document.documentElement.classList.add("no-page-scrollbar");
    return () =>
      document.documentElement.classList.remove("no-page-scrollbar");
  }, []);

  // every time selectedLocation changes, start a 2.5s cycle
  useEffect(() => {
    if (selectedLocation.photos.length < 2) return;
    const iv = setInterval(() => {
      setPhotoIndex((i) => (i + 1) % selectedLocation.photos.length);
    }, 2000);
    return () => clearInterval(iv);
  }, [selectedLocation]);

  return (
    <div className="relative min-h-screen w-full max-w-full bg-[#181818] text-white flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <div className="fixed top-0 w-full bg-[#181818] z-20">
        <nav className="flex items-center justify-evenly w-full h-full mt-2 text-sm px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-20 2xl:gap-32">
          <a href="/" className="opacity-70 hover:opacity-100">
            Home
          </a>
          <Link href="/bio" className="opacity-70 hover:opacity-100">
            Bio
          </Link>
          <Link href="/photos" className="opacity-70 hover:opacity-100">
            [Highlights]
          </Link>
          <Link href="/press" className="opacity-70 hover:opacity-100">
            Media
          </Link>
        </nav>
        <NavLine />
      </div>

      {/* Main content */}
      <div className="flex flex-col sm:flex-row min-h-[78vh] w-full pt-14">
        {/* Image & details */}
        <div className="w-full sm:w-3/5 flex flex-col items-center justify-start pl-2">
          <div className="w-full">
            {/* Date + Top link + underline */}
            <div className="w-full relative text-white text-sm px-4 mt-10 my-5">
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

            {/* Only the selected location’s container is visible */}
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="w-full px-4"
                style={{ display: loc === selectedLocation ? "block" : "none" }}
              >
                {/* Fixed-height frame so every photo occupies the same space */}
                <div className="relative w-full h-[30vh] sm:h-[55vh] overflow-hidden rounded-lg bg-[#181818]">
                  <Image
                    src={selectedLocation.photos[photoIndex]}
                    alt={`${loc.name} slide ${photoIndex + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 60vw"
                    className={
                      `object-cover object-center transition-opacity duration-300 ` +
                      (fade ? "opacity-0" : "opacity-100")
                    }
                  />
                </div>

                {/* Bottom info box */}
                <div className="pt-2 px-2 sm:pt-4 sm:px-4 z-10 bg-[#181818] bg-opacity-70 rounded-b-lg text-sm sm:text-base">
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

        {/* Location list */}
        <div className="w-full sm:w-2/5 sm:h-full flex flex-col justify-start pl-4">
          {locations.map((loc) => (
            <h1
              key={loc.name}
              onMouseEnter={() => handleHover(loc)}
              onClick={() => handleHover(loc)}
              className={
                `text-[30px] sm:text-[65px] font-bold transition-opacity duration-300 cursor-pointer ` +
                (selectedLocation === loc
                  ? "opacity-100"
                  : "opacity-70 sm:opacity-70 hover:opacity-100")
              }
            >
              {loc.name}
            </h1>
          ))}
        </div>
      </div>

      {/* Press section */}
      <div className="w-full flex items-center justify-center pt-0 pb-16">
        <PressContent />
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-10 flex justify-between w-[calc(100%-80px)]">
        <div className="flex gap-4" />
        <span className="sm:opacity-80 sm:text-[15px] text-[5px] opacity-0">
          jensavagepiano@gmail.com
        </span>
      </div>
      <span className="absolute bottom-0 right-10 sm:opacity-80 sm:text-[15px] opacity-0">
        2026
      </span>
    </div>
  );
}
