import React from 'react'

const Footer = () => {
  return (
   <footer className='min-h-[10vh] py-[5vh] flex items-center justify-center flex-col bg-black'>
     <div className='w-full flex items-center justify-center bg-black'>
                <a href="#"><i className="text-[4vh] text-white ri-linkedin-fill"></i></a>
                <a href="#"><i className="text-[4vh] text-white ri-facebook-fill"></i></a>
                <a href="#"><i className="text-[4vh] text-white ri-twitter-fill"></i></a>
            </div>
     <p className='text-white mt-6'>&copy; 2023 DreamForge. All rights reserved.</p>
   </footer>
  )
}

export default Footer