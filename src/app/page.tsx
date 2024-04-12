import Link from "next/link";
import { FaBeer } from "react-icons/fa";
import { FaArrowRight,FaFacebook,FaWhatsapp,FaInstagram } from "react-icons/fa";
import Image from "next/image";
import kevi from "../../public/image/kevi.jpg";

const Home=()=>{

  return (

      <>
          <div className="md:flex md:flex-row md:p-40 py-40 px-1">

                <div className="md:w-1/2 md:flex sm:w-1 ">
                <div className="md:thrink-0">
                <div className="bg-[#063560] text-white font-semibold uppercase  p-3 rounded-lg w-40">
                   Kelvin Cosmas
                  </div>
                  <div className="text-white py-4 uppercase text-2xl">
                    Hello! I'm Kelvin Cosmas 
                  </div>
                  <div className="text-white uppercase text-2xl">
                    I'm Developer
                  </div>
                  <div className="py-4 text-white font-semibold  text-ellipsis">
                  <p>Yet bed any for travelling assistance indulgence unpleasing. 
                    Not thought.</p>
                 </div>
                

                  <div className="py-3 flex">

                      <span className="uppercase bg-[#0788FF] p-3 rounded-lg  font-semibold text-white ">Get In Touch</span>
                     <ul className="flex px-5">
                      <li className="px-2 py-3 h-30 text-white" ><FaFacebook/></li>
                      <li className="px-2 py-3 text-white h-30 w-50"><FaInstagram width={50} height="50"/></li>
                     </ul>
                  </div>
                 
                </div>
               
                </div>

                <div className="md:w-1/2 items-center justify-center ">
                  <Image src={kevi}  alt="kelvin cosmas" className="w-[100%] h-50 md:w-80 ms:h-70  rounded-lg md:hover:scale-125  transition-all duration-500"  />
                {/* <Image src={kevi}  alt="kelvin cosmas" priority className=" md:hover:scale-125  transition-all duration-500
                 cursor-pointer md:w-80 md:h-70 rounded-lg  "/> */}
                </div>


          </div>
      </>

         

     
  )



}



export default Home;