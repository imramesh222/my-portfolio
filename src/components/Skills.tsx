import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon?: string;
  category: 'language' | 'framework' | 'tool';
}

const skills: Skill[] = [
  { name: 'Python', level: 95, category: 'language' },
  { name: 'JavaScript', level: 80, category: 'language' },
  { name: 'SQL', level: 85, category: 'language' },
  { name: 'FastAPI', level: 90, category: 'framework' },
  { name: 'Django', level: 90, category: 'framework' },
  { name: 'SQLAlchemy', level: 85, category: 'framework' },
  { name: 'Pydantic', level: 85, category: 'framework' },
  { name: 'React.js', level: 75, category: 'framework' },
  { name: 'Tailwind CSS', level: 80, category: 'framework' },
  { name: 'Bootstrap', level: 85, category: 'framework' },
  { name: 'Git', level: 90, category: 'tool' },
  { name: 'Docker', level: 80, category: 'tool' },
  { name: 'PostgreSQL', level: 85, category: 'tool' },
  { name: 'VS Code', level: 90, category: 'tool' },
];

const SkillBar: React.FC<{ skill: Skill, index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium text-slate-800 dark:text-white">{skill.name}</span>
        <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
      </div>
      <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          className={`h-full rounded-full ${
            skill.category === 'language' 
              ? 'bg-blue-600 dark:bg-blue-500' 
              : skill.category === 'framework' 
                ? 'bg-purple-600 dark:bg-purple-500' 
                : 'bg-teal-600 dark:bg-teal-500'
          }`}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const SkillCard: React.FC<{ title: string, skills: Skill[], color: string }> = ({ 
  title, 
  skills,
  color
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card p-6"
    >
      <h3 className={`text-xl font-bold mb-6 ${color}`}>{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const languages = skills.filter(skill => skill.category === 'language');
  const frameworks = skills.filter(skill => skill.category === 'framework');
  const tools = skills.filter(skill => skill.category === 'tool');

  return (
    <section id="skills" className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-24">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <SkillCard 
            title="Programming Languages" 
            skills={languages} 
            color="text-blue-600 dark:text-blue-400" 
          />
          
          <SkillCard 
            title="Frameworks & Libraries" 
            skills={frameworks} 
            color="text-purple-600 dark:text-purple-400" 
          />
          
          <SkillCard 
            title="Tools & Technologies" 
            skills={tools} 
            color="text-teal-600 dark:text-teal-400" 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;