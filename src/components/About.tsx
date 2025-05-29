import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, GraduationCap, Award, Languages } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 py-16 sm:py-24">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              I am a dedicated Python Developer with expertise in building robust backend systems and RESTful APIs. 
              My focus is on creating efficient, scalable, and maintainable software solutions using 
              modern frameworks like FastAPI and Django.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              With a strong foundation in database design, API development, and security implementation, 
              I strive to write clean, well-tested code that solves real business problems.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              I'm passionate about continuous learning and staying up-to-date with the latest 
              technologies and best practices in software development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                <div>
                  <h3 className="font-bold">Education</h3>
                  <p>BCA (2020-2024)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Languages className="text-blue-600 dark:text-blue-400" size={24} />
                <div>
                  <h3 className="font-bold">Languages</h3>
                  <p>English, Nepali, Hindi</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-600">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Key Qualifications
              </h3>
              
              <ul className="space-y-4">
                {[
                  'Backend Development with Python, FastAPI, and Django',
                  'Database Design and ORM (SQLAlchemy, Django ORM)',
                  'RESTful API Design and Implementation',
                  'Authentication & Authorization Systems',
                  'Docker Containerization',
                  'Version Control with Git',
                  'Frontend Development with React'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-green-500 mt-1 shrink-0" size={20} />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-600">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                  <Award size={20} />
                  Education
                </h3>
                <div className="ml-2">
                  <h4 className="font-bold text-slate-800 dark:text-white">Bachelor in Computer Application</h4>
                  <p className="text-slate-700 dark:text-slate-300">Pascal National College (TU)</p>
                  <p className="text-slate-600 dark:text-slate-400">2020 - 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;