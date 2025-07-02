import React from 'react';
import { ChevronDown, MapPin, Calendar, User } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="img/foto.jpg"
                alt="Muhamad Zidane Al Huda"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Muhamad Zidane
            <span className="block text-gray-300">Al Huda</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-400 mb-6">
            Information Technology Student & Web Developer
          </p>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about technology, programming, and digital innovation. 
            Currently studying at Sekolah Tinggi Teknologi Terpadu Nurul Fikri.
          </p>

          {/* Personal Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-gray-600">
              <MapPin className="w-5 h-5 text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-semibold text-white">Bogor, Indonesia</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-gray-600">
              <Calendar className="w-5 h-5 text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Born</p>
              <p className="font-semibold text-white">July 28, 2004</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-gray-600">
              <User className="w-5 h-5 text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Status</p>
              <p className="font-semibold text-white">Student</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Learn More About Me
            <ChevronDown className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;