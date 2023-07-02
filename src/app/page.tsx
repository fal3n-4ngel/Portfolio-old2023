import Image from "next/image";
import RevealText from "@/components/RevealText";
import FadeText from "@/components/FadeText"

export default function Home() {
  return (
    <main className="items-center justify-center overflow-x-hidden">
      <nav className="fixed w-full  z-10 flex justify-between py-14 px-[18%] text-xl ">
        <div className="hover:cursor-pointer">Adi</div>
        <div className="flex gap-[40%]">
          <a className="hover:cursor-pointer" href="">home</a>
          <a className="hover:cursor-pointer" href="https://github.com/fal3n-4ngel">github</a>
          <a className="hover:cursor-pointer" href="https://www.linkedin.com/in/fal3n-4ngel/">linkedin</a>
        </div>
        <a href="mailto:adiadithyakrishnan@gmail.com">contact</a>
      </nav>
      <div className="h-full flex font-light text-7xl leading-[5rem] tracking-[0px] w-full px-[18%] py-[20%] items-center">
        <RevealText>
          <div> I&apos;m Adi - a Multidisciplinary </div>
          <div> Developer with a focus on Web, </div>
          <div> App dev and Scripting </div>
        </RevealText>
      </div>

      <div className="flex h-screen font-light leading-relaxed ">
        <FadeText>
        <div className="flex w-[75%] mx-auto ">
          <div className="flex flex-col w-[50%]">
            <div className=" text-4xl m-10 ease-in ">
              With a passion for bringing ideas to life, I thrive on solving
              puzzles, fixing bugs, tackling mind-boggling problems.
            </div>
            <div className="text-4xl m-10 ease-in ">
              While I enjoy exploring web and app development for fun, my true
              expertise lies in crafting exceptional work arounds for
              challenging problems.
            </div>
            <div className=" text-4xl m-10 ease-in ">
              I spent my free time either watching anime,movies , reading or
              coding stupid stuffs
            </div>
          </div>
          <div className="flex flex-col w-[50%] text-lg pl-[20%]">
            <div className=" text-2xl text-zinc-700 mt-5 py-2 font-semibold ">
              experience
            </div>
            <div className="py-1">
              <div className="font-semibold">Techinal Co Lead </div>
              <div>IEEE MBCET Chapter</div>
              <div className="font-sans text-gray-400">Jan 2023 - Present</div>
            </div>
            <div className="py-1">
              <div className="font-semibold">Student Intern</div>
              <div>UST Global, Thirvanathapuram</div>
              <div className="font-sans text-gray-400">
                April 2023 - May 2023
              </div>
            </div>
            <div className="py-1">
              <div className="font-semibold">
                Cloud Facilitator
                <span className="text-md text-gray-400"></span>
              </div>
              <div>GDSC MBCET</div>
              <div className="font-sans text-gray-400">nov 2022 - Present</div>
            </div>
            <div className="py-1">
              <div className="font-semibold">
                Sophomore in Btech(CSE)
                <span className="text-md text-gray-400"></span>
              </div>
              <div>Mar Baselios College Of Engineering</div>
              <div className="font-sans text-gray-400">2021 - Present</div>
            </div>

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
          </div>
        </div>

        </FadeText>
      </div>

      <div className="h-screen">1</div>
    </main>
  );
}
