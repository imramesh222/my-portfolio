import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  points: string[];
  image: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: 'docmint',
    title: 'DocMint',
    description: 'A document management system with advanced user authentication and role-based access control.',
    technologies: ['FastAPI', 'SQLAlchemy', 'Pydantic', 'PostgreSQL', 'Liquibase'],
    points: [
      'Developed a FastAPI-based backend for efficient document management and user authentication.',
      'Designed and implemented SQLAlchemy models for structured database interactions.',
      'Utilized Pydantic for data validation and serialization, ensuring clean API request/response handling.',
      'Integrated Liquibase for database version control and seamless schema migrations.',
      'Managed and monitored PostgreSQL database using pgAdmin, ensuring data consistency and integrity.',
      'Implemented role-based access control (RBAC) to restrict user permissions for secure document management.'
    ],
    image: 'https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/docmintai/docmint-service'
  },
  {
    id: 'ecom-nepal',
    title: 'Ecom Nepal',
    description: 'An e-commerce platform with RESTful API built with Django REST Framework.',
    technologies: ['Django', 'Django REST Framework', 'JWT Authentication', 'Postman'],
    points: [
      'Built a RESTful API using Django REST Framework (DRF).',
      'Implemented CRUD operations for managing resources.',
      'Added JWT/Token authentication for secure access.',
      'Tested API endpoints using Postman.'
    ],
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/imramesh222/EcomNepal'
  }
];

const ProjectModal: React.FC<{ 
  project: Project | null;
  onClose: () => void;
}> = ({ project, onClose }) => {
  if (!project) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map(tech => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200 mb-3">Key Features:</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300 mb-6">
            {project.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          
          <div className="flex gap-4 mt-6">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <Github size={18} />
                View Code
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard: React.FC<{ 
  project: Project; 
  onClick: () => void;
  index: number;
}> = ({ project, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group cursor-pointer hover:-translate-y-2"
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <p className="font-semibold">Click to view details</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map(tech => (
            <span 
              key={tech} 
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-300 rounded-full text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-24">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Selected Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default Projects;