import { aboutAllTokoh } from "../../assets/About"

const CharAll = () => {
  return (
    <div className="font-poppins mt-28" data-aos="fade-up" data-aos-duration="800">
        <h1 className="text-center font-[600] text-[29px] lg:text-[40px]">Tokoh-Tokoh <span className="text-red-600">Berpengaruh</span></h1>
        <div className="flex justify-center items-center gap-12 lg:gap-9 lg:mx-12 mx-0 mt-8 flex-wrap">
            {aboutAllTokoh.map((item, i) => (
                <div key={i}>
                    <div className="bg-white shadow-2xl w-[300px] h-auto p-6 rounded-xl flex flex-col gap-8">
                        <img src={item.img} alt="" className="w-[280px] h-auto rounded-md"/>
                        <div className="text-[14px]">
                            <h1>Nama: {item.nama}</h1>
                            <p>Lahir: {item.lahir}</p>
                            <p>Wafat: {item.wafat}</p>
                            <p>Tempat Tinggal: {item.tempat}</p>
                            <p>Agama: {item.agama}</p>
                            <p>{item.deskripsi}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CharAll