"use client";

export default function Home() {
  return (
    <main className="flex w-full h-full min-h-screen font-poppins text-xl p-5 md:p-[50px]">
      <nav className="flex  w-full md:w-[90%] h-[50px] justify-between items-center py-[50px] mx-auto">
        <div className="font-poppins text-[3rem]">Adi.</div>
        <div className="flex items-center gap-[20px] ">
          <div className="flex w-[200px] h-[50px] rounded-full bg-white text-black text-center font-logo items-center justify-center px-2">
            <div className="h-[20px] w-[20px] bg-green-400 animate-pulse text-green-400 rounded-full m-2">.</div>
            fal3n-4ngel
          </div>
          <button className=" md:flex hidden w-[130px] h-[130px] rounded-full bg-black text-white p-5 text-[1.3rem] text-center items-center justify-center hover:scale-110 transition-all duration-150">
            <div className="">Let&apos;s Connect</div>
          </button>
        </div>
      </nav>
    </main>
  );
}
