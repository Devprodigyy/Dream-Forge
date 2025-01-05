import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// Import required modules
import { EffectCreative } from 'swiper/modules';

// Card data
const cardData = [
  {
    id: 1,
    title: "Video Editing",
    description: "This is the first card description.",
    image: "https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "This is the second card description.",
    image: "https://plus.unsplash.com/premium_photo-1661281347096-4a250151f422?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Website Development",
    description: "This is the third card description.",
    image: "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Logo Design",
    description: "This is the fourth card description.",
    image: "https://plus.unsplash.com/premium_photo-1726873328193-2fcde532707f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description: "This is the third card description.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpZ2l0YWwlMjBtYWtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    title: "SEO",
    description: "This is the fourth card description.",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Card = () => {
  const swiperRef = useRef(null);

  // Function to handle click on the right arrow (next slide)
  const handleSwipeNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  // Function to handle click on the left arrow (previous slide)
  const handleSwipePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="p-6 min-h-[60vh] xl:w-[80%] mx-auto md:hidden">
      <h1 id="services" className="text-[4vh] font-bold mb-6 text-center text-black">Services</h1>
      <section className="min-h-[50vh] w-full py-8 flex items-center justify-center">
        <Swiper
          ref={swiperRef}
          grabCursor={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id} className="flex items-center justify-center">
              <div className="mx-auto border-2 border-black bg-white rounded-lg shadow-md p-4 w-[300px] md:w-[350px] h-[400px] flex flex-col items-center">
                {/* Card Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-3/5 object-cover rounded-md mb-4"
                />
                {/* Card Title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h2>
                {/* Card Description */}
                <p className="text-gray-600 text-center my-auto">{card.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className="w-full h-[10vh] flex items-center justify-center">
        <h6 className="text-[4vw] md:text-[2vw] font-bold">
          <i onClick={handleSwipePrev} className="px-5 ri-arrow-left-circle-line cursor-pointer"></i>
          Swipe
          <i onClick={handleSwipeNext} className="px-5  ri-arrow-right-circle-line cursor-pointer"></i>
        </h6>
      </div>
    </div>
  );
};

export default Card;
