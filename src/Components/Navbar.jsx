import React, { useEffect } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";

const Navbar = () => {
  useEffect(() => {
    gsap.to("#logo", {
      x: 10,
    });
  }, []);

  const openMenu = () => {
    gsap.to("#menusec", {
      top: "0%",
      duration: 1.5,
      ease: "power3.inOut",
    });
  };

  const closeMenu = () => {
    gsap.to("#menusec", {
      top: "-120%",
      duration: 1.5,
      ease: "power3.inOut",
    });
  };

  gsap.to("#menusec", {
    top: "-120%",
    duration: 2.5,
    ease: "power3.inOut",
  });


  return (
    <>
      <section id="menusec" className="absolute top-[-120%] z-40 h-full w-full bg-black text-white pt-4 px-4" >
        <h6
          onClick={closeMenu}
          className="h-[10vh] w-full items-center flex justify-end text-[3vh] text-end cursor-pointer"
        >
          Close
        </h6>
        <div className="h-[70vh] w-full flex flex-col border-b-[1px] border-white md:flex-row">
          <div className="px-10 gap-2 h-[50%] w-full flex flex-col justify-center md:h-full">
            <div className="w-full px-1">
              <a className="text-[3vh] md:text-[4vh] xl:text-[3.2vw]" href="#">
                HOME
              </a>
            </div>
            <div className="w-full px-1">
              <a className="text-[3vh] md:text-[4vh] xl:text-[3.2vw]" href="#">
                SERVICES
              </a>
            </div>
            <div className="w-full px-1">
              <a className="text-[3vh] md:text-[4vh] xl:text-[3.2vw]" href="#">
                PORTFOLIO
              </a>
            </div>
            <div className="w-full px-1">
              <a className="text-[3vh] md:text-[4vh] xl:text-[3.2vw]" href="#">
                BLOG
              </a>
            </div>
            <div className="w-full px-1">
              <a className="text-[3vh] md:text-[4vh] xl:text-[3.2vw]" href="#">
                ABOUT
              </a>
            </div>
          </div>
          <div className="h-[50%] w-full px-10 flex flex-col gap-[10vh] items-start md:items-end justify-center md:h-full">
            <div className="w-[50%] text-left md:text-right pr-4 ">
              <h6 className="text-[2.5vh] px-1">Contact Details</h6>
              <p className="text-[1.5vh] px-1">Dreamforge.team@gmail.com</p>
              <p className="text-[1.3vh] px-1">65732-5XXXX</p>
            </div>
            <div className="w-[50%] text-left md:text-right pr-4">
              <h6 className="text-[2.5vh] px-1">Address</h6>
              <p className="text-[1.5vh] px-1">123 Main Street</p>
              <p className="text-[1.3vh] px-1">New York, NY 6825.</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[15vh] flex gap-6 items-center justify-center">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </section>

      <nav className="w-full h-[10vh] fixed z-30 top-0 px-3 bg-black border-b-2 border-white text-yellow-500 flex items-center justify-between">
        <h1 id="logo" className="text-[4vw] md:text-[2vw]">
          DreamForge
        </h1>
        <div className="div h-full w-[60%] hidden md:flex items-center justify-evenly xl:w-[40%]">
          <Link className="menutext text-white text-[2.2vh]" smooth={true} duration={500} to="home" spy={true} offset={-70} // Optional: Adjust if you have a fixed navbar
          >
            Home
          </Link>
          <Link className="menutext text-white text-[2.2vh]" smooth={true} duration={500} to="features" spy={true} offset={-70}
          >
            Features
          </Link>
          <Link className="menutext text-white text-[2.2vh]" smooth={true} duration={500} to="services" spy={true} offset={-70}
          >
            Services
          </Link>

          <Link className="menutext text-white text-[2.2vh]" smooth={true} duration={500} to="about" spy={true} offset={-70}
          >
            About
          </Link>
          <Link className="menutext text-white text-[2.2vh]" smooth={true} duration={500} to="contact" spy={true} offset={-70}
          >
            Contact
          </Link>
        </div>
        <i
          onClick={openMenu}
          className="ri-menu-3-line text-[3vh] md:hidden cursor-pointer"
        ></i>
      </nav>
    </>
  );
};

export default Navbar;
