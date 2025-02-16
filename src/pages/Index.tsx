
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

const Index = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hero />
        <Skills />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
