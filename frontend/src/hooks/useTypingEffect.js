import { useEffect, useState } from "react";

export const useTypingEffect = (
  words = [],
  typingSpeed = 150,
  deletingSpeed = 80,
  delayBetweenWords = 1500
) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    let timer;
    const currentFullWord = words[currentWordIndex];

    if (!isDeleting) {
      // Typing phase
      timer = setTimeout(() => {
        setCurrentText((prev) => currentFullWord.substring(0, prev.length + 1));
      }, typingSpeed);

      if (currentText === currentFullWord) {
        // Pausing after word is fully typed
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      // Deleting phase
      timer = setTimeout(() => {
        setCurrentText((prev) => currentFullWord.substring(0, prev.length - 1));
      }, deletingSpeed);

      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return currentText;
};
export default useTypingEffect;
