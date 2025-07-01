import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Education() {
    useEffect(() => {
          AOS.init({duration:1000});
         },[])
  return (
    <div id="education" className='p-20 flex flex-col items-center justify-center'>
        
      <div className=''>
        <div>
          <h2 data-aos = "fade-right" className='text-[52px] text-center font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Education</h2>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-24">
          <div data-aos = "fade-up" className="flex items-center justify-center font-semibold text-white rounded-3xl rounded-br-3xl h-auto w-full max-w-md mx-auto border-2 border-fuchsia-800 b_glow">
            <div className="justify-center mx-6">
              <div className="degree-type">Masters Degree</div>
              <h3>Master of Computer Application (MCA)</h3>
              <div className="institution">
                <i className="fas fa-university"></i> Shramsadhana Bombay Trust, College of Engineering & Technology, Jalgaon
              </div>
              <div className="education-details">
                <div className="year">
                  <i className="fas fa-calendar-alt"></i> 2023 - 2025
                </div>
                <div className="grade"><i className="fas fa-star"></i> CGPA: 8.67</div>
              </div>
            </div>
          </div>
          <div data-aos = "fade-down" className="flex items-center justify-center font-semibold text-white rounded-3xl rounded-br-3xl h-auto w-full max-w-md mx-auto border-2 border-fuchsia-800 b_glow">
            <div className="justify-center mx-6">
              <div className="degree-type">Bachelors Degree</div>
              <h3>Bachelor of Computer Application (BCA)</h3>
              <div className="institution">
                <i className="fas fa-university"></i> Dr. Annasaheb G. D. Bendale College, Jalgaon
              </div>
              <div className="education-details">
                <div className="year">
                  <i className="fas fa-calendar-alt"></i> 2020 - 2023
                </div>
                <div className="grade"><i className="fas fa-star"></i> CGPA: 9.60</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Education