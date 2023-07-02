import Image from "next/image";
import RevealText from "@/components/RevealText";

export default function Home() {
  return (
    <main className="items-center justify-center overflow-x-hidden">
      <nav className="fixed w-full  z-10 flex justify-between py-14 px-[18%] text-xl ">
        <div>Adi</div>
        <div className="flex gap-[40%]">
          <div>home</div>
          <div>home</div>
          <div>home</div>
        </div>
        <div>smthn</div>
      </nav>
      <div className="h-full flex font-light text-7xl leading-[5rem] tracking-[0px] w-full px-[18%] py-[20%] items-center">
        <RevealText>
          <div> I&apos;m Adi - a Multidisciplinary </div>
          <div> Developer with a focus on Web, </div>
          <div> App dev and Scripting </div>
        </RevealText>
      </div>

      <div className="h-screen font-light leading-relaxed">
        <div className="flex w-[70%] mx-auto ">
          <div className="w-[50%] text-4xl m-10 ease-in ">
            With a passion for bringing ideas to life, I thrive on solving
            puzzles, fixing bugs, tackling mind-boggling problems.
          </div>
          <div className="flex flex-col w-[50%] px-[100px] text-lg">
            <div className=" text-2xl text-zinc-700 py-4 ">experience</div>
            <div className="py-1">
              <div>Techinal Co Lead </div>
              <div>IEEE MBCET Chapter</div>
            </div>
            <div className="py-1">
              <div>Student Intern</div>
              <div>UST Global, Thirvanathapuram</div>
            </div>
            <div className="py-1">
              <div>
                Cloud Digital Leader{" "}
                <span className="text-md text-gray-400">(certified)</span>{" "}
              </div>
              <div>GDSC MBCET</div>
            </div>
          </div>
        </div>
        <div className="flex w-[70%] mx-auto ">
          <div className="w-[50%] text-4xl m-10 ease-in ">
            While I enjoy exploring web and app development for fun, my true
            expertise lies in crafting exceptional work arounds for challenging
            problems.
          </div>
          <div className="flex flex-col w-[50%] px-[100px] text-lg">
            <div className=" text-2xl text-zinc-700 py-4 ">skills</div>
            <div className="py-1">
              <div>Web Development</div>
              <div>Angular, React, Next , TypeScript</div>
              <div>Tailwind, Gsap</div>
            </div>
            <div className="py-1">
              <div>App Developement</div>
              <div>Flutter , Kotlin ,Jetpack Compose</div>
            </div>
          </div>
        </div>
        <div className="flex w-[70%] mx-auto ">
          <div className="w-[50%] text-4xl m-10 ease-in ">
            I spent my free time either watching anime,movies , reading or
            coding stupid stuffs
          </div>
          <div className="flex flex-col w-[50%] px-[100px] text-lg">
            <div className="py-1">
              <div>Others</div>
              <div>C , Java , Python ,Js</div>
              <div>Firebase, Sql , MongoDb</div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen">1</div>
    </main>
  );
}
