"use client";

import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypingWordsProps {
  className?: string;
  cycleDuration?: number;
  wordCycles?: number;
  words: string[];
}

export default function TypingWords({
  className,
  cycleDuration = 50,
  wordCycles = 50,
  words,
}: TypingWordsProps) {
  let isTypingForward = useRef(false);
  let stallCycles = useRef(wordCycles);
  let wordIndex = useRef(0);
  let letterIndex = useRef(words[wordIndex.current].length);
  const [text, setText] = useState(words[wordIndex.current]);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReduced(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const animation = setInterval(() => {
      const word = words[wordIndex.current];

      if (letterIndex.current === 0 && !isTypingForward.current) {
        // go to next word
        wordIndex.current += 1;
        if (wordIndex.current === words.length) {
          wordIndex.current = 0;
        }
        isTypingForward.current = true;
      } else if (stallCycles.current !== 0) {
        // continue stalling current text
        stallCycles.current -= 1;
      } else if (letterIndex.current === word.length && isTypingForward.current) {
        // start stalling current text
        stallCycles.current = wordCycles;
        isTypingForward.current = false;
      } else {
        // step
        if (isTypingForward.current) {
          letterIndex.current += 1;
        } else {
          letterIndex.current -= 1;
        }
      }

      setText(word.slice(0, letterIndex.current));
    }, cycleDuration);
    return () => clearInterval(animation);
  }, [cycleDuration, wordCycles, words]);

  if (prefersReduced) {
    return <span className={className}>{words[0]}</span>;
  }
  return <span className={className}>{text}</span>;
}
