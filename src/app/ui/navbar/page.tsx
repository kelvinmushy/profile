
'use client'
import Link from "next/link";
import { FaTimes,FaBars } from "react-icons/fa";
import { useState } from "react";

const Nav=()=>{

    const [nav, setNav] = useState(false);

    const handleNave=()=>{

         setNav(!nav);
    }


    return (

        <div>
              <div className="bg-slate-900 flex w-full h-24  fixed nav items-center md:justify-center text-white uppercase sm:flex justify-end">
                    <ul className="hidden md:flex">
                        <Link href="/" className="p-x-5"> Home </Link>
                        <Link href="/about" className="px-5"> About </Link>
                        <Link href="/project" className="px-5"> Project </Link>
                        <Link href="/hire" className="px-5"> Hire Me </Link>
                       
                </ul>
              
               <div onClick={handleNave} className="md:hidden cursor-pointer p-2">
                  <FaBars size="30"/>
                </div>

              </div>

              <div className={nav ? 
                "fixed left-0 top-0 w-[40%] sm:hidden h-screen  bg-slate-800 p-10 ease-in duration-500" 
                : "fixed left-[-100%] top-0 p-10 ease-in h-screen  w-[40%] duration-500"}
                >
                
                <div className="flex justify-end items-center w-full">
                    <div onClick={handleNave} className="cursor-pointer text-white">
                         <FaTimes size="30"/>
                    </div>
                </div>
                <div className="flex-col py-4 uppercase w-full text-white">
                    <ul>
                         <Link href="/">
                            <li onClick={()=>setNav(false)} className="py-2"></li>
                            Home
                         </Link>

                         <Link href="/about">
                         <li onClick={()=>setNav(false)} className="py-2"></li>
                            About
                         </Link>
                         <Link href="/project">
                            <li onClick={()=>setNav(false)} className="py-2"></li>
                            Project
                         </Link>

                         <Link href="/hire">
                         <li onClick={()=>setNav(false)} className="py-2"></li>
                            Hire Me
                         </Link>

                    </ul>
                </div>

              </div>
        </div>
    )



}



export default Nav;