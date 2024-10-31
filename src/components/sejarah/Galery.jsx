import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import img1 from '/galery/1.jpg';
import img2 from '/galery/2.png';
import img3 from '/galery/3.jpg';
import img4 from '/galery/4.jpg';
import img5 from '/galery/5.jpg';
import img6 from '/galery/6.jpg';

import { EffectCards } from 'swiper/modules'; 

const Galery = () => {
  return (
    <div className="lg:w-[600px] lg:px-0 px-9 w-[320] overflow-hidden h-auto mx-auto block lg:my-32 my-28">
        <h1 className='text-center font-poppins font-[600] text-[32px] lg:text-[40px] mb-20'>Galery <span className='text-red-600'>Sumpah Pemuda</span></h1>
      <Swiper
        modules={[EffectCards]}
        effect="cards"
        grabCursor={true}
        className='lg:mt-0 -mt-10'
      >
        <SwiperSlide>
          <img src={img1} alt="Image 1" className="lg:w-[600px] w-[320] h-auto object-cover rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Image 2" className="lg:w-[600px] w-[320] h-auto object-cover rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Image 3" className="lg:w-[600px] w-[320] h-auto object-cover rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Image 3" className="lg:w-[600px] w-[320] h-auto object-cover rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Image 3" className="lg:w-[600px] w-[320] h-auto object-cover rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="Image 3" className="lg:w-[600px] w-[320] h-auto object-cover rounded-xl" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Galery;
