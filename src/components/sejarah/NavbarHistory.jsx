import bg from '/logo-nobg.png'
import { Link } from 'react-router-dom'
import '../../assets/Style.css'
import { useState } from 'react'

const NavbarHistory = () => {
  const handleOpenNewTab = () => {
    const url = 'https://museumsumpahpemuda.kemdikbud.go.id/';
    window.open(url, '_blank');
  };

  const [invisible, setInvisible] = useState(true);
  const toggleList = () => {
      setInvisible(!invisible);
  }
  const visibilityClass = invisible ? 'animate-moveRight' : 'animate-moveLeft';

  return (
    <div className='w-full z-40 lg:h-[14vh] h-[11vh] text-white bg-[rgba(0,0,0,0.3)] flex justify-between items-center lg:px-[45px] fixed px-5'>
      <div className='flex justify-center items-center gap-5'>
        <img src={bg} alt="" className='lg:w-[50px] w-[40px] h-auto'/>
        <h1 className='font-poppins font-[600] lg:text-[21px] text-[18px]'>Sumpah <span className='text-red-600'>Pemuda</span></h1>
      </div>
      <div className={`font-poppins flex lg:flex-row flex-col lg:h-auto lg:pl-0 pl-12 lg:mt-0 -mt-28 h-[120vh] top-0 right-0 lg:bg-transparent bg-[rgba(0,0,0,0.3)] lg:w-auto w-[200px] justify-center lg:relative absolute lg:items-center items-start gap-12 font-[600] cursor-pointer text-[17px] ${visibilityClass}`}>
        <Link to='/'><p className='hover:text-red-600 duration-200'>Beranda</p></Link>
        <Link to='/sejarah'><p className='hover:text-red-600 duration-200'>Sejarah</p></Link>
        <Link to='/belajar'><p className='hover:text-red-600 duration-200'>Belajar</p></Link>
        <p className='hover:text-red-600 duration-200' target='_blank' onClick={handleOpenNewTab}>Museum</p>
        <Link to='/kontak'><p className='hover:text-red-600 duration-200'>Kontak</p></Link>
      </div>
      <i className='bx bx-list-ul text-white text-[30px] list z-50 relative' onClick={toggleList}></i>
    </div>
  )
}

export default NavbarHistory