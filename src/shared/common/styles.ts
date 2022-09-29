import { RefObject } from 'react';

interface ViewportOptions {
  root?: RefObject<Element>;
  once?: boolean;
  margin?: string;
  amount?: 'some' | 'all' | number;
  fallback?: boolean;
}

const viewport: ViewportOptions = { once: true };

const motionSettings = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport,
};

const slideAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const fadeAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

export { slideAnimation, fadeAnimation, motionSettings };
