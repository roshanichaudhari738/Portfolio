import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Skills() {
    useEffect(() => {
      AOS.init({duration:1000});
     },[])
  return (
    <div id="Skills" className='p-20 flex flex-col items-center justify-center -mt-20'>
        <h1 data-aos = "fade-right" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Skills</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
            <h2 data-aos = "fade-up" className='text-[26px] flex items-center justify-center font-semibold text-white rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>HTML5</h2>
            <h2 data-aos = "fade-down" className='text-[26px] flex items-center justify-center font-semibold text-white rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>CSS3</h2>
            <h2 data-aos = "fade-up" className='text-[26px] flex items-center justify-center font-semibold text-white rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>JavaScript</h2>
            <h2 data-aos = "fade-down" className='text-[26px] flex items-center justify-center font-semibold text-white rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>BootStrap</h2>
            <h2 data-aos = "fade-up" className='text-[26px] flex items-center justify-center font-semibold text-white rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>React</h2>
            <h2 data-aos = "fade-down" className='text-[26px] flex items-center justify-center font-semibold text-white rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>Python</h2>
            <h2 data-aos = "fade-up" className='text-[26px] flex items-center justify-center font-semibold text-white rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>MySQL</h2>
            <h2 data-aos = "fade-up" className='text-[26px] flex items-center justify-center font-semibold text-white rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>Node JS</h2>
        </div>
    </div>
  )
}

export default Skills