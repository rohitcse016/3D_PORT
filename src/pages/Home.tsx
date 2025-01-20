import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Text3D, Float, OrbitControls } from '@react-three/drei';
import { FloatingParticles } from '../components/background/FloatingParticles';
import { GradientText } from '../components/effects/GradientText';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    console.log('Font Path:', '/fonts/helvetiker_regular.typeface.json');
  }, []);
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      
      <div className="absolute inset-0 z-10">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            {/* <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={0.8}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
              position={[-2, 0, 0]}
            >
              Adi
              <meshNormalMaterial />
            </Text3D> */}
          </Float>
        </Canvas>
      </div>

      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"
        />
        
        <div className="max-w-4xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold">
              <GradientText text={portfolioData.personal.name} />
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              {portfolioData.personal.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12"
            >
              <Link
                to="/projects"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  animate={{
                    x: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              </Link>
              
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 text-white">
                  Contact Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                  animate={{
                    x: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};