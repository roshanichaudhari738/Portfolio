import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Education() {
    useEffect(() => {
          AOS.init({duration:1000});
         },[])
  return (
    <div id="education" class='p-20 flex flex-col items-center justify-center'>
        
      <div className=''>
        <div>
          <h2 data-aos = "fade-right" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Education</h2>
        </div>
        <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-24">
          <div data-aos = "fade-up" class="flex items-center justify-center font-semibold text-white rounded-3xl rounded-br-3xl h-56 w-96 border-2 border-fuchsia-800 b_glow">
            <div class="justify-center mx-6">
              <div class="degree-type">Masters Degree</div>
              <h3>Master of Computer Application (MCA)</h3>
              <div class="institution">
                <i class="fas fa-university"></i> Shramsadhana Bombay Trust, College of Engineering & Technology, Jalgaon
              </div>
              <div class="education-details">
                <div class="year">
                  <i class="fas fa-calendar-alt"></i> 2023 - 2025
                </div>
                <div class="grade"><i class="fas fa-star"></i> CGPA: 8.67</div>
              </div>
            </div>
          </div>
          <div data-aos = "fade-down" class="flex items-center justify-center font-semibold text-white rounded-3xl rounded-br-3xl h-56 w-96 border-2 border-fuchsia-800 b_glow">
            <div class="justify-center mx-6">
              <div class="degree-type">Bachelors Degree</div>
              <h3>Bachelor of Computer Application (BCA)</h3>
              <div class="institution">
                <i class="fas fa-university"></i> Dr. Annasaheb G. D. Bendale College, Jalgaon
              </div>
              <div class="education-details">
                <div class="year">
                  <i class="fas fa-calendar-alt"></i> 2020 - 2023
                </div>
                <div class="grade"><i class="fas fa-star"></i> CGPA: 9.60</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Education