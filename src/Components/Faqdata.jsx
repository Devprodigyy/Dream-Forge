import React from "react";

const faqData = [
  {
    id: 1,
    question: "What is DevProdigy?",
    answer:
      "DevProdigy is a platform dedicated to helping developers improve their skills with resources, tutorials, and tools for web development.",
  },
  {
    id: 2,
    question: "How can I join the DevProdigy community?",
    answer:
      "You can join our Discord server, follow us on Instagram, or subscribe to our YouTube channel for regular updates and learning materials.",
  },
  {
    id: 3,
    question: "Do you offer courses or workshops?",
    answer:
      "Yes, we occasionally host workshops and create video courses to help developers master frontend, backend, and design tools.",
  },
  {
    id: 4,
    question: "Is the content on DevProdigy free?",
    answer:
      "Most of our content is free, but we also offer premium services like 1-on-1 mentorship and project reviews.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="w-full min-[40vh] py-12 bg-black text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-500 mb-8">
        Frequently Asked Questions
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="group w-[80%] mx-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-500 bg-white text-black shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-lg font-bold group-hover:font-semibold">
                {faq.question}
              </h2>
              <p className="mt-2 text-gray-800 group-hover:font-bold">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
