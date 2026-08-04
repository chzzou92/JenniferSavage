"use client";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiFolderMusicFill } from "react-icons/ri";
import NavLine from "../../components/NavLine";
import MediaContent from "../../components/MediaContent";
import "../globals.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full max-w-full bg-[#181818] text-white overflow-x-hidden flex flex-col">
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
            Highlights
          </Link>
          <Link href="/press" className="opacity-70 hover:opacity-100">
            [Media]
          </Link>
        </nav>
        <NavLine />
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex items-start justify-center pt-16 pb-24">
        <MediaContent />
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-10 flex justify-between w-[calc(100%-80px)]">
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
        2026
      </span>
    </div>
  );
};

export default Home;
