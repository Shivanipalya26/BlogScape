import { FC, ReactNode } from 'react';
import { motion } from 'motion/react';

const PageLoadingAnimation: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export default PageLoadingAnimation;
