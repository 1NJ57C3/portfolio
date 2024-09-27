import { useEffect, useState } from "react";
// import { useTypewriterContext } from "../contexts/useTypewriterContext";

type ModeType = "insert" | "delete" | "pause";
type InputType<T extends ModeType> = T extends "insert" ? string : number;

export function useTypewriter<T extends ModeType>(input: InputType<T>, mode: T = "insert" as T, initDelayedChars = 0) {
  // syntax: function typewriter <const T = ModeType> (paramA: ParamAType<this.T>, paramB: this.T = defaultValue typed this.T)
  const [output, setOutput] = useState(mode === "delete" ? (input as number) : "");
  const [index, setIndex] = useState(0);
  const [deletions, setDeletions] = useState(mode === "delete" ? (input as number) : 0); // TODO will need rework for iterations * need to figure out how to set
  const wordsPerMinute = 135;
  const charactersPerMinute = wordsPerMinute * 5;
  const msPerCharacter = 60000 / charactersPerMinute;
  const initDelay = (initDelayedChars + 3) * msPerCharacter;

  useEffect(() => {
    function typewrite(input: string) {
      if (index < input.length) {
        setOutput((prev) => prev + input[index]);
        setIndex((prev) => prev + 1);
      }
    }

    function backspace() {
      if (deletions > 0) {
        setOutput((prev) => (prev as string).slice(0, -1));
        setDeletions((prev) => prev - 1);
      }
    }

    function renderOutput() {
      const timeout = setTimeout(() => {
        if (mode === "insert") typewrite(input as string);
        if (mode === "delete") backspace();
      }, msPerCharacter);
      return () => clearTimeout(timeout);
    }

    if (index === 0 && initDelayedChars) {
      const initTimeout = setTimeout(renderOutput, initDelay);
      return () => clearTimeout(initTimeout);
    } else return renderOutput();
  }, [index, input, deletions, mode, msPerCharacter, setOutput, initDelay, initDelayedChars]);

  return output;
}

// ? Switch up root parameters to array of objects? i.e. [ { input, mode, delay}, ]...?
/* -- 
  input = [{input, mode}, {input, mode}, {input, mode}]
  input.forEach => {
    if (mode === "insert") typewrite(input as string)
    if (mode === "delete") backspace(input as number)
  // need to chain timeouts if working this way; past attempts have still been glitchy at best
-- */

// ? potential `output` rework for input cursor:
/*--
  change output to an object with `leftString`, `caret`, and `rightString` properties?
    `rightString` = output.slice(index, output.length)?
  use monospace font so caret element can be a block tag containing `&nbsp;` to emulate box caret?
  use `selection` instead of `caret` property
    for text highlighting, caret can be object with left and right properties that drive behavior
-- */

/* --
? Things we might want to change:
--
* is able to repeat
  dynamically choose setTimeout or setInterval?
  spit out unique component?
    use outside state/context?
* able to move text input cursor freely
  use separate outputs?
    output1, output2, index (cursor position)
      will require external state(s)
-- */
