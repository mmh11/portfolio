export const viewportOnce = {
  once: true,
  amount: 0.18,
}

export const easeOut = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: easeOut,
    },
  },
}

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.42,
      ease: easeOut,
    },
  },
}

export const staggerGroup = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

export const heroGroup = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const heroVisual = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.62,
      duration: 0.56,
      ease: easeOut,
    },
  },
}

export const ctaItem = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.34,
      ease: easeOut,
    },
  },
}
