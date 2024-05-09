"use client"

import Collaboration from "@/components/Collaboration/Collaboration";
import { CursorContext } from "@/components/CursorContext";
import Hero from "@/components/Hero-Section/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Productivity from "@/components/Productivity/Productivity";
import { useContext } from "react";
import {motion} from "framer-motion";
import Security from "@/components/Security/Security";
import Globe from "@/components/Footer/Globe";
import Footer from "@/components/Footer/Footer";
import page  from "./page.png"

export default function Home() {
  const{ cursorVariants, cursorBG } = useContext( CursorContext );
  return (
    <div>
        {/* website prompting  */}
      <div className="relative">
      </div>

      <div>
        <div className="overflow-x-hidden">
          <div className="relative h-screen w-full text-white">
            {/* <img className="absolute md:h-[150vh] h-[100vh]  w-full object-cover md:-top-[480px] -top-0  transiton ease-in duration-200  image" width="4377" src="https://miracle.sirv.com/pleiades-assets/hero-bg.jpg" alt="sun-image"/> */}
            {/* <div className="hero-image-overlay"> </div> */}
            <Navbar/>
            <Hero/>
          
          </div>
            <div id='security' className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
            <Security/>
          </div> 
          <div id='productivity' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
            <Productivity/>
          </div>
          <div id='collaboration' className='home-campaign-productivity px-4 pt-8  overflow-hidden'>
            <Collaboration/>
          </div>
        </div>
      </div>
      {/* cursor pointer animation */}
      {/* <motion.div variants={cursorVariants}
      animate={cursorBG} className="w-[32px] h-[32px] bg-[red] fixed top-0 left-0 pointer-events-none z-50 rounded-full"></motion.div> */}

      <Footer/>
    </div>
  );
}
