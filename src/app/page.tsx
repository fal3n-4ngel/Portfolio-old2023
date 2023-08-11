import Image from "next/image";
import RevealText from "@/components/RevealText";
import FadeText from "@/components/FadeText";
import Projcard from "@/components/Projcard";
import Github from "/Github.png";

export default function Home() {
  return (
    <main className="items-center justify-center overflow-x-hidden">
      <nav className="fixed w-full  z-10 flex justify-between pt-6 md:pt-14 pb-6  md:pb-14 px-[13%] text-xl text-gray-300 md:bg-transparent bg-black  ">
        <div className="hover:cursor-pointer text-gray-100">Adi</div>
        <div className=" gap-[40%] hidden md:flex ">
          <a
            className="hover:cursor-pointer hover:text-white transition-all"
            href="#"
          >
            home
          </a>
          <a
            className="hover:cursor-pointer hover:text-white transition-all"
            href="https://github.com/fal3n-4ngel"
          >
            github
          </a>
          <a
            className="hover:cursor-pointer hover:text-white transition-all"
            href="https://www.linkedin.com/in/fal3n-4ngel/"
          >
            linkedin
          </a>
        </div>
        <div className="md:hidden flex gap-[50%] px-10 ">
          <a
            className="hover:cursor-pointer hover:text-white transition-all"
            href="#"
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.2em"
              viewBox="0 0 496 512"
              fill="#ffffff"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a
            className="hover:cursor-pointer hover:text-white transition-all"
            href="https://github.com/fal3n-4ngel"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.2em"
              viewBox="0 0 512 512"
              fill="#ffffff"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </a>
          <a
            className="hover:cursor-pointer hover:text-white transition-all"
            href="https://www.linkedin.com/in/fal3n-4ngel/"
          >
           
            <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512" fill="#ffffff"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            
          </a>
          
        </div>
        <a
          href="mailto:adiadithyakrishnan@gmail.com"
          className="hidden md:flex hover:text-white"
        >
          contact
        </a>
      </nav>
      <div className="h-full hidden md:flex invisible md:visible   font-extralight text-6xl  leading-[4.5rem] tracking-[0px] w-full px-[15%] py-[20%] items-center">
        <RevealText>
          <div> I&apos;m Adi - a Versatile Developer </div>
          <div> adept in the realms of Web, </div>
          <div> App dev and Scripting. </div>
        </RevealText>
      </div>
      <div className="min-h-[89vh]  mt-16 flex md:hidden font-extralight text-[2.20rem] md:text-7xl leading-[3.5rem] tracking-[0px] w-full px-[20px] py-[20%] items-center">
        <RevealText>
          <div>I&apos;m Adi - a</div>
          <div> Versatile Developer </div>
          <div> adept in the </div>
          <div>realms of Web,</div>
          <div> App development </div>
          <div>and Scripting</div>
          <div> </div>
        </RevealText>
      </div>

      <div className="flex min-h-screen font-light leading-relaxed pointer-events-none">
        <>
          <div className="flex md:flex-row md:text-4xl text-2xl flex-col p-2 md:p-0 md:w-[75%] mx-auto ">
            <div className="flex flex-col md:w-[50%]">
              <FadeText>
                <div className="  m-10 ease-in ">
                  With a passion for bringing ideas to life, I thrive on solving
                  puzzles, fixing bugs, tackling mind-boggling problems.
                </div>
              </FadeText>
              <FadeText>
                <div className=" m-10 ease-in ">
                  While I enjoy exploring web and app development for fun, my
                  true expertise lies in crafting exceptional work arounds for
                  challenging problems.
                </div>
              </FadeText>
              <FadeText>
                <div className="  m-10 ease-in ">
                  I spent my free time either &lsquo;watching or reading or
                  coding&rsquo; stupid stuffs.
                </div>
              </FadeText>
            </div>
            <div className="flex flex-col md:w-[50%] w-[90%] text-base md:pl-[20%] mx-auto tracking-wider">
              <FadeText>
                <div className=" text-2xl text-zinc-700 mt-5 py-2 font-semibold ">
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
              </FadeText>
              <FadeText>
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

                <div className="py-1">
                  <div className="font-semibold">
                    Sophomore in Btech(CSE)
                    <span className="text-md text-gray-400"></span>
                  </div>
                  <div>Mar Baselios College Of Engineering</div>
                  <div className="font-sans text-gray-400">2021 - Present</div>
                </div>
              </FadeText>
              <FadeText>
                <div className=" text-2xl text-zinc-700 mt-5 py-2 font-semibold ">
                  skills
                </div>
                <div className="flex flex-col font-normal space-y-1">
                  <div>React , Angular , Flutter</div>
                  <div>C , Java , Python , C#</div>
                  <div>Firebase , MongoDB , Sql</div>
                  <div>Typescript , Nextjs, Tailwind css</div>
                  <div> .NET , Kotlin, Jetpack Compose</div>
                </div>
              </FadeText>
            </div>
          </div>
        </>
      </div>

      <div className="min-h-screen font-light text-4xl md:w-[75%] p-10 md:p-0 mx-auto">
        <FadeText>
          <div className="md:text-6xl text-5xl">Projects</div>
        </FadeText>

        <FadeText>
          <Projcard
            url1="/sus.png"
            url2="/sus1.png"
            url3="/sus2.png"
            name="Sus Goals"
            description="
            Sus Goals is simply a project for my Design and Engineering Course under BTech in CSE :<
            Anyway this site gives you a random Sustainable Goal that refreshes daily,DO IT
             and click the done button, it will increment the world wide counter for the goals reached. 
            
            "
            type="Website | React.js , Next.js, Typescript , Tailwindcss , Firebase"
            event="College Project"
            view="https://sus-goals.vercel.app/"
          />
        </FadeText>
        <FadeText>
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
        </FadeText>
        <FadeText>
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
        </FadeText>
      </div>
      <div className="flex justify-center text-3xl my-[100px] font-thin text-slate-300">
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
            Design Inspired by multiple Dribble and Behance References.
          </div>
        </div>
      </div>
    </main>
  );
}
