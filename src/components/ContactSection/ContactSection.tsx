
import React, { useEffect } from 'react';
import { Mail, Github, Linkedin, CheckCircle } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useContactForm } from '../../hooks/useContactForm';
import { Button } from '../UI/Button';

export const ContactSection: React.FC = () => {
  const { isDark } = useTheme();
  const { formData, isSubmitting, isSubmitted, handleFormChange, handleSubmit, setIsSubmitted } = useContactForm();

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, setIsSubmitted]);

  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    } relative overflow-hidden`}>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          } animate-fade-in-up`}>
            Let's Work Together
          </h2>
          <p className={`text-lg md:text-xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          } max-w-2xl mx-auto animate-fade-in-up animation-delay-200`}>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="flex items-center space-x-4 group">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-200">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Email
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  alex.johnson@email.com
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="#"
                className={`p-4 rounded-full transition-all duration-200 hover:scale-110 ${
                  isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className={`p-4 rounded-full transition-all duration-200 hover:scale-110 ${
                  isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Message Sent!
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:scale-105 ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:scale-105 ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:scale-105 resize-none ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full hover:shadow-lg hover:shadow-blue-500/25"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
