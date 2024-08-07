"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { Link } from '../../../navigation';
import { useTranslations } from 'next-intl';

const Carousel = () =>{
  const carousel = useTranslations('Carousel');
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

      <SwiperSlide>

      <div className="h-full flex justify-center bg-[#EBEFF2]  items-center relative flex-col sm:flex-row">
        <div className=" hidden w-full sm:flex justify-center items-center h-full">
          <Image className='w-full object-cover' src="/images/competence.jpg" alt="informatique.jpg" width={1000} height={1000} />
        </div>
        <div className="w-full flex justify-center h-full  items-center flex-col  gap-6 sm:gap-8 p-8">
          <h1 className='text-[#90764A] text-3xl sm:text-6xl  font-bold uppercase'> {carousel('titleRenforcer')} </h1>
          <p className='text-sm sm:text-lg'>{carousel('subTitleRenforcer')}</p>
          <Link href="/about" className="bg-[#143159] text-white px-4 py-2 rounded-lg" >
          {carousel('btnCarousel')}
          </Link>
        </div>

      </div>
      </SwiperSlide>
        <SwiperSlide>

            <div className="h-full flex justify-center items-center relative flex-col sm:flex-row">
              <div className="hidden w-full sm:flex justify-center items-center h-full">
                <Image className='w-full object-cover' src="/images/school.jpg" alt="school.jpg" width={1000} height={1000} />
              </div>
              <div className="w-full flex justify-center h-full bg-[#C5D8DC] items-center flex-col  gap-6 sm:gap-8 p-8">
                <h1 className='text-white text-3xl sm:text-6xl font-bold uppercase'>{carousel('formerTitle')} </h1>
                <p className='text-sm sm:text-lg'>{carousel('subTitleFormer')}</p>
                <Link href="/about" className="bg-[#143159] text-white px-4 py-2 rounded-lg" >
                {carousel('btnCarousel')}
                </Link>
              </div>
             
            </div>
        </SwiperSlide>

        <SwiperSlide>

            <div className="h-full flex justify-center bg-[#BA9CBE]  items-center relative flex-col sm:flex-row">
              <div className="hidden w-full sm:flex justify-center items-center h-full">
                <Image className='w-full object-cover' src="/images/music.jpg" alt="informatique.jpg" width={1000} height={1000} />
              </div>
              <div className="w-full flex justify-center h-full  items-center flex-col  gap-6 sm:gap-8 p-8">
                <h1 className='text-white text-3xl sm:text-6xl  font-bold uppercase'>{ carousel('titlePromouvoir')}</h1>
                <p className='text-sm sm:text-lg'> {carousel('subTitlePromouvoir')} </p>
                <Link href="/about" className="bg-[#143159] text-white px-4 py-2 rounded-lg" >
                {carousel('btnCarousel')}
                </Link>
              </div>
            
            </div>
        </SwiperSlide>

        <SwiperSlide>

            <div className="h-full flex justify-center bg-[#D6B641]  items-center relative flex-col sm:flex-row">
              <div className="hidden w-full sm:flex justify-center items-center h-full">
                <Image className='w-full object-left-top object-cover' src="/images/partenariat.jpg" alt="informatique.jpg" width={1000} height={1000} />
              </div>
              <div className="w-full flex justify-center h-full  items-center flex-col  gap-6 sm:gap-8 p-8">
                <h1 className='text-white text-3xl sm:text-6xl  font-bold uppercase'>{carousel('formerPartenariat')}</h1>
                <p className='text-sm sm:text-lg'> {carousel('subTitlePartenariat')}</p>
                <Link href="/about" className="bg-[#143159] text-white px-4 py-2 rounded-lg" >
                {carousel('btnCarousel')}
                </Link>
              </div>
            
              
            </div>
        </SwiperSlide>

        
      </Swiper>
    </>
  );
}

export default Carousel