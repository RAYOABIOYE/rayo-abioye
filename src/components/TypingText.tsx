import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  texts: string[];
  speed?: number; // typing speed in ms
  eraseSpeed?: number; // erasing speed in ms
  delay?: number; // delay before erasing
}

const TypingText: React.FC<TypingTextProps> = ({
  texts,
  speed = 120,
  eraseSpeed = 60,
  delay = 1500,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const currentText = texts[textIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      }, eraseSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }, speed);
    }

    // When typing is done
    if (!isDeleting && displayedText === currentText) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    }

    // When deleting is done
    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex, texts, speed, eraseSpeed, delay]);

  return (
    <h2 className="text-2xl md:text-3xl font-medium text-neon-blue mb-6">
      I work with <span className="text-white">{displayedText}</span>
      <span className="blinking-cursor">|</span>
    </h2>
  );
};

export default TypingText;
