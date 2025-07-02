import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Muhamad Zidane Al Huda</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Information Technology student passionate about web development, 
                programming, and digital innovation. Always eager to learn and 
                contribute to meaningful projects.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Experience', 'Education', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(`#${link.toLowerCase()}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">
                  <strong>Email:</strong> zidanemuhammad112@gmail.com
                </p>
                <p className="text-gray-300">
                  <strong>Phone:</strong> 087748395776
                </p>
                <p className="text-gray-300">
                  <strong>Location:</strong> Bogor, Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-700 pt-8">
            {/* Made with Love */}
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center text-sm text-gray-300 mb-4 sm:mb-0">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 mx-1" />
                <span>using</span>
                <Code className="w-4 h-4 text-white mx-1" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-yellow-600 mx-1" />
              </div>
              
              {/* Copyright */}
              <div className="text-sm text-gray-300">
                © {currentYear} Muhamad Zidane Al Huda. All rights reserved.
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-400">
                Built with React, TypeScript, Tailwind CSS, and Lucide Icons
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;