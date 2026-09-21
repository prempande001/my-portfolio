import { Component } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react'; // Optional: npm install lucide-react for icons

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const headingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const orbitIcons = [
  { Icon: Phone, radius: 130, duration: 18 },
  { Icon: Mail, radius: 130, duration: 18, delay: 4.5 },
  { Icon: MapPin, radius: 130, duration: 18, delay: 9 },
  { Icon: Linkedin, radius: 130, duration: 18, delay: 13.5 },
];

const OrbitIcon = ({ Icon, radius, duration, delay = 0 }) => (
  <motion.div
    className="absolute top-1/2 left-1/2 pointer-events-none"
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
  >
    <motion.div
      style={{ transform: `translateX(${radius}px)` }}
      className="absolute -top-3 -left-3"
      animate={{ rotate: -360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300/50" />
    </motion.div>
  </motion.div>
);

export default class Contact extends Component {
  render() {
    const titleWords = 'Contact Us'.split(' ');

    return (
      <div id="contact" className="bg-white dark:bg-black min-h-screen p-4 sm:p-6 lg:p-12 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-500">
        {/* Subtle background gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-white to-cyan-100/40 dark:from-blue-900/20 dark:via-black dark:to-cyan-900/20" />

        {/* Continuously drifting ambient blobs */}
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 60, 0, -60, 0], y: [0, 40, 90, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-24 -right-16 w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -70, 0, 70, 0], y: [0, -50, -100, -50, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="relative z-10 text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="relative flex items-center justify-center py-8 sm:py-10">
            {/* Continuously spinning gradient ring behind the heading */}
            <motion.div
              className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0%, rgba(96,165,250,0.35) 25%, transparent 50%, rgba(34,211,238,0.35) 75%, transparent 100%)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] rounded-full border border-cyan-400/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Orbiting contact icons */}
            {orbitIcons.map((props, i) => (
              <OrbitIcon key={i} {...props} />
            ))}

            <motion.h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              <motion.span variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className={`inline-block mr-2 sm:mr-4 ${i === titleWords.length - 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400' : ''}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>
          </div>
          <motion.p variants={childVariants} className="relative text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 px-4">
            Let's talk about your cloud infrastructure, CI/CD, or DevOps needs
          </motion.p>
        </motion.section>

        <motion.main
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 lg:gap-12 justify-center max-w-7xl mx-auto"
        >
          {/* Contact Details Card */}
          <motion.div
            variants={childVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
            className="bg-black/[0.03] dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl flex-1 flex flex-col justify-center transition-all duration-500"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Details
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 text-center text-sm sm:text-base">Connect with Parmeshwar to know more!</p>

            <div className="space-y-6 sm:space-y-8">
              <motion.div
                whileHover={{ x: 10, color: '#60a5fa' }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center transition-colors duration-300"
              >
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-400 mb-1">PHONE</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 break-all">+91-9730565764</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, color: '#60a5fa' }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center transition-colors duration-300"
              >
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-400 mb-1">EMAIL</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 break-all">pdpande9730@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, color: '#60a5fa' }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center transition-colors duration-300"
              >
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-400 mb-1">LOCATION</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </motion.div>

              <motion.a
                href="https://www.linkedin.com/in/parmeshwar-pande-572208249"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, color: '#60a5fa' }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-400 mb-1">LINKEDIN</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 break-all">linkedin.com/in/parmeshwar-pande-572208249</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            variants={childVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
            className="bg-black/[0.03] dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl flex-1"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <form className="space-y-4 sm:space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 sm:p-4 lg:p-5 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 sm:p-4 lg:p-5 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 sm:p-4 lg:p-5 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 text-sm sm:text-base"
              />
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full p-3 sm:p-4 lg:p-5 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 resize-none text-sm sm:text-base"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                Send Now!
              </motion.button>
            </form>
          </motion.div>
        </motion.main>
      </div>
    );
  }
}