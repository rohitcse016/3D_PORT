import { motion } from 'framer-motion';

interface SkillSectionProps {
  title: string;
  skills: string[];
}

export const SkillSection = ({ title, skills }: SkillSectionProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900/50 p-6 rounded-lg"
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};