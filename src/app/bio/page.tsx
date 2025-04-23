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
      {/* Navbar */}
      <div className="fixed top-0 w-full bg-[#181818] z-20 flex flex-col items-center h-8">
        <nav className="flex justify-evenly gap-[300px] items-center w-full mt-2 h-full text-sm">
          <a href="/" className="text-white opacity-70 hover:opacity-100">
            Home
          </a>
          <Link href="/bio" className="text-white opacity-70 hover:opacity-100">
            [Bio]
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
      {/* Body */}
      <div className="flex flex-row h-screen w-full pt-10">
        <div className="w-2/5 flex-row items-center justify-start flex-1 pl-5 pt-10 space-y-8">
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
        {/* Locations List */}
        <div className="w-3/5 flex flex-col justify-start pl-4">
          <h1 className="text-[130px] font-bold opacity-0 animate-slideUp">
            Jennifer Savage
          </h1>
          <Image
            src="/assets/DSC07055-2.png"
            alt="Bio Image"
            width={500}
            height={500}
            className="w-[600px] h-[600px] object-cover rounded-lg"
          />
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
