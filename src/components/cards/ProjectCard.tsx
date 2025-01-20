import { motion } from 'framer-motion';
import { FlipCard } from './FlipCard';

interface ProjectCardProps {
  project: {
    title: string;
    technologies: string[];
    description: string;
    highlights: string[];
  };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const Front = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/10"
    >
      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {project.title}
      </h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-gray-300">{project.description}</p>
    </motion.div>
  );

  const Back = (
    <div className="h-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/10">
      <h4 className="text-xl font-semibold mb-4 text-purple-300">Highlights</h4>
      <ul className="space-y-2">
        {project.highlights.map((highlight, index) => (
          <li key={index} className="text-gray-300 flex items-start gap-2">
            <span className="text-purple-400">•</span>
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="h-[400px]">
      <FlipCard front={Front} back={Back} />
    </div>
  );
};