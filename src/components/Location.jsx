const Location = () => {
    return (
      <div>
          <div data-aos="fade-up" data-aos-duration="700">
            <h1 className="font-poppins font-[600] text-center lg:text-[45px] text-[30px] lg:mt-0 mt-12 mb-20">Lokasi <span className="text-red-600">Museum</span></h1>
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6031532930365!2d106.83843726791747!3d-6.183833446866858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f448497eae29%3A0x6f890df278af3c65!2sMuseum%20Sumpah%20Pemuda!5e0!3m2!1sid!2sid!4v1730169563148!5m2!1sid!2sid" 
                  className="w-full h-[70vh]"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
              </iframe>
              <div className="w-full h-[15vh] bg-redInfo flex flex-col justify-center items-center">
                <div className="flex justify-center items-center lg:gap-32 gap-5 lg:flex-row flex-col">
                    <div className="flex justify-center items-center gap-3">
                        <i className="bx bxs-map text-white lg:text-[25px] text-[20px]"></i>
                        <p className="font-poppins font-[600] text-white lg:text-[14px] text-[12px]">Jl. Kramat Raya 106, Senen, Jakarta Pusat</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <i className="bx bxs-envelope text-white lg:text-[25px] text-[20px]"></i>
                        <p className="font-poppins font-[600] text-white lg:text-[14px] text-[12px]">museumsumpahpemuda@kemdikbud.go.id</p>
                    </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Location;
  