
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Laptop, Terminal, Server, Database, GitBranch } from 'lucide-react';

const skills = [
  { name: 'JavaScript', icon: Code, level: 90, color: 'text-yellow-500' },
  { name: 'React.js', icon: Laptop, level: 85, color: 'text-blue-500' },
  { name: 'Node.js', icon: Server, level: 80, color: 'text-green-500' },
  { name: 'Next.js', icon: Terminal, level: 75, color: 'text-black dark:text-white' },
  { name: 'Python', icon: Code, level: 70, color: 'text-blue-600' },
  { name: 'C/C++', icon: Database, level: 85, color: 'text-purple-500' },
  { name: 'Git', icon: GitBranch, level: 88, color: 'text-orange-500' },
  { name: 'MongoDB', icon: Database, level: 82, color: 'text-green-600' },
];

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon className={`w-6 h-6 ${skill.color}`} />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
