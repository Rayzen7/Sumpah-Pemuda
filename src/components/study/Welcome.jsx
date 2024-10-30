import book from '/book.png';

const Welcome = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] w-full lg:pt-32 pt-16'>
        <div className='flex flex-col justify-center items-center font-poppins'>
            <h1 className='font-[600] lg:text-[50px] text-[30px] lg:px-0 px-10 text-center'>Forum Belajar <span className='text-red-600'>Sumpah Pemuda</span></h1>
            <p className='lg:text-[18px] text-[15px] lg:px-0 px-10 text-center'>Forum Sumber Pembelajaran Sumpah Pemuda</p>
        </div>
        <img src={book} alt="" className='w-[240px] lg:w-[380px] h-auto'/>
    </div>
  )
}

export default Welcome