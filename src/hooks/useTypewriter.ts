import { useEffect, useState } from "react";

type ModeType = "insert"|"delete"|"pause";
type InputType<T extends ModeType> = T extends "insert" ? string : number;

export function useTypewriter<T extends ModeType>(input: InputType<T>, mode: T = "insert" as T) {
// syntax: function typewriter <const T = ModeType> (paramA: ParamAType<this.T>, paramB: this.T = defaultValue typed this.T)

/*
  input = [{input, mode}, {input, mode}, {input, mode}]
  input.forEach => {
    if (mode === "insert") typewrite(input as string)
    if (mode === "delete") backspace(input as number)
  ! need to chain timeouts if working this way; past attempts have still been glitchy at best
  */

  const [output, setOutput] = useState(mode === "insert" ? input as string : "this is a test"); // ! temporary value for writing `backspace()`
  const [index, setIndex] = useState(0);
  const [deletions, setDeletions] = useState(mode === "delete" ? input as number : 0); // TODO will need rework for iterations
  const wordsPerMinute = 135; // ? move to context for easier config?
  const charactersPerMinute = wordsPerMinute * 5;
  const msPerCharacter = 60000 / charactersPerMinute;

  useEffect(() => {
    function typewrite(input: string) {
      if (index < input.length) {
        setOutput((prev) => prev + input[index]);
        setIndex((prev) => prev + 1);
      }
    }
  
    function backspace() {
      if (deletions > 0) {
        setOutput((prev) => prev.slice(0, -1));
        setDeletions((prev) => prev - 1);
      }
    }
  
    function renderOutput(changes: () => void) {
      const timeout = setTimeout(changes, msPerCharacter);
      return () => clearTimeout(timeout);
    }

    return renderOutput(() => {
      if (mode === "insert") typewrite(input as string);
      if (mode === "delete") backspace();
    });
  }, [index, input, deletions, mode, msPerCharacter]);

  return output;
}

/* --
  // TODO  HANDLING MULTIPLE STRINGS/INTERRUPTIONS?
  // ? async/await for multi-element typewriter?
  // ? nesting timeouts?
  // ?   multiply `string.length` by `msPerCharacter`?

  const delay = new Promise((resolve) => setTimeout(resolve, initDelay));

-- */

/* --
? Stop and think about things we want to change:
--
* function sends given string one letter at a time to display
  while (i < string.length) output += string[i], i++
* outputs string one character at a time
  output = typeOut(string);
* is able to remove character
  function removeChar(count) {
    while (count > 0) {
      output = output.slice(0, -1);
      count--;
    }
  }

* is able to pause
  separate helper function?
  clearTimeout?
  //  log timeout remaining?
    wrap original timeout in nested setTimeout?
* is able to resume
  add initial delay to timeout time?
  async/await?
    ? can async/await even be used this way?
* is able to repeat
  dynamically choose setTimeout or setInterval?
  spit out unique component?
    use outside state/context?
* able to move text input cursor freely
  use separate outputs?
    output1, output2, index (cursor position)
      will require external state(s)
-- */
