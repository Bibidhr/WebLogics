/* ============================================================
   WEB-LOGICS — Studio Animation System
   Controlled, Premium, Intentional — Respects Reduced Motion
   ============================================================ */

export const ease = [0.16, 1, 0.3, 1];

// Check if user prefers reduced motion
const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

export const fadeUp = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.45, 
      ease 
    } 
  }
};

export const staggerContainer = {
  hidden: { opacity: prefersReducedMotion ? 1 : 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: prefersReducedMotion ? 0 : 0.05, 
      delayChildren: prefersReducedMotion ? 0 : 0.02 
    }
  }
};

export const modalVariants = {
  hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.96, y: prefersReducedMotion ? 0 : 15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: prefersReducedMotion ? 0 : 0.35, ease } 
  },
  exit: { 
    opacity: 0, 
    scale: prefersReducedMotion ? 1 : 0.96, 
    y: prefersReducedMotion ? 0 : 15, 
    transition: { duration: prefersReducedMotion ? 0 : 0.25 } 
  }
};
