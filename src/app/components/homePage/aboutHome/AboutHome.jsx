import { useTranslations } from "next-intl"
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoSchoolOutline } from "react-icons/io5";
import { SlMicrophone } from "react-icons/sl";
import { FaGlobeAfrica } from "react-icons/fa";



const AboutHome = () => {
  const about = useTranslations('Carousel')
 

  return (
    <div className='w-full p-5 sm:p-20 flex-col flex justify-center items-center'>
        <div className=" w-full h-full flex flex-center justify-center flex-col gap-16 ">
          <div className="flex justify-center items-center flex-col gap-8">
            <h1 className=" text-3xl sm:text-5xl font-bold text-center text-[#143159]"> {about('objectifTitle')} </h1>
            <p className=" text-md  sm:text-2xl text-center" >{about('subTitleRenforcer')}</p>
            <span className="text-center px-4 xl:px-[5rem]  text-sm  sm:text-xl font-light">
              {about("objectifSubTitle")}
            </span>
          </div>
          <div className="w-full flex justify-center items-center flex-col sm:flex-row gap-8">
            <div className="flex justify-center items-center flex-col gap-4">
            <GiWeightLiftingUp className=" text-[4rem] sm:text-[6rem] text-[#90764A]" />
              <h1 className=" text-center text-xl sm:text-2xl font-bold"> {about('titleRenforcer')} </h1>
            </div>
            <div className="flex justify-center items-center flex-col gap-4">
            <IoSchoolOutline className="text-[4rem] sm:text-[6rem] text-[#90764A]" />
            <h1 className="text-center text-xl sm:text-2xl font-bold"> {about('formerTitle')} </h1>
            </div>
            <div className="flex justify-center items-center flex-col gap-4">
            <SlMicrophone className="text-[4rem] sm:text-[6rem] text-[#90764A]" />
            <h1 className="text-center text-xl sm:text-2xl font-bold"> {about('titlePromouvoir')} </h1>
            </div>
            <div className="flex justify-center items-center flex-col gap-4">
            <FaGlobeAfrica className="text-[4rem] sm:text-[6rem] text-[#90764A]" />
            <h1 className="text-center text-xl sm:text-2xl font-bold"> {about('formerPartenariat')} </h1>
            </div>
          </div>
        </div>

    </div>
  )
}

export default AboutHome