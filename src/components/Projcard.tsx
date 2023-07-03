"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Link from "next/link";
import Image from "next/image";
type projProps = {
  url1: string;
  url2: string;
  url3: string;
  name: string;
  description: string;
  type:string;
  event:string;
  view:string;
};

function Projcard(props: projProps) {
  
  return (
    
    <div className="flex flex-col mt-10 w-full">
      <div className="text-5xl my-8">{props.name}</div>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 2500,
          arrows: false,
          drag:true,
          
          wheel:true,
          
          
        }} 
      >
        <SplideSlide className="delay-1000 pointer-events-none">
          <Image
            src={props.url1}
            alt={props.name}
            className="w-full object-cover overflow-hidden  md:h-[95%]"
            width={1980}
            height={900}
          />
        </SplideSlide>
        <SplideSlide>
        <Image
            src={props.url2}
            alt={props.name}
            className="w-full object-cover overflow-hidden  md:h-[95%]"
            width={1980}
            height={900}
            
          />
        </SplideSlide>
        <SplideSlide>
        <Image
            src={props.url3}
            alt={props.name}
            className="w-full object-cover overflow-hidden  md:h-[95%]"
            width={1980}
            height={900}
          />
        </SplideSlide>
      </Splide>
      <div className="flex md:flex-row flex-col mt-8">
        <div className="flex flex-col w-full  md:pr-[5%] text-2xl ">
          <div><span className="text-gray-400">Type : </span>{props.type}</div>
          <div><span className="text-gray-400">Event : </span>{props.event}</div>
          <div className=" flex justify-center h-full items-center ">
          <Link
            href={props.view}
            className="md:w-36 invisible md:visible my-auto w-24 h-10 hover:cursor-pointer text-center font-light text-xl p-1 border-[1px] border-white shadow-slate-500 rounded-md  hover:shadow-none shadow-[6px_6px_0px_rgb(0,0,0)]  hover:translate-y-0 -translate-y-1 hover:translate-x-0 -translate-x-1 transition-all"
          >
            View
          </Link>
          </div>
          
        </div>
      <div className="md:text-4xl text-2xl font-thin ">{props.description}</div>
      <div className=" flex justify-center h-full items-center  ">
          <Link
            href={props.view}
            className="md:invisible mt-8 visible my-auto w-36 h-10 hover:cursor-pointer text-center font-light text-xl p-1 border-[1px] border-white shadow-slate-500 rounded-md  hover:shadow-none shadow-[6px_6px_0px_rgb(0,0,0)]  hover:translate-y-0 -translate-y-1 hover:translate-x-0 -translate-x-1 transition-all"
          >
            View
          </Link>
          </div>
      </div>
    </div>
  );
}

export default Projcard;
