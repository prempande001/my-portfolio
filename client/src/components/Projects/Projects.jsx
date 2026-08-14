import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { project } from '../../services/information';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import TiltCard from '../common/TiltCard';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(project);
  }, []);

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-black dark:to-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      {/* Section Header */}
      <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-600 dark:text-gray-300 mt-6 text-lg leading-relaxed"
        >
          Enterprise DevOps work delivered for critical banking platforms, one initiative at a time
        </motion.p>
      </div>

      {/* Each project gets its own full-width section */}
      <div className="max-w-6xl mx-auto space-y-20 sm:space-y-28">
        {projects.map((proj, index) => {
          const reversed = index % 2 === 1;
          const techList = proj.technologies ? proj.technologies.split(',').map((t) => t.trim()) : [];

          return (
            <motion.section
              key={proj.id ?? index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-14`}
            >
              {/* Image panel */}
              <div className="w-full lg:w-5/12 group">
                <TiltCard className="relative rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700 shadow-xl bg-gray-100 dark:bg-gray-900">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-56 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {proj.status && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-md text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700/50">
                      {proj.status}
                    </span>
                  )}
                </TiltCard>
              </div>

              {/* Content panel */}
              <div className="w-full lg:w-7/12">
                {proj.client && (
                  <p className="text-xs sm:text-sm font-medium tracking-wide uppercase text-cyan-600 dark:text-cyan-400 mb-2">
                    {proj.client}
                  </p>
                )}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {proj.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {proj.description}
                </p>

                {proj.highlights && proj.highlights.length > 0 && (
                  <ul className="space-y-2.5 mb-6">
                    {proj.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 size={16} className="mt-0.5 text-cyan-500 dark:text-cyan-400 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {techList.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-7">
                    {techList.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-black/[0.04] dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={proj.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gradient-to-r from-cyan-700 to-cyan-600 hover:from-cyan-600 hover:to-cyan-500 text-white px-5 py-2.5 rounded-md font-medium flex items-center justify-center gap-2 text-sm transition-all duration-300 shadow hover:shadow-md"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={proj.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white px-5 py-2.5 rounded-md font-medium flex items-center justify-center gap-2 text-sm transition-all duration-300 shadow hover:shadow-md"
                  >
                    <Github size={16} />
                    Source
                  </motion.a>
                </div>

                {proj.notice && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-5 italic">
                    {proj.notice}
                  </p>
                )}
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Subtle Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full" />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #4fd1c5 1px, transparent 1px),
                            linear-gradient(to bottom, #4fd1c5 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </div>
  );
}

export default Projects;
