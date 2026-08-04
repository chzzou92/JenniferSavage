// components/MediaContent.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const sections = ["Photos", "Videos", "Recordings"] as const;

const R2 = "https://pub-3ab869f41a944b30b62d60600e1c0b62.r2.dev";

const photos = [
  `${R2}/_54A3622.jpg`,
  `${R2}/_54A3626.jpg`,
  `${R2}/_54A3693.jpg`,
  `${R2}/_54A3701.jpg`,
  `${R2}/_54A3859.jpg`,
  `${R2}/_54A3883.jpg`,
  `${R2}/_54A4017.jpg`,
  `${R2}/_54A4098.jpg`,
];
type Section = (typeof sections)[number];

type Item = { name: string; src: string; file?: boolean };

const videos: Item[] = [
  {
    name: "Gershwin - Piano Concerto in F Mvt I.",
    src: "https://www.youtube.com/embed/p4DFo1XkQwc",
  },
  {
    name: "Gershwin - Piano Concerto in F Mvt II.",
    src: "https://www.youtube.com/embed/hfEfoaDK34A",
  },
  {
    name: "Gershwin - Piano Concerto in F Mvt III.",
    src: "https://www.youtube.com/embed/8pv5CmpmCpI",
  },
  {
    name: "Peter Dickson Lopez - Distant Land, Series I, No. 1 (Andante) “In Memoriam”",
    src: "https://pub-3ab869f41a944b30b62d60600e1c0b62.r2.dev/17._jennifer_wang%20(720p).mp4",
    file: true,
  },
  {
    name: "Sergio Manteiga, trombone – Ropartz: Pièce in E-flat minor; Saint-Saëns: The Swan",
    src: "https://player.vimeo.com/video/1207921887?h=34c45fa215",
  },
  {
    name: "Brahms - Concerto No. 1 (III) - Collaborative Pianist",
    src: "https://pub-3ab869f41a944b30b62d60600e1c0b62.r2.dev/20260709_JSV_Brahms.mov",
    file: true,
  },
  {
    name: "Liszt - Spanish Rhapsody",
    src: "https://player.vimeo.com/video/1192571251?h=a4ac461790",
  },
];

const albums: Item[] = [
  {
    name: "Rachmaninoff: Piano Concerto No. 2 in C Minor, Op. 18",
    src: "https://open.spotify.com/embed/album/3bL9xT913ofNKv1BjLynNH?utm_source=generator&si=3c3d3bd9d534438d",
  },
  {
    name: "Gershwin: Piano Concerto in F Major (Live Recorded)",
    src: "https://open.spotify.com/embed/album/4zwqKuFfHwGQ64bnXlgi8d?utm_source=generator&si=0d9520d2b1db4ecf",
  },
  {
    name: "The Road to Zlin",
    src: "https://open.spotify.com/embed/album/6RUMXDGxpF0bhoZIfyTgUO?utm_source=generator&si=fc64e94011dd49d1",
  },
];

/* Brackets always take up space so nothing shifts when the selection moves */
const Bracketed = ({
  label,
  isSelected,
}: {
  label: string;
  isSelected: boolean;
}) => (
  <>
    <span className={isSelected ? "opacity-100" : "opacity-0"}>[</span>
    {label}
    <span className={isSelected ? "opacity-100" : "opacity-0"}>]</span>
  </>
);

/* Left-hand list of items for a section */
const ItemList = ({
  items,
  selectedIndex,
  onSelect,
}: {
  items: Item[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}) => (
  <div className="w-full sm:w-[38%] flex flex-col">
    {items.map((item, index) => (
      <button
        key={item.src}
        onClick={() => onSelect(index)}
        className={`text-left text-sm font-normal py-3 transition-opacity ${
          index === selectedIndex
            ? "opacity-100"
            : "opacity-70 hover:opacity-100"
        }`}
        style={{ fontFamily: "HelveticaNeueRegular" }}
      >
        <Bracketed label={item.name} isSelected={index === selectedIndex} />
      </button>
    ))}
  </div>
);

export default function MediaContent() {
  const [selected, setSelected] = useState<Section>("Photos");
  const [videoIndex, setVideoIndex] = useState(0);
  const [albumIndex, setAlbumIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // close the lightbox on Escape
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-white text-[60px] sm:text-[100px] font-bold leading-none mb-2">
        Media
      </h1>

      {/* Section tabs — same look as the navbar */}
      <div className="w-full max-w-[900px] px-4">
        <nav className="flex items-center justify-evenly w-full text-sm">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setSelected(section)}
              className={`font-normal transition-opacity ${
                selected === section
                  ? "opacity-100"
                  : "opacity-70 hover:opacity-100"
              }`}
              style={{ fontFamily: "HelveticaNeueRegular" }}
            >
              <Bracketed label={section} isSelected={selected === section} />
            </button>
          ))}
        </nav>
        <hr className="w-full h-[2px] bg-[#333] mt-1 border-0" />
      </div>

      {/* Content for the selected section goes here */}
      <div className="w-full max-w-[900px] min-h-[35vh] px-4 pt-8">
        {selected === "Photos" && (
          <div className="columns-2 sm:columns-3 gap-3">
            {photos.map((src, index) => (
              <button
                key={src}
                onClick={() => setLightbox(index)}
                className="block w-full mb-3 break-inside-avoid overflow-hidden rounded-lg group cursor-zoom-in"
              >
                <Image
                  src={src}
                  alt={`Jennifer Savage ${index + 1}`}
                  width={900}
                  height={1200}
                  sizes="(max-width: 640px) 50vw, 300px"
                  className="w-full h-auto transition duration-300 group-hover:brightness-110 group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        )}

        {selected === "Videos" && (
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <ItemList
              items={videos}
              selectedIndex={videoIndex}
              onSelect={setVideoIndex}
            />

            {/* Selected video */}
            <div className="w-full sm:flex-1">
              {videos[videoIndex].file ? (
                <video
                  key={videos[videoIndex].src}
                  style={{ borderRadius: "12px" }}
                  src={videos[videoIndex].src}
                  className="w-full h-[352px] bg-black"
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : (
                <iframe
                  key={videos[videoIndex].src}
                  style={{ borderRadius: "12px" }}
                  src={videos[videoIndex].src}
                  title={videos[videoIndex].name}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        )}

        {selected === "Recordings" && (
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <ItemList
              items={albums}
              selectedIndex={albumIndex}
              onSelect={setAlbumIndex}
            />

            {/* Selected album */}
            <div className="w-full sm:flex-1">
              <iframe
                key={albums[albumIndex].src}
                data-testid="embed-iframe"
                style={{ borderRadius: "12px" }}
                src={albums[albumIndex].src}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>

      {/* Full-size photo overlay */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <Image
            src={photos[lightbox]}
            alt={`Jennifer Savage ${lightbox + 1}`}
            width={1600}
            height={1600}
            sizes="100vw"
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
            priority
          />
        </div>
      )}
    </div>
  );
}
