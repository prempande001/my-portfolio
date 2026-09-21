import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'backOut' },
  },
};

const Reveal = ({ children, className, variants = fadeUp }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={variants}
    className={className}
  >
    {children}
  </motion.div>
);

const GithubDashboard = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-black text-white min-h-screen">
      {/* Header Section */}
      <Reveal className="text-center">
        <h1 className="text-5xl font-bold mb-2 text-gray-100">Hi 👋, I am Parmeshwar Pande</h1>
        <h3 className="text-2xl text-gray-400 mb-6">AWS DevOps Engineer from India</h3>
      </Reveal>

      {/* Profile Views */}
      <Reveal className="mb-6">
        <img
          src="https://komarev.com/ghpvc/?username=prempande001&label=Profile%20views&color=ff69b4&style=flat"
          alt="Profile Views"
        />
      </Reveal>

      {/* GitHub Trophies */}
      <Reveal className="mb-8">
        <a href="https://github.com/ryo-ma/github-profile-trophy">
          <img
            src="https://github-profile-trophy.vercel.app/?username=prempande001&theme=darkhub&no-bg=true&no-frame=true&margin-w=15"
            alt="GitHub Trophies"
            className="rounded-lg shadow-lg"
          />
        </a>
      </Reveal>

      {/* Current Work */}
      <Reveal className="text-center">
        <h4 className="text-xl font-semibold text-gray-200 mb-2">
          🔭 I'm currently working as a DevOps Engineer at Infosys, building CI/CD pipelines and cloud infrastructure on AWS for Bank Muscat's banking platforms
        </h4>
        <p className="text-blue-500 underline mb-6">
          <a href="https://github.com/prempande001">GitHub Profile</a>
        </p>
      </Reveal>

      {/* Contact */}
      <Reveal>
        <h4 className="text-lg mb-8">📫 How to reach me: <strong>prempande001@gmail.com</strong></h4>
      </Reveal>

      {/* Social Links */}
      <Reveal className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Connect with me:</h3>
      </Reveal>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="flex space-x-8 mb-8"
      >
        <motion.a variants={iconVariants} whileHover={{ scale: 1.15, y: -4 }} href="https://www.linkedin.com/in/parmeshwar-pande-572208249" target="_blank" rel="noopener noreferrer">
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
            alt="LinkedIn"
            className="w-10 h-10"
          />
        </motion.a>
      </motion.div>

      {/* Languages and Tools */}
      <Reveal className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Languages and Tools:</h3>
      </Reveal>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="grid grid-cols-3 gap-8 mb-8"
      >
        {[
          { href: 'https://aws.amazon.com', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', alt: 'AWS' },
          { href: 'https://www.terraform.io', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg', alt: 'Terraform' },
          { href: 'https://www.docker.com', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', alt: 'Docker' },
          { href: 'https://kubernetes.io', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg', alt: 'Kubernetes' },
          { href: 'https://www.jenkins.io', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg', alt: 'Jenkins' },
          { href: 'https://www.python.org', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', alt: 'Python' },
        ].map((tool) => (
          <motion.a key={tool.alt} variants={iconVariants} whileHover={{ scale: 1.15, y: -4 }} href={tool.href} target="_blank" rel="noopener noreferrer">
            <img src={tool.src} alt={tool.alt} className="w-16 h-16" />
          </motion.a>
        ))}
      </motion.div>

      {/* GitHub Stats Section */}
      <Reveal className="text-center">
        <h3 className="text-2xl font-semibold mb-4">GitHub Stats</h3>
      </Reveal>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="flex flex-col items-center space-y-8"
      >
        <motion.p variants={fadeUp}>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=prempande001&show_icons=true&locale=en&layout=compact&theme=chartreuse-dark"
            alt="Top Languages"
            className="rounded-lg shadow-lg"
          />
        </motion.p>
        <motion.p variants={fadeUp}>
          <img
            src="https://github-readme-stats.vercel.app/api?username=prempande001&show_icons=true&locale=en&theme=chartreuse-dark"
            alt="GitHub Stats"
            className="rounded-lg shadow-lg"
          />
        </motion.p>
        <motion.p variants={fadeUp}>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=prempande001&theme=chartreuse-dark"
            alt="GitHub Streak"
            className="rounded-lg shadow-lg"
          />
        </motion.p>
      </motion.div>
    </div>
  );
};

export default GithubDashboard;
