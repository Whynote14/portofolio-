import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationHistory = [
    {
      level: "Higher Education",
      institution: "Sekolah Tinggi Teknologi Terpadu Nurul Fikri",
      period: "2022 - Present",
      status: "Currently in Semester 5",
      location: "Jakarta, Indonesia",
      field: "Information Technology",
      description: "Pursuing advanced studies in Information Technology with focus on programming, networking, and digital systems.",
      achievements: [
        "Maintaining good academic performance",
        "Active participation in technology projects",
        "Developing expertise in modern IT practices"
      ]
    },
    {
      level: "Vocational High School",
      institution: "SMK Mekanik Cibinong",
      period: "2019 - 2022",
      status: "Graduated",
      location: "Cibinong, Bogor",
      field: "Mechanical Engineering",
      description: "Completed vocational education in mechanical engineering, gaining practical skills and technical knowledge.",
      achievements: [
        "Successfully completed mechanical engineering program",
        "Gained hands-on technical experience",
        "Developed problem-solving skills"
      ]
    },
    {
      level: "Junior High School",
      institution: "SMP Negeri 12 Depok",
      period: "2016 - 2019",
      status: "Graduated",
      location: "Depok, West Java",
      field: "General Education",
      description: "Completed junior high school education with focus on building strong academic foundation.",
      achievements: [
        "Solid academic foundation",
        "Active in school activities",
        "Developed interest in technology"
      ]
    },
    {
      level: "Elementary School",
      institution: "SD Negeri 1 Cilodong",
      period: "2010 - 2016",
      status: "Graduated",
      location: "Cilodong, Depok",
      field: "Primary Education",
      description: "Completed primary education, developing fundamental learning skills and academic curiosity.",
      achievements: [
        "Strong academic foundation",
        "Early interest in learning",
        "Active participation in school activities"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              My educational journey from elementary school to higher education
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {educationHistory.map((edu, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Icon */}
                  <div className="absolute left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-black" />
                  </div>

                  {/* Content */}
                  <div className="ml-20 bg-gray-900 border border-gray-700 rounded-lg p-6 w-full hover:border-white transition-all duration-200">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-white text-black text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">
                            {edu.level}
                          </span>
                          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                            edu.status === 'Currently in Semester 5' 
                              ? 'bg-gray-700 text-white border border-gray-600' 
                              : 'bg-gray-800 text-gray-300'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {edu.institution}
                        </h3>
                        <p className="text-gray-300 font-semibold mb-2">
                          {edu.field}
                        </p>
                      </div>
                      <div className="flex flex-col lg:text-right mt-2 lg:mt-0">
                        <div className="flex items-center text-gray-400 text-sm mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-gray-300" />
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <div className="mt-16 bg-gray-900 border border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Current Academic Focus
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Core Subjects</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Programming & Software Development</li>
                  <li>• Computer Networks & Systems</li>
                  <li>• Database Management</li>
                  <li>• Web Development Technologies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Goals</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Complete degree with excellent grades</li>
                  <li>• Build strong technical portfolio</li>
                  <li>• Gain industry experience through internships</li>
                  <li>• Develop expertise in emerging technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;