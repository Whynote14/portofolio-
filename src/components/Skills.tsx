import React from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  Monitor, 
  Users, 
  Target, 
  Heart, 
  Lightbulb,
  Server,
  Globe
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Docker', icon: Server },
    { name: 'Grafana', icon: Monitor },
    { name: 'Prometheus', icon: Database },
    { name: 'Cloud Computing', icon: Cloud },
    { name: 'DevOps', icon: Server },
    { name: 'HTML/CSS', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'Networking', icon: Globe },
  ];

  const softSkills = [
    { name: 'Creative', icon: Lightbulb },
    { name: 'Innovative', icon: Target },
    { name: 'Cooperative', icon: Users },
    { name: 'Collaborative', icon: Users },
    { name: 'Leadership', icon: Target },
    { name: 'Empathy', icon: Heart },
    { name: 'Communication', icon: Users },
    { name: 'Focus', icon: Target },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical abilities and soft skills
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-white transition-all duration-200">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                        <skill.icon className="w-5 h-5 text-black" />
                      </div>
                      <h4 className="font-semibold text-white">{skill.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Soft Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-white hover:bg-gray-800 transition-all duration-200">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                        <skill.icon className="w-5 h-5 text-black" />
                      </div>
                      <h4 className="font-semibold text-white">{skill.name}</h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-3">Key Strengths</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Fast learner with adaptability to new technologies</li>
                  <li>• Strong problem-solving and analytical thinking</li>
                  <li>• Excellent time management and organizational skills</li>
                  <li>• Ability to work under pressure and meet deadlines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;