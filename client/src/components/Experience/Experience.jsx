import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import { experience as experienceData } from "../../services/information.js";

const stats = [
  { value: "80%", label: "Less Manual Deployment Effort" },
  { value: "99.9%", label: "Uptime Maintained" },
  { value: "20%", label: "Cloud Cost Reduction" },
  { value: "95%", label: "Deployment Success Rate" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Experience() {
  const [experience] = useState(experienceData);
  const projectRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openProjects = (idx) => {
    setCurrentIndex(idx);
    projectRef.current.showModal();
  };

  const closeProjects = () => {
    projectRef.current.close();
  };

  return (
    <div id="experience" className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/10 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
          4+ years building and running cloud infrastructure, CI/CD pipelines, and observability for critical banking systems.
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto space-y-8 sm:space-y-10">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="experience-card bg-gray-50/80 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:border-teal-500/50 dark:hover:border-teal-700/50 transition-colors duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-300">{exp.company}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-1">{exp.position}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">{exp.address}</p>
              </div>
              <span className="self-start px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs sm:text-sm font-medium whitespace-nowrap">
                {exp.startDate} – {exp.endDate}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              {exp.description}
            </p>

            {/* Metric stat tiles — only for the primary/current role */}
            {index === 0 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8"
              >
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800 rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
                      {s.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 mt-1">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Achievements */}
            {exp.achievements && (
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8"
              >
                {exp.achievements.map((point, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            )}

            <div className="flex flex-wrap gap-3">
              {exp.project?.length > 0 && (
                <button
                  className="bg-teal-600 text-white px-5 py-2.5 rounded-md hover:bg-teal-500 transition duration-300 text-sm sm:text-base font-medium"
                  onClick={() => openProjects(index)}
                >
                  View Projects
                </button>
              )}
              {exp.link && (
                <a
                  href={exp.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-5 py-2.5 rounded-md hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-300 transition duration-300 text-sm sm:text-base font-medium"
                >
                  {exp.link.label}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Projects Modal */}
      <dialog ref={projectRef} className="custom-dialog p-4 sm:p-6 rounded-lg shadow-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <button
          onClick={closeProjects}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-red-600 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-sm sm:text-base hover:bg-red-700 transition"
        >
          X
        </button>
        <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 dark:text-teal-400 mb-4 sm:mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {experience[currentIndex]?.project?.map((pro, index) => (
            <div
              key={index}
              className="project-card border border-gray-300 dark:border-gray-700 rounded-lg p-3 sm:p-4 shadow hover:shadow-lg transition-shadow duration-300 bg-gray-100 dark:bg-gray-800"
            >
              <h3 className="text-base sm:text-lg font-medium text-teal-600 dark:text-teal-400 mb-2">
                {pro.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2">{pro.description}</p>
              {pro.image && (
                <img
                  src={pro.image}
                  alt={`${pro.name} Image`}
                  className="w-full rounded-md mb-3 sm:mb-4"
                />
              )}
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
                <strong>Technologies:</strong> {pro.technologies}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <a
                  href={pro.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-teal-600 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300 text-center text-sm sm:text-base"
                >
                  View Project
                </a>
                <a
                  href={pro.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-700 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300 text-center text-sm sm:text-base"
                >
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </dialog>
    </div>
  );
}

export default Experience;
