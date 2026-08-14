import { motion } from 'framer-motion'
import { certifications, education } from '../../services/information'

const sectionVariants = {
   hidden: { opacity: 0, y: 40 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
   },
}

const rowVariants = {
   hidden: { opacity: 0, x: -20 },
   visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' },
   }),
}

const cardVariants = {
   hidden: { opacity: 0, y: 30, scale: 0.9 },
   visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
   }),
}

const Education = () => {

   return (
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
         <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="w-full max-w-5xl mx-auto bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg"
         >
            <h2 className="text-2xl sm:text-3xl text-center text-amber-600 dark:text-yellow-400 font-bold mb-6 sm:mb-8">Education</h2>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
               <table className="table-auto w-full text-left border-collapse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-200">
                  <thead>
                     <tr className="bg-gray-300 dark:bg-gray-700 text-amber-700 dark:text-yellow-400">
                        <th className="p-3 lg:p-4 text-sm lg:text-base">School Name</th>
                        <th className="p-3 lg:p-4 text-sm lg:text-base">Degree</th>
                        <th className="p-3 lg:p-4 text-sm lg:text-base">Year</th>
                        <th className="p-3 lg:p-4 text-sm lg:text-base">Major</th>
                        <th className="p-3 lg:p-4 text-sm lg:text-base">Percentage</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        education.map((item, index) => (
                           <motion.tr
                              key={index}
                              custom={index}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.3 }}
                              variants={rowVariants}
                              className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                           >
                              <td className="p-3 lg:p-4 border-b border-gray-300 dark:border-gray-700 text-sm lg:text-base">{item.schoolName}</td>
                              <td className="p-3 lg:p-4 border-b border-gray-300 dark:border-gray-700 text-sm lg:text-base">{item.degree}</td>
                              <td className="p-3 lg:p-4 border-b border-gray-300 dark:border-gray-700 text-sm lg:text-base">{item.year}</td>
                              <td className="p-3 lg:p-4 border-b border-gray-300 dark:border-gray-700 text-sm lg:text-base">{item.major}</td>
                              <td className="p-3 lg:p-4 border-b border-gray-300 dark:border-gray-700 text-sm lg:text-base">{item.percentage}</td>
                           </motion.tr>
                        ))
                     }
                  </tbody>
               </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
               {
                  education.map((item, index) => (
                     <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}
                        className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 shadow-md"
                     >
                        <div className="space-y-3">
                           <div>
                              <h3 className="text-amber-700 dark:text-yellow-400 font-semibold text-sm mb-1">School Name</h3>
                              <p className="text-gray-700 dark:text-gray-200 text-sm">{item.schoolName}</p>
                           </div>
                           <div>
                              <h3 className="text-amber-700 dark:text-yellow-400 font-semibold text-sm mb-1">Degree</h3>
                              <p className="text-gray-700 dark:text-gray-200 text-sm">{item.degree}</p>
                           </div>
                           <div>
                              <h3 className="text-amber-700 dark:text-yellow-400 font-semibold text-sm mb-1">Year</h3>
                              <p className="text-gray-700 dark:text-gray-200 text-sm">{item.year}</p>
                           </div>
                           <div>
                              <h3 className="text-amber-700 dark:text-yellow-400 font-semibold text-sm mb-1">Major</h3>
                              <p className="text-gray-700 dark:text-gray-200 text-sm">{item.major}</p>
                           </div>
                           <div>
                              <h3 className="text-amber-700 dark:text-yellow-400 font-semibold text-sm mb-1">Percentage</h3>
                              <p className="text-gray-700 dark:text-gray-200 text-sm">{item.percentage}</p>
                           </div>
                        </div>
                     </motion.div>
                  ))
               }
            </div>
         </motion.section>

         <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="w-full max-w-5xl mx-auto bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg mt-8 sm:mt-10"
         >
            <h2 className="text-2xl sm:text-3xl text-center text-amber-600 dark:text-yellow-400 font-bold mb-6 sm:mb-8">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
               {
                  certifications.map((cert, index) => (
                     <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 sm:p-5 shadow-md flex flex-col items-center text-center gap-3 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                     >
                        <img src={cert.icon} alt={cert.issuer} className="w-10 h-10 filter brightness-0 dark:invert opacity-80" />
                        <p className="text-gray-800 dark:text-gray-100 text-sm sm:text-base font-medium">{cert.name}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">{cert.issuer}</p>
                     </motion.div>
                  ))
               }
            </div>
         </motion.section>
      </div>
   )
}

export default Education
