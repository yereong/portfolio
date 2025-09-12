import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "@/app/globals.css";
import 'swiper/css/navigation';
import { EffectCards, Navigation } from 'swiper/modules';
import { Cards } from './Card';

export default function Projects () {

    return(
      <div className="bg-[#ffffff] flex flex-col items-center h-svh px-4 py-12 w-full overflow-x-clip">
        <div data-aos="fade-up" className="flex flex-col items-center w-full">
            <div className="title mb-[55px]">PROJECTS</div>
            <div className='w-full ml-[15%]'>
             <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Navigation]}
                navigation={true}
                className="mySwiper"
              >
                {Cards.map(({key, content})=>(
                  <SwiperSlide key={key}>
                    {content}
                  </SwiperSlide>
                ))}
                
                
              </Swiper>
            </div>
        </div>
      </div>
    );
}