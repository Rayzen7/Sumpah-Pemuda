import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const About = () => {
  return (
    <div id='body' data-aos="fade-up" data-aos-duration="1000">
        <h1 className='text-center mt-12 lg:mb-16 mb-8 font-poppins font-[600] text-[30px] lg:text-[40px]'>Perjalanan <span className='text-red-600'>Para Pemuda</span></h1>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(210, 0, 0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(95, 0, 0)' }}
        iconStyle={{ background: 'rgb(95, 0, 0)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        icon={<span style={{ fontSize: '24px' }}></span>}  
      >
        <h3 className="vertical-timeline-element-title font-poppins font-[600] text-[20px]">Awal Kebangkitan Nasional</h3>
        <h4 className="vertical-timeline-element-subtitle">1908</h4>
        <p className='text-justify'>
            Boedi Oetomo didirikan di Jakarta oleh sekelompok pemuda. Organisasi ini menjadi tonggak awal pergerakan nasional dan mendorong kesadaran akan pentingnya pendidikan dan kebangkitan nasional.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(210, 0, 0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(95, 0, 0)' }}
        iconStyle={{ background: 'rgb(95, 0, 0)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        icon={<span style={{ fontSize: '24px' }}></span>} 
      >
        <h3 className="vertical-timeline-element-title font-poppins font-[600] text-[20px]">Kongres Pemuda I</h3>
        <h4 className="vertical-timeline-element-subtitle">1926</h4>
        <p className='text-justify'>
            Kongres Pemuda I diadakan pada tanggal 30 April hingga 2 Mei di Batavia (sekarang Jakarta). Kongres ini dihadiri oleh berbagai organisasi pemuda dari seluruh Indonesia dan menghasilkan berbagai resolusi yang menekankan pentingnya persatuan di antara pemuda.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(210, 0, 0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(95, 0, 0)' }}
        iconStyle={{ background: 'rgb(95, 0, 0)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        icon={<span style={{ fontSize: '24px' }}></span>}  
      >
        <h3 className="vertical-timeline-element-title font-poppins font-[600] text-[20px]">Munculnya Organisasi Nasionalis</h3>
        <h4 className="vertical-timeline-element-subtitle">1927</h4>
        <p className='text-justify'>
          Partai Nasional Indonesia (PNI) didirikan oleh Soekarno dan kawan-kawan. PNI menjadi salah satu organisasi yang menggalang dukungan rakyat untuk mencapai kemerdekaan, serta mempromosikan ide-ide nasionalisme di kalangan pemuda.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(210, 0, 0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(95, 0, 0)' }}
        iconStyle={{ background: 'rgb(95, 0, 0)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        icon={<span style={{ fontSize: '24px' }}></span>} 
      >
        <h3 className="vertical-timeline-element-title font-poppins font-[600] text-[20px]">Kongres Pemuda II</h3>
        <h4 className="vertical-timeline-element-subtitle">1928</h4>
        <p className='text-justify'>
            Kongres Pemuda II berlangsung pada tanggal 27-28 Oktober di Jakarta. Kongres ini dihadiri oleh lebih dari 700 pemuda yang mewakili berbagai organisasi pemuda dari seluruh Indonesia.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(210, 0, 0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(95, 0, 0)' }}
        iconStyle={{ background: 'rgb(95, 0, 0)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        icon={<span style={{ fontSize: '24px' }}></span>}  
      >
        <h3 className="vertical-timeline-element-title font-poppins font-[600] text-[20px]">Ikrar Sumpah Pemuda</h3>
        <h4 className="vertical-timeline-element-subtitle">28 Oktober 1928</h4>
        <p className='text-justify'>
          Pembacaan Ikrar Sumpah Pemuda yang berisi tiga butir <br />
          1. Satu Tanah Air: Mengakui bahwa Indonesia adalah satu tanah air. <br />
          2. Satu Bangsa: Mengakui bahwa bangsa Indonesia adalah satu bangsa, terlepas dari suku dan latar belakang. <br />
          3. Satu Bahasa: Menggunakan satu bahasa persatuan, yaitu Bahasa Indonesia.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(210, 0, 0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(95, 0, 0)' }}
        iconStyle={{ background: 'rgb(95, 0, 0)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        icon={<span style={{ fontSize: '24px' }}></span>} 
      >
        <h3 className="vertical-timeline-element-title font-poppins font-[600] text-[20px]">Perjuangan Pemuda</h3>
        <h4 className="vertical-timeline-element-subtitle">1930-an</h4>
        <p className='text-justify'>
          Semangat Sumpah Pemuda menginspirasi berbagai organisasi pemuda baru, seperti Gerakan Pemuda Sosialis, Angkatan Muda Indonesia, dan lainnya. Mereka aktif dalam pergerakan melawan penjajahan, mengorganisir demonstrasi, dan menyebarkan ide-ide kebangsaan.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(210, 0, 0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(95, 0, 0)' }}
        iconStyle={{ background: 'rgb(95, 0, 0)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        icon={<span style={{ fontSize: '24px' }}></span>}  
      >
        <h3 className="vertical-timeline-element-title font-poppins font-[600] text-[20px]">Proklamasi Kemerdekaan</h3>
        <h4 className="vertical-timeline-element-subtitle">1945</h4>
        <p className='text-justify'>
          17 Agustus: Proklamasi Kemerdekaan Indonesia dibacakan oleh Soekarno dan Mohammad Hatta. Perjuangan yang dimulai oleh pemuda dengan semangat Sumpah Pemuda akhirnya membuahkan hasil dengan berdirinya negara Indonesia yang merdeka.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(210, 0, 0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(95, 0, 0)' }}
        iconStyle={{ background: 'rgb(95, 0, 0)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        icon={<span style={{ fontSize: '24px' }}></span>} 
      >
        <h3 className="vertical-timeline-element-title font-poppins font-[600] text-[20px]">Diperingati Hari Sumpah Pemuda</h3>
        <h4 className="vertical-timeline-element-subtitle">1988</h4>
        <p className='text-justify'>
          Diperingati sebagai Hari Sumpah Pemuda. Pemerintah mengangkat tema pentingnya peran pemuda dalam menjaga persatuan dan kesatuan bangsa serta meneruskan semangat perjuangan para pendahulu.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  );
};

export default About;