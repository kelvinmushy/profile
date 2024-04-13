'use client'
import kevi from "../../../public/image/kevi.jpg";
import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
const Project=()=>{

    const [openModalForm, setModael]=useState(false);

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

      const handleProject=()=>{

        alert ("hello Is under design")

      }

      const openModal=()=>{

        return(

            <><p>Hello I'm Mr Modal Do you want to Open Me</p></>
        )
      }

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
                    <p className="rounded-lg  cursor-pointer flex justify-end p-2 " onClick={handleProject}>
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
         
        </div>
    )



}



export default Project;