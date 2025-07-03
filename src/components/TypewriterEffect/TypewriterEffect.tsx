
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = ''
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    const targetText = texts[currentTextIndex];
    const shouldDelete = isDeleting && currentText.length > 0;
    const shouldType = !isDeleting && currentText.length < targetText.length;

    if (shouldType) {
      const timer = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    }

    if (shouldDelete) {
      const timer = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, deletingSpeed);
      return () => clearTimeout(timer);
    }

    if (!isDeleting && currentText === targetText) {
      setIsPaused(true);
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="border-r-2 border-blue-600 ml-1"
      >
        |
      </motion.span>
    </span>
  );
};
