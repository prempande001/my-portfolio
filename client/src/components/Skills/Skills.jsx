import { useState } from "react";
import { motion } from "framer-motion";
import { skill } from "../../services/information";
import "./Skills.css";

// Deterministic pseudo-random scatter offsets so re-renders (e.g. hover) don't reshuffle the effect
const scatterOffset = (seed) => ({
  x: ((seed * 37) % 61) - 30,
  y: ((seed * 53) % 41) - 20,
  rotate: ((seed * 29) % 51) - 25,
});

const CATEGORY_STYLES = {
  cloud: { iconGlow: "bg-blue-500 dark:bg-blue-400", glow: "hover:shadow-blue-500/30 hover:border-blue-400/50", dot: "bg-blue-500/30 border-blue-400/50" },
  iac: { iconGlow: "bg-purple-500 dark:bg-purple-400", glow: "hover:shadow-purple-500/30 hover:border-purple-400/50", dot: "bg-purple-500/30 border-purple-400/50" },
  cicd: { iconGlow: "bg-orange-500 dark:bg-orange-400", glow: "hover:shadow-orange-500/30 hover:border-orange-400/50", dot: "bg-orange-500/30 border-orange-400/50" },
  containers: { iconGlow: "bg-cyan-500 dark:bg-cyan-400", glow: "hover:shadow-cyan-500/30 hover:border-cyan-400/50", dot: "bg-cyan-500/30 border-cyan-400/50" },
  monitoring: { iconGlow: "bg-green-500 dark:bg-green-400", glow: "hover:shadow-green-500/30 hover:border-green-400/50", dot: "bg-green-500/30 border-green-400/50" },
  vcs: { iconGlow: "bg-pink-500 dark:bg-pink-400", glow: "hover:shadow-pink-500/30 hover:border-pink-400/50", dot: "bg-pink-500/30 border-pink-400/50" },
  scripting: { iconGlow: "bg-yellow-500 dark:bg-yellow-400", glow: "hover:shadow-yellow-500/30 hover:border-yellow-400/50", dot: "bg-yellow-500/30 border-yellow-400/50" },
  security: { iconGlow: "bg-red-500 dark:bg-red-400", glow: "hover:shadow-red-500/30 hover:border-red-400/50", dot: "bg-red-500/30 border-red-400/50" },
  systems: { iconGlow: "bg-slate-500 dark:bg-slate-400", glow: "hover:shadow-slate-500/30 hover:border-slate-400/50", dot: "bg-slate-500/30 border-slate-400/50" },
  methodology: { iconGlow: "bg-indigo-500 dark:bg-indigo-400", glow: "hover:shadow-indigo-500/30 hover:border-indigo-400/50", dot: "bg-indigo-500/30 border-indigo-400/50" },
};

const ShatterText = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => {
        const { x, y, rotate } = scatterOffset(i + word.length);
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, x, y, rotate, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        );
      })}
    </span>
  );
};

// Deterministic starfield so re-renders don't reshuffle the twinkle pattern
const STAR_COUNT = 46;
const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
  top: (i * 37 + (i % 5) * 13) % 100,
  left: (i * 53 + (i % 7) * 11) % 100,
  size: 1 + (i % 3),
  duration: 2 + (i % 5) * 0.7,
  delay: (i % 8) * 0.3,
}));

const Starfield = ({ className = "" }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    {stars.map((star, i) => (
      <motion.span
        key={i}
        className="absolute rounded-full bg-white"
        style={{ top: `${star.top}%`, left: `${star.left}%`, width: star.size, height: star.size }}
        animate={{ opacity: [0.15, 0.9, 0.15] }}
        transition={{ duration: star.duration, repeat: Infinity, ease: "easeInOut", delay: star.delay }}
      />
    ))}
  </div>
);

const OrbitIcon = ({ item, radius, duration, delay = 0, categoryType }) => {
  const ring = CATEGORY_STYLES[categoryType]?.iconGlow || "bg-gray-400";
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 pointer-events-none"
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    >
      <motion.div
        style={{ transform: `translateX(${radius}px)` }}
        className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5"
        animate={{ rotate: -360 }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
      >
        <div className="relative">
          <div className={`absolute inset-0 rounded-full ${ring} blur-md opacity-60 scale-125`} />
          <div
            title={item.name}
            className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain filter brightness-0 invert"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const OrbitSpeck = ({ radius, duration, delay = 0, colorClass }) => (
  <motion.div
    className="absolute top-1/2 left-1/2 pointer-events-none"
    animate={{ rotate: -360 }}
    transition={{ duration, repeat: Infinity, ease: "linear", delay }}
  >
    <div
      style={{ transform: `translateX(${radius}px)` }}
      className="absolute -top-1 -left-1"
    >
      <span className={`block w-2 h-2 rounded-full ${colorClass} shadow-[0_0_8px_2px_currentColor]`} />
    </div>
  </motion.div>
);

const SkillGlobe = ({ orbitItems }) => {
  const radius = 130;
  const duration = 24;
  const speckColors = ["bg-cyan-300", "bg-blue-300", "bg-emerald-300", "bg-purple-300"];

  return (
    <div className="relative flex items-center justify-center py-14 sm:py-20 overflow-hidden">
      <Starfield className="opacity-70" />

      {/* Pulsing atmosphere halo */}
      <motion.div
        className="absolute w-40 h-40 sm:w-56 sm:h-56 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.35) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Earth sphere, gently bobbing */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full shadow-[0_0_80px_22px_rgba(56,189,248,0.3)] ring-1 ring-cyan-300/30"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #34d399 0%, #0ea5e9 38%, #0b1e3a 75%, #05070f 100%)",
        }}
      >
        {/* Continent-like blobs, drifting with the rotation */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 35%, rgba(74,222,128,0.65) 0%, transparent 22%), radial-gradient(circle at 55% 20%, rgba(74,222,128,0.5) 0%, transparent 18%), radial-gradient(circle at 75% 60%, rgba(74,222,128,0.55) 0%, transparent 20%), radial-gradient(circle at 40% 75%, rgba(74,222,128,0.45) 0%, transparent 16%)",
            backgroundSize: "220% 220%",
          }}
          animate={{ backgroundPositionX: ["0%", "-220%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />
        {/* Moving cloud/texture bands to sell continuous rotation */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            backgroundImage:
              "repeating-linear-gradient(95deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 3px, transparent 3px, transparent 18px)",
          }}
          animate={{ backgroundPositionX: ["0px", "400px"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        {/* Shading for a spherical, lit look */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow:
              "inset -22px -22px 55px rgba(0,0,0,0.6), inset 12px 12px 30px rgba(255,255,255,0.15)",
          }}
        />
      </motion.div>

      {/* Tilted 3D orbit stage carrying the satellite skill icons */}
      <div
        className="absolute"
        style={{ perspective: "900px", width: radius * 2 + 80, height: radius * 2 + 80 }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            transform: "rotateX(60deg)",
            border: "1px solid transparent",
            backgroundImage:
              "conic-gradient(from 0deg, rgba(56,189,248,0.5), rgba(168,85,247,0.4), rgba(56,189,248,0.5))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))",
          }}
        />
        {/* Inner ring of small orbiting data specks for depth */}
        <div
          className="absolute inset-10"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(60deg)" }}
        >
          {speckColors.map((colorClass, i) => (
            <OrbitSpeck
              key={i}
              radius={radius - 55}
              duration={10 + i * 2}
              delay={i * 1.5}
              colorClass={colorClass}
            />
          ))}
        </div>
        <div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(60deg)" }}
        >
          {orbitItems.map((item, i) => (
            <OrbitIcon
              key={i}
              item={item}
              categoryType={item.categoryType}
              radius={radius}
              duration={duration}
              delay={(duration / orbitItems.length) * i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const MarqueeCard = ({ item, categoryType }) => {
  const dotClass = CATEGORY_STYLES[categoryType]?.iconGlow || "bg-gray-400";
  return (
    <div className="group/marquee relative flex items-center gap-2 flex-shrink-0 mx-2 px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-black/20 dark:hover:border-white/25 hover:shadow-lg">
      <span className={`absolute left-0 top-0 bottom-0 w-1 ${dotClass} opacity-70 group-hover/marquee:opacity-100 transition-opacity duration-300`} />
      <span className={`relative w-1.5 h-1.5 rounded-full ${dotClass} flex-shrink-0 shadow-[0_0_6px_1px_currentColor]`} />
      <img
        src={item.icon}
        alt={item.name}
        className="relative w-5 h-5 object-contain filter brightness-0 dark:invert flex-shrink-0"
      />
      <span className="relative text-xs sm:text-sm text-gray-700 dark:text-gray-200 font-medium whitespace-nowrap">
        {item.name}
      </span>
    </div>
  );
};

const MarqueeRow = ({ items, reverse = false }) => (
  <div className="marquee-row">
    <div className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}>
      {[...items, ...items].map((item, i) => (
        <MarqueeCard key={i} item={item} categoryType={item.categoryType} />
      ))}
    </div>
  </div>
);

const SkillCard = ({ category, items, index, categoryType }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const getCategoryGlow = () => CATEGORY_STYLES[categoryType]?.glow || "hover:shadow-gray-500/30 hover:border-gray-400/50";

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`relative group backdrop-blur-sm bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6 transition-all duration-500 ${getCategoryGlow()} hover:bg-black/[0.06] dark:hover:bg-white/[0.08]`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 dark:via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Continuous gentle floating, independent of the one-time scroll reveal above */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3.5 + (index % 3) * 0.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 relative">
          <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {category}
          </span>
          <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-black/40 dark:from-white/50 to-transparent rounded-full" />
        </h3>

        <div className="space-y-3">
          {items.map((item, idx) => (
            <SkillItem
              key={idx}
              item={item}
              index={idx}
              categoryType={categoryType}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillItem = ({ item, index, categoryType }) => {
  const [isHovered, setIsHovered] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut"
      }
    }
  };

  const getIconColor = () => CATEGORY_STYLES[categoryType]?.iconGlow || "bg-gray-400";

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-3 p-3 rounded-xl bg-black/[0.03] dark:bg-white/5 hover:bg-black/[0.06] dark:hover:bg-white/10 transition-all duration-300 cursor-pointer group/item"
    >
      <div className={`relative flex-shrink-0 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        {/* Always-on pulsing glow, independent of hover */}
        <motion.div
          className={`absolute inset-0 ${getIconColor()} blur-md rounded-full`}
          animate={{ opacity: [0.1, 0.35, 0.1], scale: [1, 1.2, 1] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.12,
          }}
        />
        <div className={`absolute inset-0 ${getIconColor()} blur-md opacity-0 group-hover/item:opacity-30 transition-opacity duration-300`} />
        <img
          src={item.icon}
          alt={item.name}
          className="relative w-8 h-8 object-contain filter brightness-0 dark:invert"
        />
      </div>

      <motion.span
        animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.95 : 1 }}
        transition={{ duration: 0.2 }}
        className="text-gray-700 dark:text-gray-200 font-medium text-sm flex-1"
      >
        <ShatterText text={item.name} />
      </motion.span>
    </motion.div>
  );
};

export default function Skills() {
  const [skills] = useState(skill);

  const flatItems = skills.flatMap((category) =>
    category.items.map((item) => ({ ...item, categoryType: category.type }))
  );
  const orbitItems = skills.map((category) => ({ ...category.items[0], categoryType: category.type }));
  const midpoint = Math.ceil(flatItems.length / 2);
  const marqueeRowA = flatItems.slice(0, midpoint);
  const marqueeRowB = flatItems.slice(midpoint);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-950 dark:via-black dark:to-gray-950 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 dark:from-purple-900/10 via-transparent to-transparent" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h1>
          <motion.div
            className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-[length:200%_100%]"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            End-to-end DevOps expertise across{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent font-semibold">
              AWS Cloud, CI/CD, and Infrastructure as Code
            </span>
          </p>
        </motion.div>

        {/* Rotating globe with orbiting skill satellites */}
        <SkillGlobe orbitItems={orbitItems} />

        {/* Continuously auto-scrolling skill ticker, like a video reel */}
        <div className="space-y-3 mb-16">
          <MarqueeRow items={marqueeRowA} />
          <MarqueeRow items={marqueeRowB} reverse />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <SkillCard
              key={index}
              category={category.name}
              items={category.items}
              index={index}
              categoryType={category.type}
            />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 pt-8 border-t border-black/10 dark:border-white/10"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {skill.map((category) => (
              <div key={category.type} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full border ${CATEGORY_STYLES[category.type]?.dot || "bg-gray-500/30 border-gray-400/50"}`} />
                <span className="text-sm text-gray-600 dark:text-gray-400">{category.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}