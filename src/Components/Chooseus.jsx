import React from 'react'
// Card data
const reasons = [
    {
        heading: "Comprehensive Digital Marketing",
        description: "Our expert team crafts data-driven digital marketing strategies that boost your online presence. From SEO and PPC to social media marketing, we help you reach your target audience and achieve your business goals.",
    },
    {
        heading: "Professional Website Development",
        description: "Get a stunning, user-friendly website that reflects your brand and engages your audience. Our developers use the latest technologies to create responsive and high-performing websites tailored to your business needs."
    },
    {
        heading: "Creative Logo Design",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    }
];
const Chooseus = () => {
    return (
        <section className='min-h-[60vh] pt-[15vh]  bg-black relative py-5 px-2 flex flex-col items-center justify-center md:flex-row'>
            <h1 className="top-10 text-3xl md:text-4xl text-white font-bold text-center mb-[20px] md:absolute">
                Why Choose us
            </h1>
            {reasons.map((item, index) => (
                <div key={index} className='bg-white border-[5px] border-yellow-300 w-[300px] min-h-[250px] p-4 m-2 rounded-lg shadow-md'>
                    <h6 className='h-[50px] text-center text-lg font-bold mb-4'>{item.heading}</h6>
                    <p className='text-sm flex items-center justify-center text-center font-semibold'>{item.description}</p>
                </div>
            ))}
        </section>
    );
}
export default Chooseus;
