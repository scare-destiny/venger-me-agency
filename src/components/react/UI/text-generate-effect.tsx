import React from 'react';

import { motion } from 'framer-motion';
import { cn } from '~/utils/cn';

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
  const wordsArray = words.split(' ');

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const renderWords = () => {
    return (
      <motion.div className="overflow-hidden">
        {wordsArray.map((word, i) => (
          <motion.span
            key={word + i}
            className="dark:text-white text-black"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 2, delay: i * 0.2 }}
            viewport={{ once: true, margin: '0px 0px -200px' }}
          >
            {word}{' '}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black  leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};
