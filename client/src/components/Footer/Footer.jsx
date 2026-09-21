import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function Footer() {
  return (
    <footer className='bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white py-8 sm:py-12'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'
        >

          {/* Logo Section */}
          <motion.div variants={columnVariants} className='space-y-3 sm:space-y-4'>
            <h3 className='text-xl sm:text-2xl font-bold text-yellow-400'>PARMESHWAR PANDE</h3>
            <p className='text-sm sm:text-base text-gray-300'>
              AWS DevOps Engineer specializing in CI/CD automation, cloud infrastructure, and container orchestration.
            </p>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className='w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-lg sm:text-xl text-black'
            >
              PP
            </motion.div>
          </motion.div>

          {/* About Section */}
          <motion.div variants={columnVariants} className='space-y-3 sm:space-y-4'>
            <h3 className='text-lg sm:text-xl font-semibold text-yellow-400'>About</h3>
            <p className='text-sm sm:text-base text-gray-300'>
              Building scalable, secure, and highly available cloud infrastructure with an automation-first mindset.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-gray-800 p-2 sm:p-3 rounded-lg hover:bg-gray-700 transition duration-300 text-center'
            >
              <a
                href="mailto:pdpande9730@gmail.com"
                className='text-sm sm:text-base text-white hover:text-yellow-400 transition duration-300'
              >
                Email Me
              </a>
            </motion.div>
          </motion.div>

          {/* Connect Section */}
          <motion.div variants={columnVariants} className='space-y-3 sm:space-y-4'>
            <h3 className='text-lg sm:text-xl font-semibold text-yellow-400'>Connect</h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
              {[
                { name: 'GitHub', url: 'https://github.com/prempande001' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/parmeshwar-pande-572208249' },
                { name: 'WhatsApp', url: 'https://wa.me/919730565764' },
                { name: 'Gmail', url: 'mailto:pdpande9730@gmail.com' },
              ].map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  className='bg-gray-800 p-2 rounded hover:bg-gray-700 transition duration-300 text-center'
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-xs sm:text-sm text-white hover:text-yellow-400 transition duration-300 block'
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={columnVariants} className='space-y-3 sm:space-y-4'>
            <h3 className='text-lg sm:text-xl font-semibold text-yellow-400'>Skills</h3>
            <div className='flex flex-wrap gap-2'>
              {[
                'AWS', 'Terraform', 'Ansible', 'Docker', 'Kubernetes',
                'Jenkins', 'Maven', 'Nexus', 'SonarQube', 'Grafana',
                'CloudWatch', 'IAM', 'Python', 'Bash', 'Linux'
              ].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: 'easeOut' }}
                  whileHover={{ scale: 1.1 }}
                  className='px-2 sm:px-3 py-1 bg-gray-800 rounded-full text-xs sm:text-sm'
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='mt-6 sm:mt-8 border-t border-gray-700 text-center pt-4'
        >
          <p className='text-sm sm:text-base text-gray-300'>
            © {new Date().getFullYear()} Parmeshwar Pande. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
