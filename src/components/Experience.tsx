import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface Job {
  company: string;
  position: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

const jobs: Job[] = [
  {
    company: 'TreeLeaf Technologies Pvt. Ltd',
    position: 'Python Developer',
    location: 'Shankhamul-11, Lalitpur',
    duration: 'Dec 2023 - Present',
    responsibilities: [
      'API Development: Developed a FastAPI-based backend for efficient document management and user authentication.',
      'Database Management: Designed and implemented SQLAlchemy models for structured database interactions, ensuring optimized queries and data integrity.',
      'Data Validation: Utilized Pydantic for data validation and serialization, enforcing clean API request/response handling.',
      'Version Control: Integrated Liquibase for seamless database schema migrations and version control.',
      'Database Administration: Managed and monitored the PostgreSQL database using pgAdmin, ensuring reliability and performance.',
      'Security & Access Control: Implemented role-based access control (RBAC) to restrict user permissions for secure document management.'
    ]
  },
  {
    company: 'Evolve IT Hub Nepal',
    position: 'Fullstack Developer',
    location: 'Lagankhel, Lalitpur',
    duration: 'May 2023 - Dec 2023',
    responsibilities: [
      'Version Control: Managed database migrations using Django Migrations for schema updates.',
      'Database Management: Designed and implemented Django ORM models for structured database interactions.',
      'Team Leadership: Collaborated with senior developers, leveraging mentorship opportunities to improve both technical and professional skills.'
    ]
  }
];

const JobCard: React.FC<{ job: Job, index: number }> = ({ job, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-6 relative overflow-visible"
    >
      {index === 0 && (
        <div className="absolute -top-3 -right-3 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
          Current
        </div>
      )}
      
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
        {job.position}
      </h3>
      
      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
        {job.company}
      </h4>
      
      <div className="flex flex-wrap gap-4 mb-4 text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{job.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <Briefcase size={16} />
          <span>{job.location}</span>
        </div>
      </div>
      
      <div className="mt-4">
        <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Responsibilities:</h5>
        <ul className="space-y-2 list-disc pl-5 text-slate-600 dark:text-slate-400">
          {job.responsibilities.map((responsibility, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
            >
              {responsibility}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-white dark:bg-slate-800 py-16 sm:py-24">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {jobs.map((job, index) => (
              <div key={index} className="md:grid md:grid-cols-2 md:gap-8 relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full z-10 hidden md:block"></div>
                
                {index % 2 === 0 ? (
                  <>
                    <div className="md:pr-12 mb-8 md:mb-0">
                      <JobCard job={job} index={index} />
                    </div>
                    <div className="md:pl-12 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="md:pr-12 hidden md:block"></div>
                    <div className="md:pl-12">
                      <JobCard job={job} index={index} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;