import React from 'react';
import { Briefcase, Calendar, MapPin, Users, Car, Coffee, Printer } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Internship - Data Management",
      company: "PT Telekomunikasi Indonesia",
      period: "October - December 2021",
      location: "Indonesia",
      icon: Users,
      description: "Gained hands-on experience in data management processes and telecommunications industry operations.",
      highlights: [
        "Worked with data management systems",
        "Learned about telecommunications infrastructure",
        "Collaborated with professional teams",
        "Developed understanding of corporate workflows"
      ]
    },
    {
      title: "Production Assistant",
      company: "Printing Services",
      period: "July - August 2024",
      location: "Local Business",
      icon: Printer,
      description: "Involved in book printing production processes, ensuring quality control and timely delivery.",
      highlights: [
        "Managed production workflows",
        "Quality control and assurance",
        "Worked with printing equipment",
        "Met tight deadlines consistently"
      ]
    },
    {
      title: "Barista & Cashier",
      company: "Coffee Event Services",
      period: "2025",
      location: "Event Services",
      icon: Coffee,
      description: "Provided excellent customer service in coffee events, handling both beverage preparation and transactions.",
      highlights: [
        "Customer service excellence",
        "Cash handling and transactions",
        "Coffee preparation skills",
        "Event coordination support"
      ]
    },
    {
      title: "Gojek Driver",
      company: "Gojek",
      period: "2025",
      location: "Bogor Area",
      icon: Car,
      description: "Provided reliable transportation services as a mobile driver, focusing on customer satisfaction and safety.",
      highlights: [
        "Excellent driving record",
        "Customer satisfaction focus",
        "Time management skills",
        "Navigation and route optimization"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My professional journey across different industries and roles
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Icon */}
                  <div className="absolute left-4 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <exp.icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Content */}
                  <div className="ml-20 bg-gray-50 border border-gray-200 rounded-lg p-6 w-full hover:border-black hover:shadow-lg transition-all duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-gray-700 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:text-right mt-2 sm:mt-0">
                        <div className="flex items-center text-gray-600 text-sm mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-black rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Gained Section */}
          <div className="mt-16 bg-black rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Skills Gained Through Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <Briefcase className="w-8 h-8 text-white mx-auto mb-2" />
                <h4 className="font-semibold text-white">Professional Skills</h4>
                <p className="text-gray-300 text-sm">Communication, teamwork, problem-solving</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                <h4 className="font-semibold text-white">Customer Service</h4>
                <p className="text-gray-300 text-sm">Client relations, service excellence</p>
              </div>
              <div className="text-center">
                <Calendar className="w-8 h-8 text-white mx-auto mb-2" />
                <h4 className="font-semibold text-white">Time Management</h4>
                <p className="text-gray-300 text-sm">Meeting deadlines, efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;