import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FloatingParticles } from '../components/background/FloatingParticles';
import { GradientText } from '../components/effects/GradientText';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { AnimatedSphere } from '../components/3d/AnimatedSphere';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <div className="min-h-screen px-4 relative">
      <FloatingParticles />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Background 3D Animation */}
        <div className="absolute top-0 right-0 w-full h-96 opacity-30">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <Float speed={2} rotationIntensity={2} floatIntensity={2}>
              <AnimatedSphere />
            </Float>
          </Canvas>
        </div>

        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-center">
            <GradientText text="Professional Experience" />
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-gradient-to-br from-green-900/30 to-indigo-900/30 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      'linear-gradient(to right, rgba(34, 197, 94, 0.1), rgba(99, 102, 241, 0.1))',
                      'linear-gradient(to right, rgba(99, 102, 241, 0.1), rgba(34, 197, 94, 0.1))',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-green-300">{exp.role}</h3>
                  <p className="text-lg text-indigo-300">{exp.company}</p>
                  <p className="text-gray-400">{exp.duration}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-300">Key Responsibilities:</h4>
                    <ul className="mt-2 grid gap-2">
                      {exp.responsibilities.map((task, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-gray-400 text-sm flex items-start gap-2"
                        >
                          <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                          {task}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};
