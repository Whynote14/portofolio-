import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageCircle
} from 'lucide-react';
import { SiGoogledrive } from 'react-icons/si';
import { FaGitlab, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '087748395776',
      href: 'tel:+62877483957776'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'zidanemuhammad112@gmail.com',
      href: 'mailto:zidanemuhammad112@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Bedahan RT 001 RW 001, Kelurahan Pabuaran, Kecamatan Cibinong, Kabupaten Bogor',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: SiGoogledrive,
      name: 'Google Drive',
      href: 'https://drive.google.com/drive/folders/1fD50OkyUEwnNYZ77T1urvBmx5lnxuKLv?usp=drive_link',
      color: 'hover:text-blue-600'
    },
    {
      icon: FaGitlab,
      name: 'GitLab',
      href: 'https://gitlab.com/dashboard/projects',
      color: 'hover:text-orange-600'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      href: 'https://github.com/Whynote14',
      color: 'hover:text-gray-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">Contact Information</h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">{item.label}</h4>
                      {item.href !== '#' ? (
                        <a href={item.href} className="text-gray-600 hover:text-black transition-colors duration-200">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-black mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 transition-all duration-200 hover:border-black ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 bg-black rounded-lg p-6">
                <h4 className="font-semibold text-white mb-2">Currently Available</h4>
                <p className="text-gray-300 text-sm">
                  I'm actively looking for internship opportunities and part-time positions in web development and IT. Feel free to reach out!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">Subject</label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
