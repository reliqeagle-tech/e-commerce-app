import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { assets } from '../../assets/assets'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const HomeSlider = () => {
    return (
        <div className='homeSlider py-3'>
            <div className='container'>
                <Swiper
                    navigation={true} modules={[Navigation, ]} className='sliderHome'
                  spaceBetween={10}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction : false,
                  }}
                //   slidesPerView={3}
                //   onSlideChange={() => console.log('slide change')}
                //   onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className='item overflow-hidden rounded-md md:rounded-3xl'>
                            <img className='w-full' src={assets.slideBanner1} alt="" />    
                        </div>    
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item overflow-hidden rounded-md md:rounded-3xl'>
                            <img className='w-full' src={assets.slideBanner2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item overflow-hidden rounded-md md:rounded-3xl'>
                            <img className='w-full' src={assets.slideBanner1} alt='' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item overflow-hidden rounded-md md:rounded-3xl'>
                            <img className='w-full' src={assets.slideBanner2} alt="" />
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>
        </div>
    )
}

export default HomeSlider


// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import { assets } from '../../assets/assets';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const HomeSlider = () => {
//   return (
//     <div className="w-full h-[350px] md:h-[450px] lg:h-[500px]">
//       <Swiper
//         navigation={true}
//         modules={[Navigation]}
//         className="mySwiper h-full"
//       >

//         <SwiperSlide>
//           <img src={assets.bannerimg} className="w-full h-full object-cover" />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img src={assets.bannerimg1} className="w-full h-full object-cover" />
//         </SwiperSlide>

//       </Swiper>
//     </div>
//   );
// }

// export default HomeSlider;


