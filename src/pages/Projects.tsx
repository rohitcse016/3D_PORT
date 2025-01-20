import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ProjectCard } from '../components/cards/ProjectCard';
import { fadeIn } from '../utils/animations';
import { FloatingParticles } from '../components/background/FloatingParticles';
import { GradientText } from '../components/effects/GradientText';

export const Projects = () => {
  return (
    <div className="min-h-screen px-4 relative">
      <FloatingParticles />
      <h2 className="text-4xl font-bold text-center">
                  <GradientText text="Projects" />
                </h2>
      <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
      <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </div>
     
    </div>
  );
};