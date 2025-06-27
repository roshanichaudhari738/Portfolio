import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bottom-0 left-0 w-screen bg-slate-900 text-white px-4 md:px-16 lg:px-28 p-8 py-2">
    <div className="max-w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h2 className="text-lg font-semibold text-purple-400">PORTFOLIO</h2>
          <p className="text-gray-400">@Roshani's Portfolio.com</p>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold text-purple-400">PROJECT</h2>
          <ul className="text-gray-400 space-y-1">
            <li>Web Design</li>
            <li>Web Development</li>
            <li>E-commerce Website</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold text-purple-400">CONTACT</h2>
          <p className="text-gray-400">Email: roshchau738@gmail.com</p>
          <p className="text-gray-400">Phone: +91 113-456-7890</p>
        </div>

        
        <div className=''>
          <h2 className="text-lg font-semibold text-purple-400">FOLLOW ME</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="https://github.com/roshanichaudhari738" className="text-gray-400 hover:text-white">
              <AiFillGithub/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram/>
            </a>
            <a href="https://www.linkedin.com/in/roshani-c-553a48225?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDPtuDPFISJ6umnNltlSc7Q%3D%3D" className="text-gray-400 hover:text-white">
              <FaLinkedin/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
    
  // <footer className=' container dark:bg-gray-100 dark:text-gray-600'>
  //   <div className='mx-0 flex flex-wrap items-center justify-center space-y-4 sm:justify-between sm:space-y-0'>
  //     <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
  //       <div className='mb-4 md:mb-0'>
  //         <span className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Portfolio</span>
  //         <p>@Roshani's Portfolio.com</p>
  //       </div>
  //       <div>
  //          <h2 >PROJECT</h2>
  //          <ul>
  //            <li>Web Design</li>
  //            <li>Web Development</li>
  //            <li>E-commerce Website</li>
  //          </ul>
  //        </div>
  //        <div>
  //          <h2 >CONTACT</h2>
  //          <p>Email: roshchau738@gmail.com</p>
  //          <p>Phone: +91 113-456-7890</p>
  //        </div>
  //        <div>
  //          <h2>FOLLOW ME</h2>
  //          <div>
  //            <a href="https://github.com/roshanichaudhari738" >
  //              <AiFillGithub/>
  //           </a>
  //            <a href="#">
  //             <FaInstagram/>
  //            </a>
  //            <a href="https://www.linkedin.com/in/roshani-c-553a48225?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDPtuDPFISJ6umnNltlSc7Q%3D%3D" className="text-gray-400 hover:text-white">
  //              <FaLinkedin/>
  //            </a>
  //          </div>
  //          </div>
  //         </div>
  //     </div>
  // </footer>

  



  );
}

export default Footer;