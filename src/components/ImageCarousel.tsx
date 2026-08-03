// components/ImageCarousel.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  intervalMs?: number; // cycle interval in milliseconds
}

export default function ImageCarousel({
  images,
  intervalMs = 2500,
}: ImageCarouselProps) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (images.length < 2) return; // no need to rotate
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    // Fixed aspect ratio so cycling images never change the layout height
    <div className="relative mt-4 w-[90vw] sm:w-[600px] aspect-[2/3] overflow-hidden rounded-lg">
      <Image
        key={images[idx]}
        src={images[idx]}
        alt={`Slide ${idx + 1}`}
        fill
        sizes="(max-width: 640px) 90vw, 600px"
        className="object-contain transition-opacity duration-500"
      />
    </div>
  );
}
