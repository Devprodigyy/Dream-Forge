import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

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

  {
    id: 4,
    name: "John Doe",
    role: "Software Engineer",
    feedback:
      "This platform has exceeded my expectations. The UI is intuitive and the features are incredibly useful.",
    image:
      "https://img.freepik.com/free-photo/beautiful-woman-park-last-sunny-days_144627-16058.jpg",
  },
  {
    id: 5,
    name: "Jane Smith",
    role: "Product Manager",
    feedback:
      "I’ve seen significant improvement in my team's workflow after using this. Highly recommend it!",
    image:
      "https://img.freepik.com/free-photo/young-beautiful-girl-looking-front-wearing-olive-green-t-shirt-isolated-pink-wall-with-copy-space_141793-90409.jpg",
  },
  {
    id: 6,
    name: "Emily Johnson",
    role: "Designer",
    feedback:
      "The design and functionality are top-notch. I can't imagine working without it now.",
    image: "https://img.freepik.com/free-photo/beautiful-girl-with-cute-face_144627-11591.jpg",
  },
];

const Testoo = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  let newId = 4; // Counter for new cards

  // Add a new testimonial dynamically
  const addTestimonial = () => {
    const newTestimonial = {
      id: newId,
      name: `New User ${newId}`,
      role: "New Role",
      feedback: `This is feedback from a dynamically added user ${newId}.`,
      image:
        "https://img.freepik.com/free-photo/young-woman-smiling_144627-27526.jpg",
    };

    setTestimonials([...testimonials, newTestimonial]);
    newId++;
  };

  return (
    <>
      <section
        id="testimonials"
        className="w-[90%] sm:w-[95%] md:w-[60%] mx-auto py-12 relative min-h-[60vh]"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          What Our Clients Say
        </h1>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1} // Adjust this for responsiveness
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 2, // Show 2 slides on medium+ screens
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="flex justify-center">
              <div className="card bg-white mx-auto rounded-lg shadow-lg  flex-col p-6 w-[300px] h-[400px] flex items-center justify-center border-2 border-black">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-[150px] h-[150px] object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                <p className="text-center text-gray-600 text-sm overflow-hidden">
                  {testimonial.feedback}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Testoo;
