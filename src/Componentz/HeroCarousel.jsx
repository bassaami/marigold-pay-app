import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroCarousel = () => {
  const slides = [
    {
      title: "Global Connectivity at Your Fingertips",
      description: "Pay your internet bills from home and stay connected to the metaverse.",
      img: "https://www.bssnews.net/assets/news_photos/2022/04/04/image-54219-1649068760.jpg", // Replace with actual Mark J. image
      bgColor: "#002B5B"
    },
    {
      title: "Powerful Energy Management",
      description: "Pay electricity bills at ease. It's going to be huge, believe me.",
      img: "https://www.dailysunshine.com.bd/wp-content/uploads/2021/08/NESCO-LOGO.jpg", // Replace with actual Trump image
      bgColor: "#b90505"
    },
    {
      title: "Investing in the Future",
      description: "Pay education fees conveniently with our streamlined digital portal.",
      img: "https://www.thedailystar.net/sites/default/files/styles/big_1/public/images/2024/11/23/ctg-wasa.jpg", // Replace with actual Meloni image
      bgColor: "#008C45"
    }
  ];

  let btnn = "px-6 py-2 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700  active:scale-95 mt-5"

  return (
    <div className="hero-container" style={{ width: '100%', height: '500px' }}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        style={{ height: '100%' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div style={{
              backgroundColor: slide.bgColor,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              color: 'white',
              padding: '0 10%'
            }}>
              <div style={{ maxWidth: '500px' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{slide.title}</h1>
                <p style={{ fontSize: '1.2rem' }}>{slide.description}</p>
                <button className={btnn}>
                  Pay Now
                </button>
              </div>
              <div className="image-container">
                <img 
                  src={slide.img} 
                  alt="Feature" 
                  style={{ width: '300px', height: '300px', borderRadius: '50%', objectFit: 'cover', border: '5px solid white' }} 
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;