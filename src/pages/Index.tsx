
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';

const Index = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white dark:bg-gray-900"
      >
        <Hero />
        <Skills />
        <Experience />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
