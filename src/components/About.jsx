import img from '/about.png';
import { aboutAccordion } from '../assets/About';
import { useState } from 'react';

const About = () => {
    const [active, setActive] = useState(null);
    
    const handleToggle = (index) => {
        setActive(active === index ? null : index);
    }

    return (
        <div id='tentangkami' data-aos="fade-up" data-aos-duration="1000">
            <h1 className='font-poppins lg:mb-28 mb-36 lg:mt-0 -mt-32 font-[600] text-center lg:text-[45px] text-[27px]'>Tentang <span className='text-red-600'>Kami</span></h1>
            <div className='w-full h-[100vh] flex lg:flex-row flex-col justify-center lg:items-start gap-16 items-center'>
                <img src={img} alt="" className='lg:w-[400px] w-[280px] block lg:mx-0 mx-auto h-auto'/>
                <div>
                    {aboutAccordion.map((item, i) => (
                        <div key={i} className='mb-4'>
                            <div className={`bg-gray-200 w-[330px] lg:w-[600px] rounded-2xl overflow-hidden transition-all duration-700 block mx-auto ${active === i ? 'max-h-[700px]' : 'lg:max-h-[65px] max-h-[90px]'} ${active !== null ? 'shadow-lg' : ''}`}>
                                <div 
                                    className='flex px-8 justify-between items-center pt-3 cursor-pointer group'
                                    onClick={() => handleToggle(i)}
                                >
                                    <h1 className='text-black group-hover:text-red-600 duration-300 text-[18px] font-poppins font-[600]'>{item.title}</h1>
                                    <i className={`bx ${active === i ? 'bx-chevron-up rotate-180' : 'bx-chevron-down'} text-3xl transition-transform duration-500 font-poppins text-black text-[33px] group-hover:text-red-600`}></i>
                                </div>
                                <div className={`mt-2 text-gray-700 font-poppins text-[14px] px-8 py-5 text-justify transition-opacity duration-500 ${active === i ? 'opacity-100' : 'opacity-0'}`}>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
