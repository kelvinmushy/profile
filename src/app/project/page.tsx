import kevi from "../../../public/image/kevi.jpg";
import Image from "next/image";
const Project=()=>{

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
  <div className="w-full md:w-1/3 p-1">
   
    <div className=" rounded-lg bg-white  thrink-0">
    <Image src={kevi}  alt="project" className="w-[100%] p-2 md:hover:scale-95"/>
    <p className="font-bold px-2">Web Design</p>
     <p className="text-slate-500 px-2">Web Design</p>
    </div>
     
  </div>
  <div className=" w-full  md:w-1/3 p-1">
  <div className="rounded-lg bg-white w-full   thrink-0">
  <Image src={kevi} alt="project" className="w-[100%] p-2 md:hover:scale-95"/>
  <p className="font-bold px-2">Web Design</p>
     <p className="text-slate-500 px-2">Web Design</p>
  </div>
  </div>
  <div className=" w-full  md:w-1/3 p-1">
  <div className="rounded-lg bg-white w-full  thrink-0 ">
  <Image src={kevi} alt="project" className="w-[100%] p-2 md:hover:scale-95"/>
  <p className="font-bold px-2">Web Design</p>
     <p className="text-slate-500 px-2">Web Design</p>
  </div>
  </div>
  

</div>
         
        </div>
    )



}



export default Project;