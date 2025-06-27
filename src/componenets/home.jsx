import React from "react";
import Navbar from "./navbar";
function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section with blue background */}
      <section>
        <div className="bg-blue-100 text-gray-800 p-8">
          
          <Navbar/>
          <h1 className="text-4xl font-bold text-center mt-8">Roshani Chaudhari</h1>
          
          <p className="mt-4 text-lg max-w-2xl mx-auto text-center">
            Passionate about Front-End Developer with a strong foundation in HTML, CSS, and JavaScript.
            Eager to apply technical skills to create engaging and user-friendly web interfaces. Proficient in
            responsive design and cross browser compatibility. Seeking an entry-level position to contribute to
            innovative projects and gain hands-on experience and familiar with Python.
          </p>
          
          <div className="flex justify-center mt-6">
            <button 
              type="button" 
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Contact
            </button>
          </div>
        </div>
      </section>

      
      
    </div>
  );
}

export default Home;