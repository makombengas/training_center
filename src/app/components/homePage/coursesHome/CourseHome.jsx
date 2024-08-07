"use client"

import Image from 'next/image'
import { AiFillClockCircle } from "react-icons/ai";
import { BiSolidBook } from "react-icons/bi";
import { PiStudentFill } from "react-icons/pi";
import { LiaStarSolid } from "react-icons/lia";
import { Link } from '../../../../navigation';
import { useTranslations } from 'next-intl';

const CourseHome = () => {

  const cours = useTranslations("all_courses")
  const topCours = useTranslations("top_courses")

  const courses = ["cours1", "cours2", "cours3"]

  if (!courses) return <div>{cours('loading')}</div>


  return (
    
    <div className="w-full h-full bg-[#EBEFF2] sm:px-[1rem]  xl:px-[6rem] pt-[6rem] pb-[6rem] ">
      {/* Top infos*/}
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col sm:items-start items-center justify-center gap-[2rem] flex-wrap px-2	">
          <span className="text-left text-[#90764A] flex items-center gap-2">
            <hr className='w-10 h-0.5 bg-[#90764A] hidden sm:block ' /> <p className=' sm:text-xl'> {topCours("trading")} </p>
          </span>
          <div className="w-full items-center sm:items-start flex sm:justify-between flex-wrap gap-8 ">
            <h1 className="text-[#143159] text-xl w-full xl:w-[50%] font-bold sm:text-5xl text-center sm:text-left "> {topCours("explore")}</h1>
            {/* <div className="flex justify-center sm:justify-start gap-4 sm:gap-6 flex-wrap">
              <button className="bg-[#143159]  hover:bg-[#90764A] text-sm sm:text-lg text-white px-4 py-2 rounded-md">New Courses</button>
              <button className="bg-[#143159] hover:bg-[#90764A] text-sm sm:text-lg text-white px-4 py-2 rounded-md">Regular Courses</button>
              <button className="bg-[#143159] hover:bg-[#90764A] text-sm sm:text-lg text-white px-4 py-2 rounded-md">Featured Courses</button>
            </div>   */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

      
       
               {
                 courses.map((course) => (
                  <div key={cours(`${course}.id`)} >
                   
                   <div className="  border border-[#143159] rounded relative ">
                     <Image className='w-full' src={cours(`${course}.image`)} alt={cours(`${course}.image`)}  width={1000} height={1000} />
                     <div className="p-4 flex flex-col gap-1 sm:gap-4 bg-slate-100">
                       <div className="flex flex-wrap gap-4 items-center sm:gap-4">
                             <div className="flex  items-center gap-2">
                             <AiFillClockCircle className='text-[#90764A] text-2xl' />
                             <b>{cours(`${course}.duree`)} </b>
                             <span> {cours(`${course}.mois`)} </span>
                             </div>
                             <div className="flex items-center gap-1">
                             <BiSolidBook className='text-[#90764A] text-2xl' />
                             <b>{cours(`${course}.nombreLecons`)} </b>
                             <span> {cours(`${course}.lessons`)}</span>
                             </div>
                             <div className="flex items-center gap-2">
                             <PiStudentFill className='text-[#90764A] text-3xl' />
                             <b> {cours(`${course}.maxEtudiants`)}</b>
                             <span> {cours(`${course}.eleves`)} </span>
                             </div>
                       </div>
                       <div className="flex flex-col gap-2">
                         <h1 className="text-[#143159] font-bold text-2xl"> {cours(`${course}.titre`)}</h1>
                         <p className="text-[#143159] text-sm"> {cours(`${course}.description`)}</p>
                       </div>
 
                       <hr className="border border-[#90764A]" />
                       <div className="w-full gap-4 flex justify-center sm:justify-between p-4 items-center flex-wrap">
                             <div className="flex gap-1">
                               <b> {cours(`${course}.prixInfo`)}</b>
                               <h1> {cours(`${course}.prix`)} </h1>
                               <p> {cours(`${course}.devise`)}</p>
                             </div>
                             <div className="flex gap-1 text-xl  text-[#90764A]">
                             {/* <LiaStarSolid />
                             <LiaStarSolid />
                             <LiaStarSolid />
                             <LiaStarSolid />
                             <LiaStarSolid /> */}
                            <Link href={
                              {
                                pathname: cours(`${course}.lien`),
                                query:{
                                  image: cours(`${course}.image`),
                                  titre: cours(`${course}.titre`),
                                  description: cours(`${course}.description`),
                                  duree: cours(`${course}.duree`),
                                  mois: cours(`${course}.mois`),
                                  nombreLecons: cours(`${course}.nombreLecons`),
                                  maxEtudiants: cours(`${course}.maxEtudiants`),
                                  eleves: cours(`${course}.eleves`),
                                  prix: cours(`${course}.prix`),
                                  devise: cours(`${course}.devise`),
                                 
                                  }

                              }
                            } className=" transition-colors ease-linear duration-400 hover:font-bold  py-2 px-3 rounded hover:bg-[#143159] hover:text-[#fff]"> {cours(`${course}.btnInscription`)}</Link>
                             </div>
                       </div>
                   </div>
                   </div>
                 </div>
                 ))
               }
          





          </div>
        </div>


      </div>
    </div>
  )
}

export default CourseHome