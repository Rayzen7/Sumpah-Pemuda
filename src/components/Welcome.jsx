import { useState, useEffect } from 'react';
import '../assets/Style.css';
import bg from '/bg-home.png';

const Welcome = () => {
  const [backgroundSize, setBackgroundSize] = useState(
    window.innerWidth < 768 ? '120vh' : 'cover'
  );

  useEffect(() => {
    const handleResize = () => {
      setBackgroundSize(window.innerWidth < 768 ? '120vh' : 'cover');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div
        className="flex flex-col items-center justify-center w-full h-[120vh] lg:h-[130vh] mb-16 font-poppins text-center gap-3 bg-center object-cover bg-no-repeat bg"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: backgroundSize,
        }}
      >
        <h1 className="font-[600] lg:text-[42px] text-[22px] -mt-52 lg:-mt-44">
          Selamat Datang di Website Edukasi <br className="br" />{' '}
          <span className="text-red-600">Sejarah Sumpah Pemuda</span>
        </h1>
        <p className="lg:text-[17px] text-[15px] px-2 lg:px-0 font-[600]">
          Website ini menyediakan berbagai informasi khususnya Sejarah Sumpah Pemuda
        </p>
        <a href="#tentangkami">
          <button className="mt-8 lg:text-[19px] text-[16px] font-[600] text-white px-9 py-3 rounded-3xl outline-none bg-red-600 cursor-pointer hover:bg-white border-2 hover:border-red-600 duration-300 hover:text-red-600">
            Mulai
          </button>
        </a>
      </div>
    </div>
  );
};

export default Welcome;
