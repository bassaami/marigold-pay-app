import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const MIdCarousel = () => {
  const slides = [
    {
      title: "Get 20% discount on WIFI bills payment",
      description: "Pay your internet bills from home and stay connected to the metaverse.",
      img: "https://www.bssnews.net/assets/news_photos/2022/04/04/image-54219-1649068760.jpg",
      bgColor: "bg-[#002B5B]"
    },
    {
      title: "Now 200* point rewards on electricity bills payment",
      description: "Pay electricity bills at ease. It's going to be huge, believe me.",
      img: "https://www.dailysunshine.com.bd/wp-content/uploads/2021/08/NESCO-LOGO.jpg",
      bgColor: "bg-[#b90505]"
    },
    {
      title: "Pay Education bills and get 5% Cashback",
      description: "Pay education fees conveniently with our streamlined digital portal.",
      img: "https://www.thedailystar.net/sites/default/files/styles/big_1/public/images/2024/11/23/ctg-wasa.jpg",
      bgColor: "bg-[#008C45]"
    }
  ];

  const btnClass = "px-6 py-3 bg-amber-600 text-white font-bold rounded-lg shadow-md hover:bg-amber-700 active:scale-95 mt-6 transition-all w-full sm:w-max";

  return (
    <div className="w-full h-[600px] md:h-[500px] overflow-hidden rounded-2xl">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`${slide.bgColor} h-full w-full flex flex-col-reverse md:flex-row-reverse items-center justify-center md:justify-around px-6 md:px-16 lg:px-24 py-10 text-white gap-8`}>
              
              {/* Text Content */}
              <div className="max-w-xl text-center md:text-left order-2 md:order-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-lg opacity-90 max-w-md mx-auto md:mx-0">
                  {slide.description}
                </p>
                <button className={btnClass}>
                  Pay Now
                </button>
              </div>

              {/* Image Content */}
              <div className="order-1 md:order-2">
                <div className="relative">
                  {/* Decorative background circle for the image */}
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl scale-125"></div>
                  <img 
                    src={slide.img} 
                    alt={slide.title} 
                    className="relative w-full h-full md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-[2rem] object-cover border-4 border-white shadow-2xl transition-transform hover:rotate-2"
                  />
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Style Overrides */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet { background: white !important; opacity: 0.5; }
        .swiper-pagination-bullet-active { opacity: 1; width: 24px; border-radius: 4px; }
      `}} />
    </div>
  );
};

export default MIdCarousel;