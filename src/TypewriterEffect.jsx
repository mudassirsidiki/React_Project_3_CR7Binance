import React, { useState, useEffect } from "react";

const TypewriterEffect = () => {
  const normalText = "'IN MY MIND I'M ALWAYS THE BEST, ";
  const highlightText = "SIUUUUUUUUUUUUUUUUUUUUUU'";
  const typingSpeed = 50; // Speed in milliseconds per character
  const delayBeforeRestart = 2000; // Delay before restart in milliseconds

  const [displayText, setDisplayText] = useState("");
  const [highlightDisplayText, setHighlightDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingHighlight, setIsTypingHighlight] = useState(false);

  useEffect(() => {
    if (currentIndex < normalText.length && !isTypingHighlight) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + normalText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (currentIndex >= normalText.length && !isTypingHighlight) {
      setIsTypingHighlight(true);
      setCurrentIndex(0);
    }

    if (isTypingHighlight && currentIndex < highlightText.length) {
      const timeout = setTimeout(() => {
        setHighlightDisplayText((prev) => prev + highlightText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (isTypingHighlight && currentIndex >= highlightText.length) {
      const timeout = setTimeout(() => {
        resetTyping();
      }, delayBeforeRestart);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isTypingHighlight]);

  const resetTyping = () => {
    setDisplayText("");
    setHighlightDisplayText("");
    setCurrentIndex(0);
    setIsTypingHighlight(false);
  };

  return (
    <div className="absolute top-1 right-1 mt-[12%] w-[40vw] text-[30px] font-bold italic">
      {displayText}
      <br />
      <span className=" font-extrabold">{highlightDisplayText}</span>
    </div>
  );
};

export default TypewriterEffect;

