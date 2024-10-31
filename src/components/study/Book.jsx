import HTMLFlipBook from "react-pageflip";
import garuda from '/garuda.png';
import ikrar from '/ikrar.jpeg';
import latarBelakang from '/galery/2.png';
import kongres1 from '/galery/1.jpg';
import kongres2 from '/galery/5.jpg';
import audioFile from '/audio-ikrar.mp3';
import { useRef, useState, useEffect } from 'react';
import '../../assets/Style.css';

function Book() {
  const audioRef = useRef(null);
  const [scale, setScale] = useState(1);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(0.7);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <h1 className="text-center font-poppins font-[600] text-[32px] lg:text-[40px] -mt-20 lg:mt-20 mb-5">
        Buku <span className="text-red-600">Sumpah Pemuda</span>
      </h1>
      <div style={{ transform: `scale(${scale}) translate(-5%)`, transformOrigin: 'center' }} className="mx-auto block lg:mt-0 lg:scale-100 -mt-24 lg:overflow-hidden">
        <HTMLFlipBook width={window.innerWidth < 768 ? 400 : 500} height={window.innerWidth < 768 ? 600 : 600} className="font-poppins block mx-0 lg:mx-auto overflow-hidden pb-24">
          <div className="demoPage bg-[rgb(196,1,1)] rounded-xl p-10 shadow-2xl">
            <div className="flex flex-col w-full h-full justify-center items-center text-white gap-5">
              <img src={garuda} alt="" className="w-[120px] h-auto"/>
              <div className="text-center">
                <h2 className="lg:text-[32px] text-[25px] font-bold">SUMPAH PEMUDA</h2>
                <p>Satu Bangsa, Satu Bahasa</p>
              </div>
            </div>
          </div>
          <div className="demoPage bg-[rgba(0,0,0,0.05)] rounded-xl p-10 shadow-2xl">
            <h2 className="text-2xl font-[600] pb-6">Pendahuluan</h2>
            <p className="text-justify text-[14px]">Sumpah Pemuda adalah momen bersejarah yang terjadi pada tanggal 28 Oktober 1928, yang menjadi tonggak penting dalam perjuangan bangsa Indonesia untuk meraih kemerdekaan. Ikrar ini dibacakan dalam Kongres Pemuda II yang dihadiri oleh pemuda dari berbagai daerah di Indonesia. Sumpah Pemuda menegaskan persatuan dan identitas bangsa Indonesia yang terdiri dari beragam suku, budaya, dan bahasa.</p>
          </div>
          <div className="demoPage bg-[rgba(0,0,0,0.05)] rounded-xl p-10 shadow-2xl">
            <h2 className="text-2xl font-[600] pb-6">Latar Belakang</h2>
            <div className="flex flex-col gap-3">
              <img src={latarBelakang} alt="" className="w-[350px] rounded-xl h-auto"/>
              <p className="text-justify text-[14px]">Awal mula Sumpah Pemuda berakar dari kesadaran nasional yang muncul di kalangan pemuda Indonesia pada awal abad ke-20. Berbagai organisasi pergerakan mulai berdiri, seperti Boedi Oetomo pada tahun 1908, yang menjadi tonggak kebangkitan nasional. Munculnya rasa kebangsaan dan keinginan untuk mengakhiri penjajahan Belanda mendorong pemuda untuk bersatu dalam mencapai cita-cita bersama.</p>
            </div>
          </div>
          <div className="demoPage bg-[rgba(0,0,0,0.05)] rounded-xl p-10 shadow-2xl">
            <h2 className="text-2xl font-[600] pb-6">Kongres Pemuda I</h2>
            <div className="flex flex-col gap-3">
              <img src={kongres1} alt="" className="w-[350px] rounded-xl h-auto"/>
              <p className="text-justify text-[14px]">Kongres Pemuda I diadakan pada tanggal 30 April hingga 2 Mei 1926 di Batavia. Kongres ini dihadiri oleh perwakilan dari berbagai organisasi pemuda dan menghasilkan resolusi yang menekankan pentingnya persatuan. Kongres ini menjadi landasan untuk pertemuan pemuda selanjutnya, yang akan melahirkan Ikrar Sumpah Pemuda.</p>
            </div>
          </div>
          <div className="demoPage bg-[rgba(0,0,0,0.05)] rounded-xl p-10 shadow-2xl">
            <h2 className="text-2xl font-[600] pb-6">Kongres Pemuda II</h2>
            <div className="flex flex-col gap-3">
              <img src={kongres2} alt="" className="w-[350px] rounded-xl h-auto"/>
              <p className="text-justify text-[14px]">Kongres Pemuda II berlangsung pada tanggal 27-28 Oktober 1928 di Jakarta. Di sinilah lebih dari 700 pemuda berkumpul untuk mendiskusikan nasib bangsa dan mempersatukan tekad mereka. Kongres ini menegaskan komitmen pemuda terhadap persatuan dan kebangkitan nasional.</p>
            </div>
          </div>
          <div className="demoPage bg-[rgba(0,0,0,0.05)] rounded-xl p-10 shadow-2xl">
            <h2 className="text-2xl font-[600] pb-6">Ikrar Sumpah Pemuda</h2>
            <div className="flex flex-col gap-3">
              <img src={ikrar} alt="" className="w-[350px] rounded-xl h-auto"/>
              <p className="text-justify text-[14px]">
                Pada 28 Oktober 1928, Ikrar Sumpah Pemuda dibacakan, yang berisi tiga butir penting: <br />
                1. Satu Tanah Air: Mengakui bahwa Indonesia adalah satu tanah air. <br />
                2. Satu Bangsa: Mengakui bahwa bangsa Indonesia adalah satu bangsa, terlepas dari suku dan latar belakang. <br />
                3. Satu Bahasa: Menggunakan satu bahasa persatuan, yaitu Bahasa Indonesia. <br />
                <button onClick={playAudio} className="mt-6 font-[600] px-7 py-2 rounded-2xl text-white bg-red-600 hover:bg-transparent hover:border-red-600 border-2 hover:text-red-600 duration-300">Putar Suara</button>
              </p>
            </div>
          </div>
          <div className="demoPage bg-[rgba(0,0,0,0.05)] rounded-xl p-10 shadow-2xl">
            <h2 className="text-2xl font-[600] pb-6">Peringatan Hari Sumpah Pemuda</h2>
            <p className="text-justify text-[14px]">Setiap tanggal 28 Oktober diperingati sebagai Hari Sumpah Pemuda. Peringatan ini mengingatkan kita akan pentingnya peran pemuda dalam menjaga persatuan dan kesatuan bangsa serta meneruskan semangat perjuangan para pendahulu. Pemuda diharapkan menjadi agen perubahan dan penerus cita-cita kemerdekaan.</p>
          </div>
          <div className="demoPage bg-[rgba(0,0,0,0.05)] rounded-xl p-10 shadow-2xl">
            <h2 className="text-2xl font-[600] pb-6">Kesimpulan</h2>
            <p className="text-justify text-[14px]">Sumpah Pemuda adalah simbol persatuan dan kebangkitan nasional Indonesia. Ikrar yang dibacakan pada tahun 1928 tetap relevan hingga kini, menjadi pengingat bahwa persatuan dan kerjasama adalah kunci untuk mencapai kemajuan dan keberhasilan bangsa.</p>
          </div>
        </HTMLFlipBook>
      </div>
      <audio ref={audioRef} src={audioFile} preload="auto"></audio>
    </div>
  );
}

export default Book;
