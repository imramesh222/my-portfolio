import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Ramesh<span className="text-blue-400">.dev</span>
            </h3>
            <p className="text-slate-400 mb-6">
              Python Developer specializing in backend development with FastAPI and Django.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/imramesh222"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ramesh-rawat-065753318"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:imrameshrawat@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+9779868043277"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="text-blue-400 mt-1 shrink-0" size={18} />
                <span className="text-slate-400">imrameshrawat@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-blue-400 mt-1 shrink-0" size={18} />
                <span className="text-slate-400">+977 9868043277</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mt-1 shrink-0"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                <span className="text-slate-400">
                  Available for full-time roles and freelance projects
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>&copy; {currentYear} Ramesh Rawat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;