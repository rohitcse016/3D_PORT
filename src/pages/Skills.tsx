import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';
import { FloatingParticles } from '../components/background/FloatingParticles';

const SkillCategory = ({ title, skills, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    className="space-y-4 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg"
  >
    <h3 className="text-2xl font-semibold text-blue-300">{title}</h3>
    <ul className="grid grid-cols-2 gap-2 mt-4">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="flex items-center gap-2 text-gray-300 text-sm group"
        >
          <span className="w-3 h-3 bg-purple-500 rounded-full group-hover:scale-125 transition-transform" />
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

export const Skills = () => {
  const { skills } = portfolioData;

  return (
    <div className="min-h-screen  px-4 max-w-6xl mx-auto relative">
      {/* Floating Particles Background */}
        <FloatingParticles />
      <div className="relative z-10 space-y-12">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Skills & Expertise
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Languages" skills={skills.languages} delay={0.2} />
          <SkillCategory title="Frontend" skills={skills.frontend} delay={0.3} />
          <SkillCategory title="Backend" skills={skills.backend} delay={0.4} />
          <SkillCategory title="Databases" skills={skills.databases} delay={0.5} />
          <SkillCategory
            title="Tools & Platforms"
            skills={[...skills.tools, ...skills.cloud]}
            delay={0.6}
          />
          <SkillCategory title="Concepts" skills={skills.concepts} delay={0.7} />
        </div>
      </div>
    </div>
  );
};
