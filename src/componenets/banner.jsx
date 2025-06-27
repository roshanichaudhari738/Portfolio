import React, { useEffect } from 'react'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'

function banner() {
 useEffect(() => {
  AOS.init({duration:1000});
 },[])
  return (
    <div  className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center '>
        <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-black'> 
            <h2 data-aos='fade-right ' className='text-[52px] font-semibold mb-8 leading-normal'>Welcome To <span className='text-fuchsia-500'>My Website</span></h2>
            <p data-aos='fade-left '>Passionate about Front-End Developer with a strong foundation in HTML, CSS, and JavaScript.
                Eager to apply technical skills to create engaging and user-friendly web interfaces. Proficient in
                 responsive design and cross browser compatibility. Seeking an entry-level position to contribute to
                 innovative projects and gain hands-on experience and familar with Python.</p>
          <div className='flex mt-8 gap-2'>
            <div className='flex items-center justify-center'>
              <div className='flex space-x-2'>
                  <a href="https://github.com/roshanichaudhari738" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                    <AiFillGithub  className='text-[28px]'/>
                  </a>
                  <a href="https://www.linkedin.com/in/roshani-c-553a48225?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDPtuDPFISJ6umnNltlSc7Q%3D%3D" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                    <FaLinkedin className='text-[28px]'/>
                  </a>
                  <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                    <FaInstagram className='text-[28px]'/>
                  </a>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default banner