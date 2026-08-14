import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Wraps a section so it zooms/settles into place as it scrolls through the
 * viewport, like a camera pushing in — the Spline-style "zoom" reveal.
 * Falls back to a plain fade for users who prefer reduced motion.
 */
function ScrollZoom({ children, className = "", zoomFrom = 0.85, intensity = 1 }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [zoomFrom, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1 - 0.7 * intensity, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], [`blur(${6 * intensity}px)`, "blur(0px)"]);

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, filter: blur, willChange: "transform, opacity, filter" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollZoom;
