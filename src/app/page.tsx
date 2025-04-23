"use client";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import HorizontalLine from "../components/HorizontalLine";
import NavLine from "../components/NavLine";
import "./globals.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className="relative h-screen w-screen bg-[#181818] text-white overflow-hidden flex flex-col">
      {/* Navbar */}
      <div className="fixed top-0 w-full bg-[#181818] z-20 flex flex-col items-center h-8">
        <nav className="flex justify-evenly gap-[300px] items-center w-full h-full mt-2 text-sm">
          <a href="/" className="text-white opacity-70 hover:opacity-100">
            [Home]
          </a>
          <Link href="/bio" className="text-white opacity-70 hover:opacity-100">
            Bio
          </Link>
          <Link
            href="/photos"
            className="text-white opacity-70 hover:opacity-100"
          >
            Photos
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

      {/* Main Content */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Text Overlay (Behind Image) */}
        <div className="inset-0 flex flex-col items-center justify-center">
          <div className="relative w-[505.72px] h-[130px] overflow-hidden">
            <h1 className="text-[130px] font-bold leading-[1] fixed lg:bottom-[660px] md:bottom-[890px] z-0 left-[590px] opacity-0 animate-slideUp">
              Jennifer
            </h1>
          </div>
          {/* Image (Above Text) */}
          <div className="absolute bottom-0 w-full flex left-[200px] md:left-[400px] lg:left-[600px] xl:left-[900px] z-10">
            <Image
              src="/assets/JenTransparent.png"
              alt="Jennifer Savage"
              width={650}
              height={1000}
              className="object-contain w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[650px] mr-10 md:mr-20 lg:mr-40 xl:mr-60"
            />
          </div>

          <h1 className="text-[130px] font-bold leading-[1] fixed lg:left-[900px] lg:bottom-[400px] z-50 opacity-0 animate-slideUp ">
            Savage
          </h1>

          <div className="mt-4 absolute lg:left-[580px] lg:bottom-[600px]">
            <div className="my-5 z-50">
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
      <div className="absolute bottom-10 left-10 flex justify-between w-[calc(100%-80px)]">
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/realjennifersavage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-[#E1306C]" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-[#1877F2]" />
          </a>
          <a
            href="https://www.youtube.com/@JenniferSavagePiano"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="hover:text-[#FF0000]" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-[#0A66C2]" />
          </a>
        </div>
        <span className="opacity-80">jensavagepiano@gmail.com</span>
      </div>
      <span className="absolute bottom-0 right-10 opacity-80">2025</span>
    </div>
  );
};

export default Home;
