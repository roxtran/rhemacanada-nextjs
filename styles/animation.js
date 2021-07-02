export const staggering = {
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } },
}

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}

export const slideUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { ease: 'easeInOut', duration: 0.5 } },
  exit: { opacity: 0, y: 60 },
}

export const slideDown = {
  hidden: { y: -200, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
  exit: {
    opacity: 0,
    y: 400,
    // transition: { duration: 0.25, ease: 'easeIn' },
  },
}
