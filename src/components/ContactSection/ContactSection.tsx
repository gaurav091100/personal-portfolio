
import React from 'react';
import { motion } from 'framer-motion';
import { useContactForm } from '../../hooks/useContactForm';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../ui/button';

export const ContactSection: React.FC = () => {
  const { isDark } = useTheme();
  const { formData, handleChange, handleSubmit, isSubmitting } = useContactForm();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section 
      id="contact" 
      className={`py-20 px-4 sm:px-6 lg:px-8 relative ${isDark ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent`}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
          >
            I'm always open to discussing new opportunities and interesting projects.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20"
            >
              <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>Email</h3>
                <p className="text-blue-600 font-medium">gaurav.suthar@email.com</p>
              </div>
            </motion.div>
            
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
            {['name', 'email'].map((field) => (
              <motion.div
                key={field}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <label
                  htmlFor={field}
                  className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder={field === 'name' ? 'Your Name' : 'your.email@example.com'}
                />
              </motion.div>
            ))}
            
            <motion.div whileHover={{ scale: 1.02 }}>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                placeholder="Tell me about your project..."
              />
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};
