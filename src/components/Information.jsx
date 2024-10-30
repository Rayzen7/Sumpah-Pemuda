/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from 'react';
import city from '/city-new.png';
import { Link } from 'react-router-dom';

const Information = () => {
    const imgRef = useRef(null);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (imgRef.current) {
            imgRef.current.style.transform = `translateX(${-scrollY * 0.2}px)`;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='w-full h-auto lg:-mt-10 mt-52 overflow-hidden'>
            <div
                className='flex'
                ref={imgRef}
                style={{ transition: 'transform 0.1s ease-out' }}
            >
                <img src={city} className='w-auto h-auto' style={{ margin: 0, padding: 0 }} />
                <img src={city} className='w-auto h-auto' style={{ margin: 0, padding: 0 }} />
            </div>
            <div className='bg-redInfo h-auto' >
                <h1 className='text-white font-poppins text-center font-[600] text-[23px] lg:text-[42px] pt-10'>Fitur Yang Disediakan</h1>
                <div className='flex justify-center flex-wrap gap-12 items-center mt-20'>
                    <div className='bg-white w-[200px] h-[220px] rounded-lg duration-300 flex flex-col justify-center items-center gap-7 group cursor-pointer group hover:h-[270px]' >
                        <i className='bx bx-book-bookmark text-[60px] group-hover:text-red-600 duration-300'></i>
                        <p className='font-poppins text-center font-[600] text-[18px] group-hover:text-red-600 duration-300'>Sejarah <br />Sumpah Pemuda</p>
                    </div>
                    <div className='bg-white w-[200px] h-[220px] rounded-lg duration-300 flex flex-col justify-center items-center gap-7 group cursor-pointer group hover:h-[270px]'>
                        <i className='bx bx-book-reader text-[60px] group-hover:text-red-600 duration-300'></i>
                        <p className='font-poppins text-center font-[600] text-[18px] group-hover:text-red-600 duration-300'>Belajar <br />Sumpah Pemuda</p>
                    </div>
                    <div className='bg-white w-[200px] h-[220px] rounded-lg duration-300 flex flex-col justify-center items-center gap-7 group cursor-pointer group hover:h-[270px]'>
                        <i className='bx bxs-book-open text-[60px] group-hover:text-red-600 duration-300'></i>
                        <p className='font-poppins text-center font-[600] text-[18px] group-hover:text-red-600 duration-300'>Buku Digital<br />Sumpah Pemuda</p>
                    </div>
                    <div className='bg-white w-[200px] h-[220px] rounded-lg duration-300 flex flex-col justify-center items-center gap-7 group cursor-pointer group hover:h-[270px]'>
                        <i className='bx bx-home text-[60px] group-hover:text-red-600 duration-300'></i>
                        <p className='font-poppins text-center font-[600] text-[18px] group-hover:text-red-600 duration-300'>Museum <br />Sumpah Pemuda</p>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col justify-around lg:gap-0 gap-12 items-center lg:mt-36 mt-24 lg:px-16 px-7 lg:text-start text-center'>
                    <p className='text-white font-poppins lg:text-[21px] text-[16px] w-full lg:w-[600px]'>&#34;Sumpah Pemuda adalah tonggak sejarah yang tak terhapuskan. Mari kita rawat dan lestarikan nilai-nilai luhur yang terkandung di dalamnya.&ldquo; <br />- Bung Tomo</p>
                    <Link to='/belajar'><i className='bx bx-right-arrow-alt bg-white text-black lg:p-4 p-2 text-[30px] lg:text-[55px] cursor-pointer rounded-full rotate-[-25deg] hover:scale-90 hover:text-red-600 hover:rotate-[-360deg] hover:opacity-80 duration-300'></i></Link>
                </div>
            </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5E0000" fill-opacity="1" d="M0,224L60,218.7C120,213,240,203,360,181.3C480,160,600,128,720,149.3C840,171,960,245,1080,250.7C1200,256,1320,192,1380,160L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>
    );
}

export default Information;
