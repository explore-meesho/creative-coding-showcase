
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-4xl w-full text-center">
        <motion.span
          variants={childVariants}
          className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4"
        >
          Software Developer
        </motion.span>
        
        <motion.h1
          variants={childVariants}
          className="text-4xl md:text-6xl font-bold mb-6 animated-gradient-text"
        >
          Sanyam Nahta
        </motion.h1>
        
        <motion.p
          variants={childVariants}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Creating elegant solutions through code. Specialized in React, Node.js, and modern web technologies.
        </motion.p>
        
        <motion.div
          variants={childVariants}
          className="flex items-center justify-center space-x-4"
        >
          <a
            href="mailto:nahtasanyam@gmail.com"
            className="shine-effect p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="shine-effect p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="shine-effect p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
