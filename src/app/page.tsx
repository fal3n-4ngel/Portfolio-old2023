import Image from "next/image";
import RevealText from "@/components/RevealText";
import FadeText from "@/components/FadeText";
import Projcard from "@/components/Projcard";

export default function Home() {
  return (
    <main className="items-center justify-center overflow-x-hidden">
      <nav className="fixed w-full  z-10 flex justify-between py-14 px-[18%] text-xl ">
        <div className="hover:cursor-pointer">Adi</div>
        <div className="flex gap-[40%] invisible md:visible">
          <a className="hover:cursor-pointer" href="#">
            home
          </a>
          <a
            className="hover:cursor-pointer"
            href="https://github.com/fal3n-4ngel"
          >
            github
          </a>
          <a
            className="hover:cursor-pointer"
            href="https://www.linkedin.com/in/fal3n-4ngel/"
          >
            linkedin
          </a>
        </div>
        <a
          href="mailto:adiadithyakrishnan@gmail.com"
          className="invisible md:visible"
        >
          contact
        </a>
      </nav>
      <div className="h-full  hidden  md:flex font-light text-4xl md:text-7xl leading-[5rem] tracking-[0px] w-full px-[18%] py-[20%] items-center">
        <RevealText>
          <div> I&apos;m Adi - a Multidisciplinary </div>
          <div> Developer with a focus on Web, </div>
          <div> App dev and Scripting </div>
        </RevealText>
      </div>
      <div className="h-full mt-16 flex md:hidden font-light text-4xl md:text-7xl leading-[5rem] tracking-[0px] w-full px-[18%] py-[20%] items-center">
        <RevealText>
          <div>
            I&apos;m Adi - a Multidisciplinary Developer with a focus on Web,
            App dev and Scripting
          </div>
        </RevealText>
      </div>

      <div className="flex min-h-screen font-light leading-relaxed pointer-events-none">
        <>
          <div className="flex md:flex-row md:text-4xl text-3xl flex-col p-2 md:p-0 md:w-[75%] mx-auto ">
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
            <div className="flex flex-col md:w-[50%] text-lg md:pl-[20%] mx-auto">
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
          <div className="text-6xl">Projects</div>
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
            type="App (Android,Ios)"
            event="Define Hackathon 2022"
            view="https://github.com/fal3n-4ngel/Drishti-Client"
          />
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
            type="Website"
            event="Collge Project"
            view="https://github.com/fal3n-4ngel/SusGoals"
          />
        </FadeText>
      </div>
      <div className="flex justify-center text-3xl my-[100px] font-thin text-slate-300">
        
        <div className="flex flex-col">
        :&gt; Adithya Krishnan 2023 
        <a
          className="hover:cursor-pointer items-center text-center hover:scale-125 hover:text-white transition-all mt-5"
          href="https://github.com/fal3n-4ngel"
        >
          Github
        </a>
        <div className="text-slate-400 font-thin text-center text-xl mt-10"> Work on Progess!!</div>
        </div>
        
      </div>
    </main>
  );
}
