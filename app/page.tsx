"use client";
import Navbar from "./components/Navbar";
import { useFollowPointer } from "./utils/FollowPointer";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useAnimation } from "framer-motion";
import { debounce } from "lodash";
import FadeUp from "./components/FadeUp";
import AnimatedTextCharacter from "./components/FadeText";
import Projcard from "./components/Projcard";
import FadeSide from "./components/FadeSide";

type Transition$1 =
  | {
      ease: string;
      type: string; // The type can be more specific if necessary
      damping: number;
      stiffness: number;
    }
  | undefined;

export default function Home() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [xd, setxd] = useState(0);
  const [yd, setyd] = useState(0);

  const debouncedX = debounce((value) => {
    setxd(x);
  }, 12);

  const debouncedY = debounce((value) => {
    setyd(y);
  }, 12);

  useEffect(() => {
    debouncedX(x);
    debouncedY(y);
  }, [debouncedX, debouncedY, x, y]);

  return (
    <>
      <div className="relative ">
        <motion.div
          className="hidden md:flex"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
          animate={{ x: xd, y: yd, top: 0, left: 0 }}
          transition={
            {
              type: "spring",
              damping: 20,
              stiffness: 65,
            } as Transition$1
          }
        >
          <div className="h-[50px] w-[50px] bg-black dark:bg-orange-100 rounded-full  z-[-1] opacity-50 "></div>
        </motion.div>
        <motion.div
          className="hidden md:flex"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
          animate={{ x: xd, y: yd, top: 0, left: 0 }}
          transition={
            {
              type: "spring",
              damping: 20,
              stiffness: 70,
            } as Transition$1
          }
        >
          <div className="h-[50px] w-[50px] bg-black dark:bg-orange-100 rounded-full  z-[-1] opacity-[80%]"></div>
        </motion.div>
        <motion.div
          className="hidden md:flex"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
          animate={{ x: xd, y: yd, top: 0, left: 0 }}
          transition={
            {
              type: "spring",
              damping: 20,
              stiffness: 80,
            } as Transition$1
          }
        >
          <div className="h-[50px] w-[50px] bg-black dark:bg-orange-100 rounded-full  z-[-1] "></div>
        </motion.div>
      </div>
      <main
        className="flex flex-col justify-between items-center w-full h-full min-h-screen bg-[#e0e0e0] dark:bg-[#121212] text-black dark:text-white font-poppins transition-all duration-200 z-[1]"
        ref={ref}
      >
        <div className="w-full fixed z-[10]">
          <Navbar />
        </div>
        <section className="flex flex-col md:w-[70%] w-full h-full min-h-screen justify-center text-black dark:text-white p-3">
          <div className="flex flex-col md:text-8xl text-4xl font-poppins-regular p-2 ">
            <FadeUp className=" flex text-black  font-poppins ">
              <h1 className="md:text-3xl text-xl">Hello</h1>
            </FadeUp>

            <div className="md:flex flex-col hidden">
              <AnimatedTextCharacter text="I'm Adithya Krishnan,"></AnimatedTextCharacter>
              <AnimatedTextCharacter text="a Versatile developer who"></AnimatedTextCharacter>
              <AnimatedTextCharacter text="likes to code fun stuff"></AnimatedTextCharacter>
            </div>
            <div className="flex flex-col md:hidden">
              <AnimatedTextCharacter text="I'm Adithya Krishnan,"></AnimatedTextCharacter>
              <AnimatedTextCharacter text="a Versatile developer"></AnimatedTextCharacter>
              <AnimatedTextCharacter text="who likes to "></AnimatedTextCharacter>
              <AnimatedTextCharacter text="code fun stuff"></AnimatedTextCharacter>
            </div>
            {/* <FadeSide>
          I'm Adithya Krishnan,
          </FadeSide >
          <FadeSide className="delay-200">
          a Versatile developer who
          </FadeSide>
          <FadeSide>
          likes to code fun stuff
          </FadeSide> */}
          </div>
        </section>

        <section className=" w-full h-full z-[5]">
          <div className="flex md:flex-row flex-col w-[80%] mx-auto justify-center items-center  min-h-screen">
            <div className="flex flex-col md:w-[60%] md:text-4xl text-2xl">
              <div className="  overflow-hidden ">
                <FadeUp>
                  <div className="  md:m-10 m-5 ease-in ">
                    As a third-year undergraduate pursuing a Btech degree in
                    CSE, I am actively seeking internships and freelancing
                    projects. ( I&apos;m currently jobless 🚶)
                  </div>
                </FadeUp>
              </div>
              <div className="  overflow-hidden">
                <FadeUp>
                  <div className="  md:m-10 m-5 ease-in ">
                    With a passion for bringing ideas to life, I thrive on
                    solving puzzles, fixing bugs, tackling mind-boggling
                    problems.
                  </div>
                </FadeUp>
              </div>
              <div className="  overflow-hidden">
                <FadeUp>
                  <div className="   md:m-10 m-5 ease-in ">
                    I spent my free time either &lsquo;watching or reading or
                    coding&rsquo; stupid stuff
                  </div>
                </FadeUp>
              </div>
            </div>
            <div className="flex flex-col md:w-[50%] w-[90%] text-base md:pl-[20%] mx-auto tracking-wider z-[-1]">
              <FadeUp>
                <div className=" text-2xl text-zinc-700 mt-5 py-2 font-semibold z-[-1] ">
                  experience
                </div>

                <div className="py-1">
                  <div className="font-semibold">Techinal Co Lead </div>
                  <div>IEEE MBCET Chapter</div>
                  <div className="font-sans text-gray-400">
                    Jan 2023 - Present
                  </div>
                </div>
                <div className="py-1">
                  <div className="font-semibold">Student Intern</div>
                  <div>UST Global, Thirvanathapuram</div>
                  <div className="font-sans text-gray-400">
                    April 2023 - May 2023
                  </div>
                </div>
              </FadeUp>
              <FadeUp>
                <div className="py-1">
                  <div className="font-semibold">
                    Cloud Facilitator
                    <span className="text-md text-gray-400"></span>
                  </div>
                  <div>GDSC MBCET</div>
                  <div className="font-sans text-gray-400">
                    nov 2022 - Present
                  </div>
                </div>
              </FadeUp>
              <FadeUp>
                <div className=" text-2xl text-zinc-700 mt-5 py-2 font-semibold ">
                  skills
                </div>
                <div className="flex flex-col font-normal space-y-1">
                  <div>Nextjs ,Reactjs ,Angular ,Flutter </div>
                  <div>C , Java , Python , C#</div>
                  <div>Firebase , MongoDB , Sql</div>
                  <div>Typescript, Tailwind, Framer Motion , Gsap</div>
                  <div> .NET , Kotlin, Jetpack Compose</div>
                </div>
              </FadeUp>
              <FadeUp>
                <div className=" text-2xl text-zinc-700 mt-5 py-2 font-semibold ">
                  awards
                </div>
                <div className="flex flex-col font-normal space-y-1">
                  <div className="py-1">
                    <div className="font-semibold">
                      Web3 for India 2030 Winner
                      <span className="text-md text-gray-400"></span>
                    </div>
                    <div>BlockHash | kerala Block Chain Academy</div>
                    <a
                      href="https://github.com/Deflated-Pappadam"
                      className="font-sans text-gray-400 hover:text-white"
                    >
                      2023 (Team deflated pappadam)
                    </a>
                  </div>
                  <div className="py-1">
                    <div className="font-semibold">
                      Best Design , First Runner Up
                      <span className="text-md text-gray-400"></span>
                    </div>
                    <div>CodeCrypt Hackathon | Cusat</div>
                    <a
                      href="https://github.com/Deflated-Pappadam"
                      className="font-sans text-gray-400 hover:text-white "
                    >
                      2023 (Team deflated pappadam)
                    </a>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
        <div className="min-h-screen font-light text-4xl md:w-[75%] p-5 md:p-0 mx-auto">
          <FadeUp>
            <div className="md:text-6xl text-5xl">Projects</div>
          </FadeUp>
          <FadeUp>
            <Projcard
              url1="/3.png"
              url2="/4.png"
              url3="/5.png"
              name="Flash drive"
              description="
            This is a mini-project for our DBMS (Database Management Systems) course in Semester 5 of B.Tech in CSE 🚶‍♀️. 
            Flash Drive is a website that highlights several projects we developed, drawing from our learnings throughout the year. 
            Instead of centering on a socially relevant theme, we opted to have fun and emphasize the development aspect.       
            "
              type="Website | Next.js, Typescript , Tailwindcss , Firebase"
              event="College Project"
              view="https://flashdrive-f2an.vercel.app/"
            />
          </FadeUp>
          <FadeUp>
            <Projcard
              url1="/sus.png"
              url2="/sus1.png"
              url3="/sus2.png"
              name="Sus Goals"
              description="
            Sus Goals serves a noble purpose. Each day, you're presented with a random Sustainable Goal. 
            Take actionable steps towards these goals and click the 'Done' button.
            Every completed goal increments the global counter, symbolizing the 
            collaborative impact of individuals striving for a more sustainable world 
            
            "
              type="Website | React.js , Next.js, Typescript , Tailwindcss , Firebase"
              event="College Project"
              view="https://sus-goals.vercel.app/"
            />
          </FadeUp>
          <FadeUp>
            <Projcard
              url1="/drishti.png"
              url2="/drishti1.png"
              url3="/drishti2.png"
              name="Drishti Client"
              description="
            Drishti client is a client side flutter application
            for Drishti that will be available to public through 
            which they can report and get updates about accidents 
            and other notable incidents in the locailty
            "
              type="App | Flutter , Firebase , MongoDB "
              event="Define Hackathon 2022"
              view="https://github.com/fal3n-4ngel/Drishti-Client"
            />
          </FadeUp>
          <FadeUp>
            <Projcard
              url1="/c.png"
              url2="/c1.png"
              url3="/c2.png"
              name="C Tracker"
              description="
            C-Tracker or Curriculum-Tracker is a todo App themed for academic purposes , 
            developed as a micro project for Semester 3 Object Oriented Java. Simply a 
            fancy todo app that we coded in a single sleepless night.
            "
              type="Desktop | Java Swing , SqlLite"
              event="College Micro Project"
              view="https://github.com/fal3n-4ngel/CTracker"
            />
          </FadeUp>
        </div>
        <div className="flex justify-center text-3xl my-[100px] font-thin text-black dark:text-white">
          <div className="flex flex-col text-center">
            :&gt; Adithya Krishnan 2023
            <a
              className="hover:cursor-pointer items-center text-center hover:scale-125 hover:text-white transition-all mt-5"
              href="https://github.com/fal3n-4ngel"
            >
              Github
            </a>
            <div className="text-slate-600 font-light text-center text-xl md:text-2xl mt-10">
              {" "}
              ik kinda looks plain now, so working on a new one rn
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
