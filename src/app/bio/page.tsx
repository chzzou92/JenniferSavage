"use client";
import Image from "next/image";
import HorizontalLine from "../../components/HorizontalLine";
import NavLine from "../../components/NavLine";
import "../globals.css";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
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
            Home
          </a>
          <Link href="/bio" className="opacity-70 hover:opacity-100">
            [Bio]
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

      {/* Body */}
      <div className="flex flex-col sm:flex-row h-screen w-full pt-10 pb-20 overflow-y-auto">
        {/* 1) Heading + Image */}
        <div className="order-1 sm:order-2 w-full sm:w-3/5 flex flex-col items-center justify-start">
          <h1
            className="
        text-white
        text-[60px] sm:text-[130px]
        font-bold leading-tight text-center
        opacity-0 animate-slideUp
      "
          >
            <span className="block sm:inline">Jennifer</span>
            <span className="block sm:inline">Savage</span>
          </h1>

          <Image
            src="/assets/DSC07055-2.png"
            alt="Bio Image"
            width={500}
            height={500}
            className="
        relative mt-4
        w-[90vw]    /* mobile: 90% of viewport */
        sm:w-[600px] /* ≥640px: fixed 600px */
        h-auto object-cover rounded-lg
      "
          />
        </div>

        {/* 2) Bio paragraphs */}
        <div
          className="
      order-2 sm:order-1
      w-full sm:w-2/5
      flex flex-col items-start justify-start
      pl-5 pt-10
      space-y-6
      text-sm     /* mobile: smaller text */
      sm:text-base /* ≥640px: normal text */
    "
        >
          <p>
            <span
              className="font-bold inline"
              style={{ fontFamily: "HelveticaNeueMedium" }}
            >
              Jennifer Savage
            </span>
            , is a pianist, professional accompanist and collaborator based in
            New York and the DC area, regularly performing at Carnegie Weill
            recital hall, collaborating with the New York Chamber Players
            orchestra, Orchestra Manhattan, as well as Program Coordinator and
            Administrator Assistant at the Summit Music Festival. She received
            her Master Manhattan School of Music, New York, studying piano
            performance with Arkady Aronov and Efrem Briskin under the Elva van
            Gelder Memorial and Constance Keene piano scholarship, previously
            studying at the MSM Precollege with Dr. Anna Ouspenskaya at the
            Levine School of Music. She is also technical director and producer,
            Broadcast Host, and Script Writer, and social media manager for
            Virtual Concert Halls (VCHs) produced live programs such as the
            Sound Espressivo International Competition.
          </p>
          <p>
            An avid performer, Jennifer has appeared as a soloist with the Lviv
            National Philharmonic of Ukraine, New York Chamber Players
            orchestra, Virtuosi Brunensis orchestra, Czech Bohuslav Martinů
            Philharmonic, and at prestigious venues such as the Kennedy Center
            in Washington, DC, regularly performing at Carnegie Hall, Merkin
            Concert Hall at the Kaufman Center in NY, Zlin Congress Center Hall
            Czech Republic, historical Palazzo dei Priori in Perugia Italy, the
            DiCapo Opera Theater in New York, and the Marian Anderson Hall of
            Kimmel Center in Philadelphia. Jennifer has won numerous
            competitions, both in solo and chamber, performing at the Kennedy
            Center in Washington, DC, Zlín Congress Center in the Czech
            Republic, DiCapo Opera Theater in New York, Embassy of Italy,
            Mexican Cultural Institute, Lyceum in Alexandria, featured on Cable
            TV: A Holiday Recital, the Grand Duchy of Luxembourg, Netherlands
            Embassy, Alden Theater, and the Palazzo dei Priori in Italy, as well
            as giving a lecture-concert in Wuhan, China.
          </p>
          <p>
            As a recording artist she has recorded on digital audio album "The
            Road to Zlin" with publisher Cicerone Music & Art releasing November
            2024, performing the Rachmaninov Piano Concerto No. 2 with the Czech
            Bohuslav Martinů Philharmonic orchestra as well as the Gershwin
            Piano Concerto in F with the Lviv National Philharmonic in Ukraine.
          </p>
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
