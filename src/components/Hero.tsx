import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-700/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/20 dark:bg-purple-700/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container z-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <h2 className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400 mb-2">
            Hello, I'm
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
            Ramesh Rawat
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6 h-12">
            <TypeAnimation
              sequence={[
                'Python Developer',
                1000,
                'Backend Specialist',
                1000,
                'FastAPI Expert',
                1000,
                'Django Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-purple-600 dark:text-purple-400"
            />
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Specialized in building robust backend systems and APIs with Python, 
            FastAPI, and Django. Passionate about creating efficient, scalable,
            and maintainable software solutions.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
            <a 
              href="mailto:imrameshrawat@gmail.com" 
              className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
              <span>imrameshrawat@gmail.com</span>
            </a>
            <a 
              href="https://github.com/imramesh222" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/ramesh-rawat-065753318" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <MapPin size={20} />
              <span>Satdobato, Lalitpur</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn-primary cursor-pointer"
            >
              Contact Me
            </Link>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/mypic.jpeg"
                alt="Ramesh Rawat"
                className="w-full h-full object-cover rounded-full shadow-lg">
              </img>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;