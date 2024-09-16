import { useEffect, useState } from "react";

export function useTypewriter(string: string, wordsPerMinute = 135) {
  const [output, setOutput] = useState("");
  const [index, setIndex] = useState(0);
  const charactersPerMinute = wordsPerMinute * 5;
  const delay = 30000 / charactersPerMinute;

  useEffect(() => {
    if (index < string.length) {
      const timeout = setTimeout(() => {
        setOutput((prev) => prev + string[index]);
        setIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [index, string, delay]);

  return output;
}
