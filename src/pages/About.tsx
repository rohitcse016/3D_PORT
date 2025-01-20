import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { AnimatedSphere } from '../components/3d/AnimatedSphere';
import { FloatingParticles } from '../components/background/FloatingParticles';
import { GradientText } from '../components/effects/GradientText';

export const About = () => {
  const { education, certifications } = portfolioData;

  return (
    <div className="min-h-screen  px-4 relative">
      <FloatingParticles />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="absolute top-0 right-0 w-full h-96 opacity-30">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <Float speed={2} rotationIntensity={2} floatIntensity={2}>
              <AnimatedSphere />
            </Float>
          </Canvas>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">
              <GradientText text="Education Journey" />
            </h2>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                      'linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-blue-300">{edu.institution}</h3>
                  <p className="text-lg text-purple-300">{edu.degree}</p>
                  <p className="text-gray-400">{edu.duration}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-300">Relevant Coursework:</h4>
                    <ul className="mt-2 grid grid-cols-2 gap-2">
                      {edu.coursework.map((course, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-gray-400 text-sm flex items-center gap-2"
                        >
                          <span className="w-2 h-2 bg-purple-500 rounded-full" />
                          {course}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">
              <GradientText text="Certifications" />
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      background: [
                        'linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
                        'linear-gradient(to right, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                  />
                  <p className="relative z-10 text-gray-300">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};