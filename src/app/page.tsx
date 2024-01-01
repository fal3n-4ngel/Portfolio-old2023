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

  type Transition$1 =
    | {
        ease: string;
        type: string; // The type can be more specific if necessary
        damping: number;
        stiffness: number;
        restDelta: number;
      }
    | undefined;

  debouncedX(x);
  debouncedY(y);

  return (
    <main className="w-full h-full bg-[#e0e0e0] dark:bg-[#121212] transition-all duration-200">
      <motion.main
        className="flex flex-col w-full h-full min-h-screen font-poppins    bg-[#e0e0e0] dark:bg-[#121212] text-black dark:text-white transition-all duration-200 z-[1]"
        ref={ref}
        animate={{ x: 0, y: 0 }}
        transition={
          {
            ease: "easein",
            type: "spring",
            damping: 10,
            stiffness: 45,
            restDelta: 0.0001,
          } as Transition$1
        }
      >
        <Navbar />

        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
          animate={{ x: xd, y: yd, top: 0, left: 0 }}
          transition={
            {
              type: "spring",
              damping: 10,
              stiffness: 50,
              restDelta: 0.001,
            } as Transition$1
          }
        >
          <div className="h-[200px] w-[200px] bg-orange-500 rounded-full opacity-80 z-[-1]"></div>
        </motion.div>

        <motion.div
          style={{
            position: "absolute",
            top: "45%",
            left: "45%",
          }}
          animate={{ x: xd, y: yd, top: 0, left: 0 }}
          transition={
            {
              type: "spring",
              damping: 10,
              stiffness: 45,
              restDelta: 0.001,
            } as Transition$1
          }
        >
          <div className="h-[190px] w-[190px] bg-orange-500 rounded-full opacity-50 z-[-1]"></div>
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            top: "40%",
            left: "40%",
          }}
          animate={{ x: xd, y: yd, top: 0, left: 0 }}
          transition={
            {
              type: "spring",
              damping: 10,
              stiffness: 40,
              restDelta: 0.001,
            } as Transition$1
          }
        >
          <div className="h-[180px] w-[180px] bg-orange-500 rounded-full opacity-20 z-[-1]"></div>
        </motion.div>

        <section className="flex w-full h-full min-h-screen items-center justify-center bg-[#e0e0e0] dark:bg-[#121212] transition-all duration-200 md:-mt-[150px] mt-[30px]">
          <div className="flex flex-col w-full font-latto  z-[10] text-center items-center justify-center ">
            <img
              src="/images/me.png"
              className="md:w-[400px] md:h-[400px] w-[200px] h-[200px]"
            />
            <div className="md:text-[7em] text-[4rem]">
              I&apos;m Adi <br className="flex md:hidden" />
            </div>
            <div className=" flex md:text-[5rem]  text-[2rem] font-latto">
              - a Versatile Developer,
            </div>

            <div className="md:text-[2rem] text-[1.5rem] font-poppins opacity-60">
              and I like to code{" "}
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-[#e0e0e0] dark:bg-[#121212] z-[1]">
          <div className="flex w-[80%] mx-auto">
            <div className="text-[5rem] font-latto">Portfolio</div>
          </div>
          <div className="relative flex w-[880px] h-[880px] mx-auto mt-10 justify-center items-center overfloe-hidden">
            <div>
              <div className="w-[400px] h-[400px] bg-green-300  hover:z-[10] m-[20px] rounded-[20px] hover:w-[850px] hover:h-[850px] absolute top-0  left-0 transition-all duration-300 "></div>
              <div className="w-[400px] h-[400px] bg-blue-300 hover:z-[10] m-[20px] rounded-[20px] order-2 hover:order-1 hover:w-[850px] hover:h-[850px] absolute top-[440px] hover:top-0 left-0 transition-all duration-300"></div>
            </div>
            <div>
              <div className="w-[400px] h-[400px] bg-red-300 hover:z-[10] m-[20px] rounded-[20px] order-4 absolute top-0 right-0 hover:w-[850px] hover:h-[850px] transition-all duration-300"></div>
              <div className="w-[400px] h-[400px] bg-orange-300 hover:z-[10] m-[20px] rounded-[20px] top-[440px] hover:top-0 order-5 absolute right-0 hover:w-[850px] hover:h-[850px] transition-all duration-300"></div>
            </div>
          </div>
        </section>
      </motion.main>
    </main>
  );
}
