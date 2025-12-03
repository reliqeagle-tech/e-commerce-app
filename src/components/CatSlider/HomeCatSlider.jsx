import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider'>
      <div className='container py-4'>
        <Swiper
      spaceBetween={10}
      slidesPerView={8}
      modules={[Navigation]}
      navigation={true}
      className='mySwiper'
    >
      <SwiperSlide>
        <Link to='/'>
            <div className='item bg-white rounded text-center flex items-center justify-center flex-col py-7 px-3'>
                <img className='w-[60%] transition-all duration-300 hover:scale-105' src={assets.catimg} alt="" />
                <h3 className='text-gray-600 font-semibold text-xs mt-3'>Smart TabletSmart Tablet</h3>
            </div>
        </Link>    
      </SwiperSlide>
      <SwiperSlide>
        <Link to='/'>
            <div className='item bg-white rounded text-center flex items-center justify-center flex-col py-7 px-3'>
                <img className='w-[60%]' src={assets.catimg} alt="" />
                <h3 className='text-gray-600 font-semibold text-xs mt-3'>Smart TabletSmart Tablet</h3>
            </div>
        </Link>    
      </SwiperSlide>
      <SwiperSlide>
        <Link to='/'>
            <div className='item bg-white rounded text-center flex items-center justify-center flex-col py-7 px-3'>
                <img className='w-[60%]' src={assets.catimg} alt="" />
                <h3 className='text-gray-600 font-semibold text-xs mt-3'>Smart TabletSmart Tablet</h3>
            </div>
        </Link>    
      </SwiperSlide>
      <SwiperSlide>
        <Link to='/'>
            <div className='item bg-white rounded text-center flex items-center justify-center flex-col py-7 px-3'>
                <img className='w-[60%]' src={assets.catimg} alt="" />
                <h3 className='text-gray-600 font-semibold text-xs mt-3'>Smart TabletSmart Tablet</h3>
            </div>
        </Link>    
      </SwiperSlide>
      <SwiperSlide>
        <Link to='/'>
            <div className='item bg-white rounded text-center flex items-center justify-center flex-col py-7 px-3'>
                <img className='w-[60%]' src={assets.catimg} alt="" />
                <h3 className='text-gray-600 font-semibold text-xs mt-3'>Smart TabletSmart Tablet</h3>
            </div>
        </Link>    
      </SwiperSlide>
      <SwiperSlide>
        <Link to='/'>
            <div className='item bg-white rounded text-center flex items-center justify-center flex-col py-7 px-3'>
                <img className='w-[60%]' src={assets.catimg} alt="" />
                <h3 className='text-gray-600 font-semibold text-xs mt-3'>Smart TabletSmart Tablet</h3>
            </div>
        </Link>    
      </SwiperSlide>
      <SwiperSlide>
        <Link to='/'>
            <div className='item bg-white rounded text-center flex items-center justify-center flex-col py-7 px-3'>
                <img className='w-[60%]' src={assets.catimg} alt="" />
                <h3 className='text-gray-600 font-semibold text-xs mt-3'>Smart TabletSmart Tablet</h3>
            </div>
        </Link>    
      </SwiperSlide>
      <SwiperSlide>
        <Link to='/'>
            <div className='item bg-white rounded text-center flex items-center justify-center flex-col py-7 px-3'>
                <img className='w-[60%]' src={assets.catimg} alt="" />
                <h3 className='text-gray-600 font-semibold text-xs mt-3'>Smart TabletSmart Tablet</h3>
            </div>
        </Link>    
      </SwiperSlide>
      <SwiperSlide>
        <Link to='/'>
            <div className='item bg-white rounded text-center flex items-center justify-center flex-col py-7 px-3'>
                <img className='w-[60%]' src={assets.catimg} alt="" />
                <h3 className='text-gray-600 font-semibold text-xs mt-3'>Smart TabletSmart Tablet</h3>
            </div>
        </Link>    
      </SwiperSlide>
      <SwiperSlide>
        <Link to='/'>
            <div className='item bg-white rounded text-center flex items-center justify-center flex-col py-7 px-3'>
                <img className='w-[60%]' src={assets.catimg} alt="" />
                <h3 className='text-gray-600 font-semibold text-xs mt-3'>Smart TabletSmart Tablet</h3>
            </div>
        </Link>    
      </SwiperSlide>
    </Swiper>
      </div>
    </div>
  )
}

export default HomeCatSlider
