import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Project() {
    useEffect(() => {
      AOS.init({duration:1000});
     },[])
  return (
    <div id='Project' className='p-20 flex flex-col items-center justify-center'>
        <h1  data-aos = "fade-right" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Project</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20'>
        <h2 data-aos = "fade-up" className='text-[26px] flex items-center justify-center text-center font-semibold text-white rounded-3xl rounded-br-3xl h-36 w-52 border-2 border-fuchsia-800 b_glow'>Food Ordering Website</h2>
        <h2 data-aos = "fade-down" className='text-[26px] flex items-center justify-center text-center font-semibold text-white rounded-3xl rounded-br-3xl h-36 w-52 border-2 border-fuchsia-800 b_glow'>E-Commerce Website</h2>
        <h2 data-aos = "fade-up" className='text-[26px] flex items-center justify-center font-semibold text-white rounded-3xl rounded-br-3xl h-36 w-52 border-2 border-fuchsia-800 b_glow'>Portfolio</h2> 
        <h2 data-aos = "fade-down" className='text-[26px] flex items-center justify-center text-center font-semibold text-white rounded-3xl rounded-br-3xl h-36 w-52 border-2 border-fuchsia-800 b_glow'>To-Do List Web Application</h2>          
        </div>
    </div>
  )
}

export default Project