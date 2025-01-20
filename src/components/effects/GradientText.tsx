import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  className?: string;
}

export const GradientText = ({ text, className = '' }: GradientTextProps) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ${className}`}
  >
    {text}
  </motion.span>
);