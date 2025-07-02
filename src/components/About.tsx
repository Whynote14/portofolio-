import React from 'react';
import { Code, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Tech Enthusiast",
      description: "Passionate about programming, networking, and digital product development"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Experience working both independently and collaboratively in team environments"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on continuous learning and professional development in technology"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Enjoys tackling complex challenges and finding innovative solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn more about my background, interests, and what drives my passion for technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Description */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                My Story
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I am a final-year student with a strong interest in information technology 
                  and web development. My journey in tech began with curiosity about how 
                  digital systems work and has evolved into a passion for creating innovative solutions.
                </p>
                <p>
                  I have the ability to work both independently and as part of a team, 
                  adapting to different work environments and challenges. My interests span 
                  across programming, networking, and digital product development.
                </p>
                <p>
                  I am committed to continuous learning and staying updated with the latest 
                  technological trends. My goal is to contribute meaningfully to the tech 
                  industry while building products that make a positive impact.
                </p>
              </div>

              {/* Personal Details */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-black mb-2">Personal Details</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><strong>Age:</strong> 20 years old</li>
                    <li><strong>Height:</strong> 178 cm</li>
                    <li><strong>Weight:</strong> 65 kg</li>
                    <li><strong>Religion:</strong> Islam</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Languages</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><strong>Indonesian:</strong> Native</li>
                    <li><strong>English:</strong> Intermediate</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-gray-100 hover:border-black transition-all duration-200">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;