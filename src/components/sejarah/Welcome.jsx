import { useState, useEffect } from 'react';
import bg1 from '/museum.jpg';
import bg2 from '/museum1.jpg';
import bg3 from '/museum2.jpg';

const Welcome = () => {
  const backgrounds = [bg1, bg2, bg3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className='w-full h-[100vh] overflow-hidden relative'>
      <div
        className='flex transition-transform duration-1000'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className='w-full min-w-full h-[100vh] bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        ))}
      </div>
      <h1 className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[30px] lg:text-[50px] font-poppins font-[600] w-full text-center'>Sejarah Sumpah Pemuda</h1>
      <a href="#head"><button className='bg-red-700 px-10 py-3 absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full text-white font-poppins font-[600] text-[16px] lg:text-[19px] border-2 border-red-700 hover:bg-transparent hover:border-white hover:text-white duration-300'>Mulai</button></a>
    </div>
  );
};

export default Welcome;
