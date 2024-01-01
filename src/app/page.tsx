"use client";

import { CursorPosition } from "@/utils/FollowCursor";
import { useFollowPointer } from "@/utils/FollowPointer";
import { animate, motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import DarkModeSwitch from "@/components/ModeSwitch";
import Navbar from "@/components/Navbar";

export default function Home() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [xd, setxd] = useState(0);
  const [yd, setyd] = useState(0);

  const debouncedX = debounce((value) => {
    setxd(x);
    console.log("Debounced x:", value);
  }, 16);

  const debouncedY = debounce((value) => {
    setyd(y);
    console.log("Debounced y:", value);
  }, 16);

  debouncedX(x);
  debouncedY(y);

  return (
    <main className="w-full h-full bg-[#e0e0e0] dark:bg-[#121212] transition-all duration-200">
      <motion.main 
      className="flex flex-col w-full h-full min-h-screen font-poppins    bg-[#e0e0e0] dark:bg-[#121212] text-black dark:text-white transition-all duration-200 z-[1]"
      ref={ref}
      animate={{ x:0,y:0}}
        transition={{
          ease:"easein",
          type: "spring",
          damping: 10,
          stiffness: 45,
          restDelta: 0.0001,
        }}
    >
      
      <Navbar/>

      <motion.div
        style={{
          position: "absolute",
          top: "45%",
    left: "45%",
          
        }}
        animate={{x: xd, y:yd ,top:0,left:0}}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 50,
          restDelta: 0.001,
        }}
      >
        <div className="h-[200px] w-[200px] bg-orange-500 rounded-full opacity-80 z-[-1]"></div>
      </motion.div>

     
      <motion.div
        style={{
          position: "absolute",
          top: "45%",
    left: "45%",
         
        }}
        animate={{ x: xd, y:yd,top:0,left:0}}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 45,
          restDelta: 0.001,
        }}
      >
        <div className="h-[190px] w-[190px] bg-orange-500 rounded-full opacity-50 z-[-1]"></div>
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: "45%",
    left: "45%",
    
          
        }}
        animate={{x: xd, y:yd ,top:0,left:0 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 40,
          restDelta: 0.001,
        }}
      >
        <div className="h-[180px] w-[180px] bg-orange-500 rounded-full opacity-20 z-[-1]"></div>
      </motion.div>


      <section className="flex w-full h-full min-h-screen items-center justify-center bg-[#e0e0e0] dark:bg-[#121212] transition-all duration-200 -mt-[100px]">
        <div className="flex flex-col w-full font-latto text-[6em] z-[10] text-center items-center justify-center">
          <img src="/images/me.png" className="w-[400px] h-[400px]"/>
          <div className="">I&apos;m Adi - a Versatile Developer,
           </div>
          
           <div className="text-[4rem] font-poppins opacity-60">and well I like to code </div>
     
        </div>
      </section>

      <section className="min-h-screen bg-[#e0e0e0] dark:bg-[#121212] z-[1]">.</section>
    </motion.main >
    </main>
  );
}
