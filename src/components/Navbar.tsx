import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const NavLink: React.FC<{
  to: string;
  title: string;
  onClick?: () => void;
}> = ({ to, title, onClick }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className="nav-link cursor-pointer px-4 py-2"
    activeClass="active"
    onClick={onClick}
  >
    {title}
  </Link>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="font-bold text-xl sm:text-2xl text-blue-600 dark:text-blue-400">
              Ramesh<span className="text-purple-600 dark:text-purple-400">.dev</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLink to="home" title="Home" />
            <NavLink to="about" title="About" />
            <NavLink to="skills" title="Skills" />
            <NavLink to="experience" title="Experience" />
            <NavLink to="projects" title="Projects" />
            <NavLink to="contact" title="Contact" />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-slate-800 shadow-md"
        >
          <div className="flex flex-col py-4 space-y-2 px-4">
            <NavLink to="home" title="Home" onClick={closeMenu} />
            <NavLink to="about" title="About" onClick={closeMenu} />
            <NavLink to="skills" title="Skills" onClick={closeMenu} />
            <NavLink to="experience" title="Experience" onClick={closeMenu} />
            <NavLink to="projects" title="Projects" onClick={closeMenu} />
            <NavLink to="contact" title="Contact" onClick={closeMenu} />
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;