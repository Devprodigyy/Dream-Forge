import React from 'react'

const About = () => {
    
    return (
        <section id='about' className='min-h-[90vh] w-full bg-black text-white flex items-center justify-center flex-col-reverse md:flex-row'>
            <div className='flex h-[50%] w-full flex-col items-center justify-center md:h-full md-[50%]'>
                <h1 className='text-[5vw] text-yellow-400 py-3 '>About Us</h1>
                <h6 className='text-[3vw]'>Our Mission</h6>
                <p className='text-[3vw] w-[80%] md:text-[2vh] text-center'>Our vision is to be the leading digital agency known
                    for our innovative solutions, exceptional quality, and
                    unwavering commitment to client success. We aim to
                    set new standards in the industry by continuously
                    evolving and adapting to the ever-changing digital
                    landscape. Our goal is to empower businesses of all
                    sizes to harness the full potential of digital
                    technology, enabling them to thrive in an increasingly
                    competitive market.Our mission is to provide our
                    clients with innovative and effective digital solutions
                    that elevate their brand and drive business growth.
                </p>
            </div>
            <div className='flex h-[50%] w-full flex-col items-center justify-center md:h-full md-[50%] p-5'>
            <img className='h-full w-full object-cover' src="https://img.freepik.com/free-photo/serious-executives-connecting-partner-via-laptop_1262-7301.jpg?t=st=1735449874~exp=1735453474~hmac=96abe7fcbd1ece052c1f898a29dadbf8f2ac578ee8547347c5a0f16ee976f348&w=740" alt="" />
            </div>
        </section>
    )
}

export default About