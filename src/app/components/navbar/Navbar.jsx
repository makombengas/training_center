"use client"
import "/node_modules/flag-icons/css/flag-icons.min.css";
import React, { useEffect, useState } from 'react'
import LocaleSwitcher from './../localSwither/LocalSwither';
import Image from 'next/image';
import { Link } from '../../../navigation';
import { useTranslations } from 'next-intl';

import { usePathname } from "next/navigation";
import { pathnames } from '../../../../config';





const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive =  pathnames  ? "active" : "not-active"; 
  const menuInfos = useTranslations('Navigation')

 const handleMenu = () => {
    setOpenMenu(false);
  }
const handleScroll = () => {
  if (window.scrollY > 80) {
    setScrolled(true);
  }else {
    setScrolled(false);
  }
};
  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
   <div className={`w-full fixed z-50 ${scrolled ? "bg-[#fff] transition-all ease-linear duration-150" : ""}`} >
        {/*Top navbar */}
        <div className="bg-[#143159] flex items-center justify-between w-full z-50 absolute sm:static  text-gray-200">
                <div className="px-4 text-[.7rem] flex-1">
                    <p>Douala Deido Grand-moulin</p>
                </div>
                <div className="flex justify-center items-center ">
                    <LocaleSwitcher />
                </div>
        </div>

         {/*Bottom navbar */}
        <div className="flex items-center justify-between px-4 py-2 w-full relative flex-1 sm:flex-0 mt-12 sm:mt-0 ">
        <Link href="/" className="cursor-pointer flex gap-2 items-center z-10" onClick={handleMenu}>
            <Image priority className=' w-[2.5rem] ms:w-[4rem]' src="/images/school_Logo.png" alt="logo" width={100} height={100} />

       <div className="z-10">
            <h1 className=" sm:text-lg text-[.7rem]  lg:text-2xl text-[#143159] "> <b className='text-[#90764A]'>GLOBAL</b> SCHOOL</h1>
            <p className=' text-[.23rem] sm:text-[.33rem] lg:text-[.5rem] text-center'>WE FIGHT FOR THE EDUCATION OF YOUNG PEOPLE</p>
       </div>
        </Link>

        <div className=" z-50 w-[1.5rem]  sm:hidden flex flex-col gap-1 cursor-pointer transition ease-linear duration-300 " onClick={() => setOpenMenu(!openMenu)}>
            <hr className={`${openMenu ? 'bg-[#143159] h-[.12rem] rotate-[45deg] transition-rotate duration-300 ease-linear ' : 'bg-[#143159] h-[.12rem] border-none'}`} />
            <hr className={`${openMenu ? 'bg-[#143159] h-[.12rem] opacity-0  transition-opacity duration-150 ease-linear	  z-100' : 'bg-[#143159] h-[.12rem] border-none'}`} />
            <hr  className={`${openMenu ? 'bg-[#143159] h-[.12rem] rotate-[-45deg] relative bottom-[.75rem] z-50 transition-rotate duration-300 ease-linear' : 'bg-[#143159] h-[.12rem] border-none'}`} />
        </div>

        <div className={`absolute flex-1 top-[-60%] h-screen w-screen left-0  z-4 bg-slate-100 sm:bg-transparent    sm:flex-0 sm:h-full sm:justify-end sm:static flex justify-center items-center sm:w-full ${openMenu ? 'flex' : 'hidden sm:justify-end sm:static sm:flex justify-center items-center sm:w-full '}`}>
        <div className="flex justify-center sm:justify-end uppercase  flex-col w-full h-screen sm:h-full sm:static sm:flex-row sm:text-[.8rem] md:text-lg  items-center gap-4 font-bold text-[#143159]">
          <Link href="/" className={``}  onClick={handleMenu}>
            {menuInfos('home')}
          </Link>
          <Link href="/about" className={``} onClick={handleMenu}>
            {menuInfos('about')}
          </Link>
          <Link href="/project" className={``} onClick={handleMenu}>
           {menuInfos('project')}
          </Link>
          <Link href="/contact"  className={``} onClick={handleMenu} >
            {menuInfos('contact')}
          </Link>
          <Link href="/donate" className="cursor-pointer p-2 bg-[#90764A] text-white rounded">
            {menuInfos('donate')}
          </Link>
          
        </div>
        </div>
    </div>
   </div>
  )
}

export default Navbar