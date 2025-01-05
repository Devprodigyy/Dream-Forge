import React from 'react'

const Footer = () => {
  return (
   <footer className='min-h-[10vh] py-[5vh] flex items-center justify-center flex-col bg-black'>
     <div className=' w-full flex items-center justify-center bg-black'>
                <a href="#"><i className=" hover:text-yellow-500 text-[4vh] text-white ri-linkedin-fill"></i></a>
                <a href="#"><i className=" hover:text-yellow-500 text-[4vh] text-white ri-facebook-fill"></i></a>
                <a href="#"><i className=" hover:text-yellow-500 text-[4vh] text-white ri-twitter-fill"></i></a>
            </div>
     <p className='text-white mt-6  hover:text-yellow-500'>&copy; 2023 DreamForge. All rights reserved.</p>
    <br />
    <p className='text-white pb-10 hover:text-yellow-500'>Created by DEVPRODIGY <sup><i class="ri-gemini-fill text-yellow-400"></i></sup></p>
   </footer>
  )
}

export default Footer