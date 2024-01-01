import React from 'react'
import DarkModeSwitch from './ModeSwitch'
import { RiGithubFill } from 'react-icons/ri'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="flex  w-full md:w-[90%] h-[50px] items-center md:justify-between py-5 md:py-[100px] md:px-[50px] px-[5px] mx-auto z-[1]">
        <div className="font-poppins md:text-[3rem] text-[1.5]">Adi.</div>
        <div className="flex items-center md:justify-normal  md:gap-[20px] ml-20 md:ml-0">
          <Link href="https://github.com/fal3n-4ngel" className="flex md:w-[200px] md:h-[50px] rounded-full bg-white text-black text-center font-logo items-center justify-center  px-2 gap-4">
           <RiGithubFill className='h-6 w-6 '/>
            fal3n-4ngel
          </Link>
          <DarkModeSwitch/>
        </div>
      
      </nav>
  )
}

export default Navbar