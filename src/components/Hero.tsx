
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GithubIcon, LinkedinIcon, Mail, Code, Laptop } from 'lucide-react';
import { ShinyButton } from './ui/ShinyButton';

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

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center px-4 relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/50 dark:to-black pointer-events-none" />
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div 
          variants={childVariants}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Code className="w-6 h-6 text-blue-500" />
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
            Software Developer
          </span>
          <Laptop className="w-6 h-6 text-blue-500" />
        </motion.div>
        
        <motion.h1
          variants={childVariants}
          className="text-4xl md:text-6xl font-bold mb-6 animated-gradient-text"
        >
          Sanyam Nahta
        </motion.h1>
        
        <motion.p
          variants={childVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          B.Tech in Electrical Engineering from NIT Kurukshetra • Full Stack Developer • 
          Creating elegant solutions through modern web technologies
        </motion.p>
        
        <motion.div
          variants={childVariants}
          className="flex items-center justify-center space-x-4"
        >
          <motion.a
            href="mailto:nahtasanyam@gmail.com"
            whileHover="hover"
            variants={iconVariants}
          >
            <ShinyButton className="shine-effect">
              <Mail className="w-6 h-6" />
            </ShinyButton>
          </motion.a>
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
            variants={iconVariants}
          >
            <ShinyButton className="shine-effect">
              <GithubIcon className="w-6 h-6" />
            </ShinyButton>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
            variants={iconVariants}
          >
            <ShinyButton className="shine-effect">
              <LinkedinIcon className="w-6 h-6" />
            </ShinyButton>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
