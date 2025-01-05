import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const cardData = [
  {
    id: 1,
    title: "Video Editing",
    description: "Craft stunning video content with ease.",
    image: "https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "Bring your ideas to life with professional design.",
    image: "https://plus.unsplash.com/premium_photo-1661281347096-4a250151f422?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Website Development",
    description: "Build seamless web experiences for your users.",
    image: "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Logo Design",
    description: "Design logos that leave a lasting impression.",
    image: "https://plus.unsplash.com/premium_photo-1726873328193-2fcde532707f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Cardss = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse position X within the card
        const y = e.clientY - rect.top; // Mouse position Y within the card
        const centerX = rect.width / 2; // Center X of the card
        const centerY = rect.height / 2; // Center Y of the card

        const rotateX = -(y - centerY) / 15; // Dynamic tilt X (more gradual)
        const rotateY = (x - centerX) / 15; // Dynamic tilt Y (more gradual)

        // Smooth tilt animation with shadow
        gsap.to(card, {
          duration: 0.6, // Smoother transition
          rotateX: rotateX,
          rotateY: rotateY,
          scale: 1.08,
          boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
          transformPerspective: 1200,
          ease: "power4.out",
        });
      };

      const handleMouseLeave = () => {
        // Reset animation to original state
        gsap.to(card, {
          duration: 0.7, // Smoother return
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow when idle
          ease: "power4.out",
        });
      };

      // Attach event listeners
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup listeners
      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <>
    
    
    <h1 className=" pt-10 min-h-[5vh] top-0 text-center items-center justify-center text-[3vw] hidden md:flex bg-slate-100 font-bold">Services</h1>
    
    <section
      id="cardss"
      className="min-h-[60vh] bg-slate-100 w-full hidden flex-wrap justify-center items-center gap-8 p-8 perspective-[1200px] md:flex "
    >

      {cardData.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className="bg-white border-[3px] border-slate-900 shadow-xl rounded-lg max-w-[300px] flex flex-col items-center p-4 transform transition-transform"
        >
          <img
            src={card.image}
            alt={card.title}
            className="h-40 w-full object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </section>
    </>
  );
};

export default Cardss;
