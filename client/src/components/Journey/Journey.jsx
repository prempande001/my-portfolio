import { motion } from 'framer-motion';
import { project as projectData } from '../../services/information';
import './Journey.css';

const cardVariants = {
   hidden: { opacity: 0, y: 60 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
   },
};

const lineVariants = {
   hidden: { scaleY: 0 },
   visible: {
      scaleY: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
   },
};

const badgeVariants = {
   hidden: { opacity: 0, scale: 0 },
   visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 0.3 + i * 0.1, ease: 'backOut' },
   }),
};

const TimelineCard = ({ title, description, badges, headingSize = 'text-3xl sm:text-4xl lg:text-5xl' }) => (
   <div className="relative">
      {/* Vertical Line - Hidden on mobile, visible on md+ */}
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         variants={lineVariants}
         style={{ transformOrigin: 'top' }}
         className="hidden md:block absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-teal-400"
      ></motion.div>

      {/* Content Card */}
      <div className="ml-0 md:ml-12 lg:ml-16">
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-b from-blue-600 to-teal-400 text-white rounded-2xl sm:rounded-3xl shadow-2xl transition-shadow duration-300 hover:shadow-xl overflow-hidden flex flex-col items-center justify-between text-center p-6 sm:p-8 lg:p-10"
         >
            <div className="w-full">
               <h2 className={`${headingSize} font-extrabold mb-4 sm:mb-6 drop-shadow-lg`}>{title}</h2>
               <p className="text-base sm:text-lg leading-relaxed px-2 sm:px-6 lg:px-12 whitespace-pre-line">
                  {description}
               </p>
            </div>
            <div className="flex items-center justify-center space-x-4 sm:space-x-6 mt-4 sm:mt-6">
               {badges.map((badge, i) => (
                  <motion.span
                     key={i}
                     custom={i}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                     variants={badgeVariants}
                     whileHover={{ scale: 1.15, rotate: 8 }}
                     className={`${badge.className} rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl shadow-md`}
                  >
                     {badge.icon}
                  </motion.span>
               ))}
            </div>
         </motion.div>
      </div>
   </div>
);

const Journey = () => {

   const bcs = {
      title: 'Education',
      description: `
         - Master of Computer Applications (MCA) from Dr. Babasaheb Ambedkar Marathwada University, Chh. Sambhajinagar — 69.10% (June 2024 – June 2026).
         - B.Sc. Computer Science from Dr. Babasaheb Ambedkar Marathwada University, Chh. Sambhajinagar — 73.57% (2018 – 2021).
      `,
      icon: '🎓',
   }

   const arohi = {
      title: 'Work Experience',
      description: `
         - DevOps Engineer at Infosys, Client: Bank Muscat — Internet Banking & Mobile Banking Deployment (Sep 2023 – May 2026).
         - Responsibilities included:
            - Architecting and maintaining CI/CD pipelines with Jenkins (GitOps, Pipeline-as-Code) and automating infrastructure provisioning with Terraform.
            - Containerizing Java applications with Docker and deploying them on Kubernetes with Helm using blue-green and canary strategies.
            - Managing core AWS services (EC2, S3, IAM, VPC, ELB, Auto Scaling) and administering AWS RDS databases.
            - Monitoring system health with Grafana and CloudWatch, and automating server provisioning with Ansible.
         - Junior DevOps Engineer at Infosys, Client: State Bank of India (Foreign) — Digital Banking Platform Support (Apr 2022 – Aug 2023).
         - Responsibilities included:
            - Assisting with Jenkins CI/CD pipeline execution and AWS resource provisioning (EC2, S3, IAM, VPC).
            - Writing Bash and Python scripts to automate routine operational tasks, cutting manual effort by ~40%.
            - Supporting Docker containerization and Kubernetes deployments under senior engineer guidance.
      `,
      icon: '💼',
   }

   const projects = projectData.map((proj) => ({
      title: `Projects - ${proj.name}`,
      description: `
         - ${proj.description}
         ${(proj.highlights || []).map((h) => `- ${h}`).join('\n         ')}
         - Technologies: ${proj.technologies}
         - Links:
            - GitHub: ${proj.repository}
      `,
      icon: '🚀',
   }))

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <motion.h1
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6, ease: 'easeOut' }}
         className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-white"
      >
         My Journey
      </motion.h1>

      <div className="space-y-8 sm:space-y-12">
         {/* Education Section */}
         <TimelineCard
            title={bcs.title}
            description={bcs.description}
            badges={[
               { icon: '💼', className: 'bg-white text-blue-500' },
               { icon: '🚀', className: 'bg-white text-teal-500' },
            ]}
         />

         {/* Horizontal Line - Hidden on mobile, visible on md+ */}
         <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
            className="hidden md:block h-1 bg-gradient-to-r from-blue-600 to-teal-400 ml-4"
         ></motion.div>

         {/* Work Experience Section */}
         <TimelineCard
            title={arohi.title}
            description={arohi.description}
            badges={[
               { icon: '💼', className: 'bg-white text-blue-500' },
               { icon: '🚀', className: 'bg-white text-teal-500' },
            ]}
         />

         {/* Projects Section */}
         {projects.map((project, index) => (
            <div key={index} className="relative">
               <TimelineCard
                  title={project.title}
                  description={project.description}
                  headingSize="text-2xl sm:text-3xl lg:text-4xl"
                  badges={[{ icon: project.icon, className: 'bg-white text-blue-500' }]}
               />

               {/* Horizontal Line between projects - Hidden on mobile, visible on md+ */}
               {index < projects.length - 1 && (
                  <motion.div
                     initial={{ scaleX: 0 }}
                     whileInView={{ scaleX: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, ease: 'easeOut' }}
                     style={{ transformOrigin: 'left' }}
                     className="hidden md:block h-1 bg-gradient-to-r from-blue-600 to-teal-400 ml-4 my-8"
                  ></motion.div>
               )}
            </div>
         ))}
      </div>
   </div>
);
};

export default Journey;
