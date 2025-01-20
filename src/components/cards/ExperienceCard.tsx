import { motion } from 'framer-motion';

interface ExperienceCardProps {
  experience: {
    company: string;
    position: string;
    location: string;
    duration: string;
    highlights: string[];
  };
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900/50 p-6 rounded-lg"
    >
      <h3 className="text-xl font-bold">{experience.position}</h3>
      <h4 className="text-lg text-blue-400">{experience.company}</h4>
      <p className="text-gray-400">{experience.duration} | {experience.location}</p>
      <ul className="mt-4 space-y-2">
        {experience.highlights.map((highlight, index) => (
          <li key={index} className="text-gray-300">• {highlight}</li>
        ))}
      </ul>
    </motion.div>
  );
};