'use client';

import { useState, useEffect } from 'react';

const titles = ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'];

export default function TypewriterText() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }, 100);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          if (currentTitleIndex === titles.length - 1) {
            setIsComplete(true);
          } else {
            setIsTyping(false);
          }
        }, 1000);

        return () => clearTimeout(timeout);
      }
    } else if (!isComplete) {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
            setIsTyping(true);
            setIsVisible(true);
          }, 300);
        }, 500);

        return () => clearTimeout(timeout);
      }
    }
  }, [currentTitleIndex, displayText, isTyping, isComplete]);

  return (
    <div>
      <span
        className={`text-primary text-xl font-medium transition-opacity duration-300 sm:text-2xl ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {displayText}
        <span className="bg-primary ml-1 inline-block h-6 w-1 animate-pulse" />
      </span>
    </div>
  );
}
