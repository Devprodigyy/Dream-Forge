import React from 'react'
import img1 from '/src/assets/dreamforge1.webp'
import ladki from '/src/assets/ladki.png'
import '../index.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Hero = () => {

  useGSAP(()=>{
    gsap.from(".name",{
      y:-10,
      duration:1.2,
      ease:'power3.inOut',
      opacity:0,
      
      
    })
    gsap.from("p",{
      y:-10,
      duration:1.2,
      ease:'power3.inOut',
      opacity:0,
      
      
    })
    
    gsap.from("img",{
      right:"-100%",
      duration:2,
      ease:'power3.inOut',
      

    })
  })
  return (
    <section id='home' className='h-[100vh] w-full relative flex flex-col items-center justify-center'>
        <img className='h-[10vh] rounded-full' src={img1} alt="" />
        <h1 className='name text-center text-[10vw] md:text-[5vw]'>DreamForge</h1>
        <p className='text-[4vw] text-center px-2 md:text-[2vw]'>Your one stop destination for all you digital needs.</p>
        <img id='ladki' className='absolute bottom-0 right-0 hidden md:flex ' src={ladki} alt="" />
      </section>
  )
}

export default Hero