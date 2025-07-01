import React from "react";
import CV from "../assets/Roshani Kiran Chaudhari Resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import Profileimage from "../assets/software-developer.avif";

function About() {
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750,
  });
  return (
    <div
      id="About"
      className="lg:px-56 px-10 lg:py-0 py-32 md:py-18 lg:py-18  text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-28  items-center"
    >
      <img
        src={Profileimage}
        alt="Profile"
        data-aos="zoom-out"
        className="w-full h-auto md:w-72 md:h-72 rounded-full shadow-lg hover:shadow-fuchsia-800/100 border-4 hover:bg-fuchsia-800 border-fuchsia-800 mb-10 lg:mb-0"
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white mt-0">
        <h2
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-800 uppercase"
        >
          About me
        </h2>
        <p data-aos="fade-left" className="flex flex-col">
          Passionate and detail-oriented Full-Stack Developer with a solid
          foundation in HTML, CSS, JavaScript, and responsive web design.
          Proficient in building user-friendly, cross-browser compatible
          interfaces using modern front-end technologies. Familiar with backend
          development using Node.js, Express, and Python, with a keen interest
          in creating efficient and scalable APIs. Enthusiastic about learning
          new technologies and contributing to real-world, innovative projects.
          Seeking an entry-level opportunity to grow as a full-stack developer
          and gain hands-on experience in both frontend and backend development.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button
                type="button"
                className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden align-middle"
              >
                <a href={CV} download>
                  {" "}
                  Download CV
                </a>
              </button>
              {/* <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                            <AiFillGithub  className='text-[28px]'/>
                          </a>
                          <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                            <FaLinkedin className='text-[28px]'/>
                          </a>
                          <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                            <FaInstagram className='text-[28px]'/>
                          </a>
                          <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                            <FaFacebook className='text-[28px]'/>
                          </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
