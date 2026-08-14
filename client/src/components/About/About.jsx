import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const SPECIALTIES = [
  "AWS Cloud Infrastructure",
  "CI/CD Automation",
  "Kubernetes & Docker",
  "Infrastructure as Code",
  "DevSecOps & Monitoring",
];

const TERMINAL_LINES = [
  { prompt: true, text: "terraform apply -auto-approve" },
  { prompt: false, text: "Apply complete! Resources: 12 added, 0 changed." },
  { prompt: true, text: "kubectl rollout status deployment/api" },
  { prompt: false, text: 'deployment "api" successfully rolled out' },
  { prompt: true, text: "aws cloudwatch describe-alarms --state ALARM" },
  { prompt: false, text: "✓ All systems healthy" },
];

const FLOATING_BADGES = [
  { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg", label: "AWS", pos: "-top-5 -left-6 sm:-left-10", duration: 3.4, delay: 0 },
  { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kubernetes.svg", label: "K8s", pos: "-top-6 -right-4 sm:-right-8", duration: 4, delay: 0.6 },
  { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/terraform.svg", label: "Terraform", pos: "-bottom-6 -left-4 sm:-left-10", duration: 3.7, delay: 1.1 },
  { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg", label: "Docker", pos: "top-1/2 -right-6 sm:-right-12", duration: 4.3, delay: 0.3 },
  { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jenkins.svg", label: "Jenkins", pos: "-bottom-5 -right-2 sm:-right-6", duration: 3.9, delay: 1.5 },
];

function About() {
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setSpecialtyIndex((prev) => (prev + 1) % SPECIALTIES.length);
      setCharIndex(0);
      setDisplayText("");
    }, 3200);
    return () => clearInterval(rotateInterval);
  }, []);

  useEffect(() => {
    const currentText = SPECIALTIES[specialtyIndex];
    if (charIndex < currentText.length) {
      const typingInterval = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 60);
      return () => clearTimeout(typingInterval);
    }
  }, [charIndex, specialtyIndex]);

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) {
      const resetTimeout = setTimeout(() => setVisibleLines(0), 2500);
      return () => clearTimeout(resetTimeout);
    }
    const lineTimeout = setTimeout(() => setVisibleLines((prev) => prev + 1), 700);
    return () => clearTimeout(lineTimeout);
  }, [visibleLines]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Dramatic camera-push-in for the hero visual, Spline-style
  const zoomInVariants = {
    hidden: { opacity: 0, scale: 0.7, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    pulse: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.05, 1],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-950 dark:via-black dark:to-gray-950 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500"
    >
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="pulse"
        className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="pulse"
        transition={{ delay: 2 }}
        className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 justify-center items-center relative z-10"
      >
        {/* Left content */}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8 max-w-2xl"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 text-base sm:text-lg font-light tracking-wide">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Hello, It&apos;s Me
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Parmeshwar
              </span>
              <span className="block text-gray-900 dark:text-white mt-2">Pande</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-lg">
              AWS DevOps Engineer with 4+ years building CI/CD pipelines, automating cloud infrastructure, and running containerized workloads on AWS for critical banking applications.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold h-12 sm:h-16 flex items-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-[2px] h-8 sm:h-10 bg-blue-400 ml-1"
              />
            </div>
            <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur-xl -z-10"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-3.5 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 group-hover:from-blue-500 group-hover:via-cyan-400 group-hover:to-blue-500 transition-all duration-300"></div>
              <span className="relative text-base font-semibold text-white">Get In Touch</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/parmeshwar-pande-572208249"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-all duration-300"
            >
              View LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right visual: animated terminal + floating tech badges, zooms in like a camera push */}
        <motion.div
          variants={zoomInVariants}
          className="flex-1 flex justify-center items-center py-8 lg:py-0"
        >
          <div className="relative w-full max-w-md">
            {FLOATING_BADGES.map((badge, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: badge.duration, repeat: Infinity, delay: badge.delay, ease: "easeInOut" }}
                className={`absolute ${badge.pos} z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-300/60 dark:border-gray-700/60 rounded-xl px-2.5 py-2 sm:px-3 sm:py-2.5 shadow-xl flex items-center gap-2`}
              >
                <img src={badge.icon} alt={badge.label} className="w-4 h-4 sm:w-5 sm:h-5 filter brightness-0 dark:invert" />
                <span className="hidden sm:inline text-xs font-medium text-gray-700 dark:text-gray-300">{badge.label}</span>
              </motion.div>
            ))}

            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(59,130,246,0.15)", "0 0 40px rgba(34,211,238,0.25)", "0 0 20px rgba(59,130,246,0.15)"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl border border-gray-300 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100/80 dark:bg-gray-900/80 border-b border-gray-300 dark:border-gray-800">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-gray-500 font-mono">parmeshwar@aws-devops:~</span>
              </div>
              <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-sm min-h-[220px] sm:min-h-[260px] space-y-2">
                {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={line.prompt ? "text-cyan-600 dark:text-cyan-300" : "text-gray-600 dark:text-gray-400 pl-4"}
                  >
                    {line.prompt ? <span className="text-green-400">$ </span> : null}
                    {line.text}
                  </motion.div>
                ))}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-cyan-400 align-middle"
                />
              </div>
            </motion.div>

            {/* Floating status badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-300/60 dark:border-gray-700/50 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-2xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent whitespace-nowrap">
                  Available for work
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}

export default About;
