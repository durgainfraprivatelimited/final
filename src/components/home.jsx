// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import Footer from './footer'
import { useNavigate } from 'react-router-dom'
function Home() {
  let navigate = useNavigate()
  const gotoserver = () => {
    navigate('/service')
  }
  return (
    <div>


      <div className="relative w-full h-64">
        {/* Background Image */}
        <img
          src="https://www.colliers.com/-/media/images/colliers/asia/india/1536x1040_08022024.ashx?bid=f4a70a56b86f4e79bf7fe4d4234900cb"
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Text Overlay */}

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white font-bold">Welcome</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white font-bold">To</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white font-bold">Shri Vagdevi Constructions</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">GSTN: 29FNNPR5812J1Z8</h2>
      </div>
      {/* Visiting card */}
      <div className='cardddv'>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <a href="https://www.shrivagdeviconstructions.com/service">  <img
                src="/image/visiting1.jpg"
                alt="Residential Construction"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
</a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/image/visiting2.jpg"
                alt="Commercial Construction"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />

            </div>




          </div>
        </div>


      </div>
      {/* Visting card compleate */}
      <div className='carddd'>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/image/residential.jpg"
                alt="Residential Construction"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Residential Construction</h2>
                <p className="text-gray-600 leading-relaxed">
                  Building your dream home with precision and care. Our residential construction
                  services cover everything from custom homes to renovations, ensuring quality
                  craftsmanship and attention to detail in every project.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/image/commercial.jpg"
                alt="Commercial Construction"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Commercial Construction</h2>
                <p className="text-gray-600 leading-relaxed">
                  Delivering excellence in commercial building projects. From office complexes
                  to retail spaces, we bring your commercial vision to life with superior
                  construction standards and timely execution.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/image/Interior.jpg"
                alt="Interior Design & Renovation"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Interior Design & Renovation</h2>
                <p className="text-gray-600 leading-relaxed">
                  Transform your space with our expert interior renovation services.
                  We specialize in modern designs, custom solutions, and high-quality
                  renovations that enhance both aesthetics and functionality.
                </p>
              </div>
            </div>


          </div>
        </div>


      </div>

      {/* Contact and Appointment Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            For inquiries or to schedule an appointment, please contact us:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Email: shrivagdeviconstructions@gmail.com</li>
            <li>Phone: +91 9741406259</li>
            <li>Phone: +91 8971552132</li>
            <li>Phone: +91 7624896303</li>
          </ul>
          <p>
            You can also fill out our <a href="/contact" className="text-blue-500 hover:underline">contact form</a> or <a href="/appointments" className="text-blue-500 hover:underline">schedule an appointment</a> online.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
