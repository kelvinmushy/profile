import Link from "next/link";
import { FaBeer } from "react-icons/fa";
import { FaArrowRight,FaFacebook,FaWhatsapp,FaInstagram } from "react-icons/fa";
import Image from "next/image";
import kevi from "../../public/image/kevi.jpg";

const Home=()=>{

  return (

      <>

  <div className="md:flex md:flex-row px-2 md:pt-40 md:px-40 ">
   <div className="md:w-1/2 md:flex sm:w-1 ">
      <div className="md:thrink-0">
         <div className="bg-[#063560] text-white font-semibold uppercase  p-3 rounded-lg w-40">
            Kelvin Cosmas
         </div>
         <div className="text-white py-4 uppercase text-2xl">
            Hello! I'm Kelvin Cosmas 
         </div>
         <div className="text-slate-400 uppercase text-lg ">
            I'm Fullstack Developer
         </div>
         <div className="py-4 text-white font-semibold  text-ellipsis">
            <p>Proficient in both front-end and back-end development, 
              handling everything from user interface design to server-side logic. 
              They're skilled in various programming languages, databases, frameworks, 
              and tools to create fully functional web applications
            </p>
         </div>
         <div className="py-3 flex">
            <span className="uppercase bg-[#0788FF] p-3 rounded-lg  font-semibold text-white ">Get In Touch</span>
            <ul className="flex px-5">
               <li className="px-2 py-3 h-30 text-white" >
                  <FaFacebook/>
               </li>
               <li className="px-2 py-3 text-white h-30 w-50">
                  <FaInstagram width={50} height="50"/>
               </li>
            </ul>
         </div>
      </div>
   </div>
   <div className="md:w-1/2 items-center justify-center px-2 ">
      <Image src={kevi}  alt="kelvin cosmas" className="w-[100%] h-50 md:w-80 ms:h-70  rounded-lg md:hover:scale-125  transition-all duration-500"  />
      {/* 
      <Image src={kevi}  alt="kelvin cosmas" priority className=" md:hover:scale-125  transition-all duration-500
         cursor-pointer md:w-80 md:h-70 rounded-lg  "/>
      */}
   </div>
</div>
  <div className="flex flex-row bg-[#052039] h-20 w-full"></div>

<div className="md:flex md:flex-row px-2 md:pt-10 md:px-40">
   <div className="md:w-1/2 items-center justify-center ">
      <Image src={kevi}  alt="kelvin cosmas" className="px-2 w-[100%] h-50 md:w-80 ms:h-70  rounded-lg md:hover:scale-125  transition-all duration-500"  />
      {/* 
      <Image src={kevi}  alt="kelvin cosmas" priority className=" md:hover:scale-125  transition-all duration-500
         cursor-pointer md:w-80 md:h-70 rounded-lg  "/>
      */}
   </div>
   <div className="md:w-1/2 md:flex sm:w-1 py-4">
      <div className="md:thrink-0">
         <div className="bg-[#063560] text-white font-semibold uppercase  px-8 py-4 rounded-lg w-40">
            About Me
         </div>
        
         <div className=" py-4 text-white font-semibold  text-ellipsis  h">
            <p className="text-2xl uppercase">
            I AM AVAILABLE FOR Full stack developer
            </p>
         </div>
         <div className="text-white font-semibold">
          <p>Seasoned full-stack developer with over four years of hands-on experience. 
            I specialize in building dynamic and scalable web applications, 
            proficient in both front-end and back-end technologies. 
            From crafting intuitive user interfaces to designing robust server architectures,
             I thrive on creating seamless digital experiences that drive business growth.</p>
         </div>
         <div className="grid grid-cols-4 flex">
          <div className="justify-center bg-[#112436] rounded-lg text-white font-bold px-12 cursor-pointer hover:bg-[#0788FF]">
            <p>22</p>
            <p>22</p>
          </div> 
          <div className="justify-center bg-[#112436] rounded-lg text-white font-bold px-12 mx-2 cursor-pointer hover:bg-[#0788FF]">
            <p>4+</p>
            <p>Years Experience</p>
          </div> 
          <div className="justify-center bg-[#112436] rounded-lg text-white px-12 mx-2 cursor-pointer hover:bg-[#0788FF]">
            <p className="font-bold ">16+</p>
            <p className="text-wrap text-smass">Git Repository</p>
          </div> 
          <div className="justify-center bg-[#112436] rounded-lg text-white font-bold px-12 mx-2 cursor-pointer hover:bg-[#0788FF]">
            <p>5+</p>
            <p className="text-sm">Live Project</p>
          </div> 
         
         </div>
         <div className="py-3 flex">
            <span className="uppercase bg-[#0788FF] p-3 rounded-lg  font-semibold text-white ">Get In Touch</span>
           
         </div>
      </div>
   </div>
</div>    
      </>

         

     
  )



}



export default Home;