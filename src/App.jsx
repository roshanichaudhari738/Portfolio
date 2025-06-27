import Home from './componenets/home'
import Navbar from './componenets/navbar'
import Banner from './componenets/banner'
import About from './componenets/About'
import Skills from './componenets/Skills'
import Project from './componenets/Project'
import Contact from './componenets/Contact'
import Footer from './componenets/Footer'
import { useEffect, useState } from 'react'
import {RotatingLines} from 'react-loader-spinner'
import Education from './componenets/Education'

function App() {
  // const [loading,setLoading] =useState(false);
  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //   setLoading(false)
  //   },2000)
  // },[])

  return (
    <>
    
     {/* {
      loading ?
      <div className='bg-white h-[100vh] flex justify-center items-center'>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="#F00000"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
       </div>
      :  */}
      <div className='overflow-x-hidden bg-black'>
          <Navbar/>
          {/* <Banner/> */}
          <About/>
          <Education/>
          <Skills/>
          <Project/>
          <Contact/>
          <div className='w-screen overflow-hidden'>
            <Footer/>
          </div>          
     </div>
{/* } */}
    </>
  )
}

export default App