"use client";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import HorizontalLine from "../components/HorizontalLine";
import NavLine from "../components/NavLine";
import "./globals.css";
import Link from "next/link";
import { RiFolderMusicFill } from "react-icons/ri";

const Home = () => {
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
            [Home]
          </a>
          <Link href="/bio" className="opacity-70 hover:opacity-100">
            Bio
          </Link>
          <Link href="/photos" className="opacity-70 hover:opacity-100">
            Photos
          </Link>
          <Link href="/press" className="opacity-70 hover:opacity-100">
            Press
          </Link>
        </nav>
        <NavLine />
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Text Overlay (Behind Image) */}
        <div className="inset-0 flex flex-col items-center justify-center">
          <h1
            className="2xl:text-[130px] xl:text-[130px] md:text-[130px] sm:text-[130px] text-[100px]
          font-bold leading-[1] fixed bottom-[630px] 2xl:left-[590px] xl:left-[450px] lg:left-[300px] md:left-[160px] z-0  opacity-0 animate-slideUp"
          >
            Jennifer
          </h1>
          {/* Image (Above Text) */}
          <div className="absolute bottom-0 w-full flex left-[30px] sm:left-[165px] md:left-[400px] lg:left-[600px] xl:left-[750px] 2xl:left-[900px] z-0">
            <Image
              src="/assets/JenTransparent.png"
              alt="Jennifer Savage"
              width={650}
              height={1000}
              className="object-contain w-[420px] sm:w-[450px] md:w-[500px] lg:w-[600px] xl:w[625px] 2xl:w-[650px] mr-10 md:mr-10 lg:mr-40 xl:mr-50 2xl:mr-60"
            />
          </div>

          <h1
            className="font-bold leading-[1] fixed 
          2xl:left-[900px] 2xl:bottom-[400px] xl:left-[750px] xl:bottom-[400px] lg:left-[620px] lg:bottom-[400px] sm:bottom-[300px]
          2xl:text-[130px] xl:text-[130px] md:text-[130px] sm:text-[130px] text-[100px] bottom-[300px]
           z-50 opacity-0 animate-slideUp "
          >
            Savage
          </h1>

          <div className="mt-4 absolute bottom-[590px] 2xl:left-[580px] xl:left-[450px] lg:left-[300px] md:left-[170px] sm:left-[130px] left-[40px]">
            <div className="my-5 z-10">
              <HorizontalLine />
            </div>
            <a
              href="/bio"
              className="text-white opacity-90 hover:opacity-100 inline-flex items-center gap-2"
            >
              Learn More <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-5 left-10 flex justify-between w-[calc(100%-80px)]">
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
        <span className="opacity-80">jensavagepiano@gmail.com</span>
      </div>
      <span className="absolute bottom-0 right-10 opacity-80">2025</span>
    </div>
  );
};

export default Home;
