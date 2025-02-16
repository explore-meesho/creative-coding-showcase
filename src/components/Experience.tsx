
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MagicCard } from './ui/MagicCard';

const experiences = [
  {
    title: "B.Tech in Electrical Engineering",
    company: "National Institute of Technology, Kurukshetra",
    period: "2019-2023",
    description: "CGPA: 9.36/10.0",
  },
  {
    title: "Full Stack Developer",
    company: "Projects & Experience",
    period: "2020-Present",
    description: "Developed modern web applications using React.js, Node.js, and related technologies",
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience & Education</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <MagicCard className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-200">{exp.description}</p>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
