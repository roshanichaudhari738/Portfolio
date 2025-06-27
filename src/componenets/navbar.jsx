import React, { useState } from 'react'
import {Link} from 'react-scroll'
import {FaTimes} from 'react-icons/fa'
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
    const [click,setClick]=useState(false);
    const handleClick =() =>setClick(!click);


    const content = <>
    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 transition'>
        <ul className='text-center text-xl p-20'>
            <Link spy={true} smooth={true} to='Home'>
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Home</li>
            </Link>
            <Link spy={true} smooth={true} to='About'>
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>About</li>
            </Link>
            <Link spy={true} smooth={true} to='Project'>
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Project</li>
            </Link>
            <Link spy={true} smooth={true} to='Skills'>
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Skills</li>
            </Link>
            <Link spy={true} smooth={true}to='Contact'>
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Contact</li>
            </Link>
        </ul>
    </div>
    </>
  return (
   
    <nav className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent '>
        <div className='max-w h-10vh flex justify-between text-black sm:px-6 lg:py-5 px-20 py-4 flex-1 bg-white'>
            <div className='flex items-center justify-between'>
                <span className='text-3xl font-bold text-black-200 text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-center drop-shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer'>Roshani's Portfolio</span>
            </div>
            <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
                <div className='flex-10'>
                    <ul className='flex gap-8 mr-16 text-[18px] space-x-6'>
                        <Link spy={true} smooth={true} to='Home'>
                            <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to='About'>
                            <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>About</li>
                        </Link>
                        <Link spy={true} smooth={true} to='Project'>
                            <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Project</li>
                        </Link>
                        <Link spy={true} smooth={true} to='Skills'>
                            <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Skills</li>
                        </Link>
                        <Link spy={true} smooth={true} to='Contact'>
                            <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div>
                {click && content}
            </div>
            <button className='block sm:hidden cursor-pointer transtion' onClick={handleClick}>
                {click ? <FaTimes/> : <CiMenuFries />}
            </button>
        </div>
    </nav>
   
  );
};

export default Navbar