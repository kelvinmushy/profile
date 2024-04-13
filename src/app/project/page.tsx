'use client'
import kevi from "../../../public/image/kevi.jpg";
import Image from "next/image";
import { FaArrowAltCircleRight,FaTimes } from "react-icons/fa";
import Modal from "react-modal";
import { useState } from "react";

const Project=()=>{
    const [showModal, setShowModal] = useState(false);

    const project = [
        {
          id: 1,
          title:"Ekazi",
          subtitle:"ekazi design",
          link: "home",
          imag:kevi

        },
        {
            id: 2,
            title:"Ekazi",
            subtitle:"ekazi design",
            link: "home",
            imag:kevi
        },
        {
            id: 3,
            title:"Ekazi",
            subtitle:"ekazi design",
            link: "home",
            imag:kevi
        },
        {
            id: 4,
            title:"Ekazi",
            subtitle:"ekazi design",
            link: "home",
            imag:kevi
        },
        {
            id: 5,
            title:"Ekazi",
            subtitle:"ekazi design",
            link: "home",
            imag:kevi
        },
      ];


    return (

        <div>
           
           <div className="flex md:px-40  px-2 pt-40">

               <div className="thrink-0">
               <div className="text-white font-semibold uppercase bg-[#042D54] px-8 p-2 rounded-lg hover:bg-slate-900 justify-center items-center w-40">
                   MY WORK
               </div>
               <div className="text-white font-bold py-3 text-4xl">
               RECENT PROJECT
               </div>
               </div>
           </div>
           <div className="flex flex-wrap md:px-40 flex-row px-2 ">

           {project.map((i,item) => (
               <div  key={i.id} className="w-full md:w-1/3 p-1">

               <div className=" rounded-lg bg-white thrink-0 ">
               <Image key={i.id} src={i.imag} alt="project"  width="99" height="33" className="w-[100%] p-2 md:hover:scale-95"/>
               <div className="grid grid-cols-2">
                <div>
                <div className="align-content-between">
                <p className="font-bold px-2">{i.title}</p>
                <p className="text-slate-500 px-2">{i.subtitle}</p>
                 </div>
                </div>
                <div>
                    <p className="rounded-lg  cursor-pointer flex justify-end p-2 " onClick={() => setShowModal(true)}>
                         <FaArrowAltCircleRight height="60" width="90"/>
                    </p>
                </div>
               </div>
              
                {/* <div className="align-content-between bg-[#0788FF]">
                <p className="font-bold px-2">{i.title}</p>
                <p className="text-slate-500 px-2">{i.subtitle}</p>
                 </div> */}
               </div>
              
             </div>
             
           ))}
          </div>
        

          <Modal isOpen={showModal} className=" my-20 mr-2 md:mx-40 rounded-lg bg-white ">
          <div className="grid justify-items-end p-2">
          <button onClick={() => setShowModal(false)} className="items-end"><FaTimes/></button>
           
          </div>

          <div className="grid grid-cols-2 p-2">
             <div>
                 <Image src={kevi} alt="ekazi"  className="w-full h-full p-2"/>
                </div>
                <div>

                  <p className="text-black font-semibold p-2">
                    Website Design for Marketing Agency Startup</p>
                  <p className="text-slate-500 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                     ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                     deserunt mollit anim id est laborum.
                     </p>
                </div>
                </div>
                <div>
                   
          </div>

          </Modal>
           </div>
       
    )



}



export default Project;