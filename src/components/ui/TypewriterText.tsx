import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const titles = ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'];

export default function TypewriterText() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }, 100); // Faster typing speed (was 2000)

        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before starting to delete
        const timeout = setTimeout(() => {
          // If we've reached "Fullstack Developer", mark as complete
          if (currentTitleIndex === titles.length - 1) {
            setIsComplete(true);
          } else {
            setIsTyping(false);
          }
        }, 1000);

        return () => clearTimeout(timeout);
      }
    } else if (!isComplete) {
      // Deleting text
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50); // Faster deletion speed

        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next title
        const timeout = setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setIsTyping(true);
        }, 500);

        return () => clearTimeout(timeout);
      }
    }
  }, [currentTitleIndex, displayText, isTyping, isComplete]);

  return (
    <div className="h-8">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentTitleIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-2xl font-bold text-transparent"
        >
          {displayText}
          <span className="ml-1 inline-block h-6 w-1 animate-pulse bg-blue-500" />
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
