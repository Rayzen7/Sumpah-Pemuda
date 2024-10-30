import img from '/kongres.jpg'

const Header = () => {
  return (
    <div className='w-full h-auto pb-20' id='head' data-aos="fade-up" data-aos-duration="1000">
        <h1 className='text-center font-poppins font-[600] text-[35px] lg:text-[45px] mt-16'>Awal <span className='text-red-600'>Mula</span></h1>
        <div className='flex lg:flex-row flex-col justify-center items-start gap-16 mt-12'>
            <img src={img} alt="" className='rounded-xl w-[300px] block lg:mx-0 mx-auto lg:w-[330px] h-auto'/>
            <div className='lg:mt-0 -mt-7 lg:px-0 px-5'>
                <p className='font-poppins w-full lg:w-[450px] text-justify text-[15px]'>Awal mula Sumpah Pemuda berakar dari kesadaran nasional yang muncul di kalangan pemuda Indonesia pada awal abad ke-20. Berbagai organisasi pergerakan, seperti Boedi Oetomo yang didirikan pada tahun 1908, menjadi tonggak kebangkitan nasional. Munculnya rasa kebangsaan dan keinginan untuk mengakhiri penjajahan Belanda mendorong pemuda dari berbagai suku untuk bersatu. Pada tahun 1927, Partai Nasional Indonesia (PNI) dipimpin oleh Soekarno menggalang dukungan untuk kemerdekaan. Kesadaran akan pentingnya persatuan memuncak pada Kongres Pemuda II di Jakarta pada 27-28 Oktober 1928, di mana para pemuda menyatakan tekad mereka melalui Ikrar Sumpah Pemuda, menegaskan identitas dan cita-cita sebagai bangsa yang merdeka.</p>
                <a href="#body"><button className='px-8 py-3 lg:mt-10 mt-16 text-white w-[160px] block lg:mx-0 mx-auto bg-red-600 border-2 rounded-full font-[600] font-poppins hover:bg-white hover:border-red-600 hover:text-red-600 duration-300'>Lanjut</button></a>
            </div>
        </div>
    </div>
  )
}

export default Header