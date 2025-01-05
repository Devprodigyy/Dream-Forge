import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

// Testimonial data
const initialTestimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    feedback:
      "This platform has exceeded my expectations. The UI is intuitive and the features are incredibly useful.",
    image:
      "https://img.freepik.com/free-photo/beautiful-woman-park-last-sunny-days_144627-16058.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Manager",
    feedback:
      "I’ve seen significant improvement in my team's workflow after using this. Highly recommend it!",
    image:
      "https://img.freepik.com/free-photo/young-beautiful-girl-looking-front-wearing-olive-green-t-shirt-isolated-pink-wall-with-copy-space_141793-90409.jpg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Designer",
    feedback:
      "The design and functionality are top-notch. I can't imagine working without it now.",
    image: "https://img.freepik.com/free-photo/beautiful-girl-with-cute-face_144627-11591.jpg",
  },
];

const Testoo = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  return (
    <>
      <div className="yellowbg">
        <section
          id="testimonials"
          className="w-[90%] sm:w-[95%] md:w-[60%] mx-auto py-12 relative min-h-[60vh]"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            What Our Clients Say
          </h1>
          <Swiper
            slidesPerView={1} // Adjust for responsiveness
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            autoplay={{
              delay: 1500, // Time between transitions in milliseconds
              disableOnInteraction: false, // Keeps autoplay running even if user interacts
            }}
            loop={true} // Infinite loop
            speed={800} // Smooth transition speed (in milliseconds)
            effect="slide" // Slide effect (you can change this to 'fade' or others if needed)
            easing="ease-in-out" // Easing function to make the transition smoother
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              768: {
                slidesPerView: 2, // Show 2 slides on medium+ screens
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="flex justify-center">
                <div className="m-5px card testobg mx-auto rounded-lg shadow-[5px_10px_20px_5px_rgba(51,51,51,0.9)] flex-col p-6 w-[300px] h-[400px] flex items-center justify-center border-[2px] border-slate-900">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-[150px] h-[150px] object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-black mb-2">{testimonial.role}</p>
                  <p className="text-center text-black font-semibold text-sm overflow-hidden">
                    {testimonial.feedback}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  );
};

export default Testoo;
