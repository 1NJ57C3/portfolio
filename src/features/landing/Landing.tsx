import { useTypewriter } from "../../shared/hooks/useTypewriter";
import "./Landing.css";

function Landing(){
  const mainHeader = "‹injustice.dev/›";
  const subHeader = "Under construction.";
  const disclaimer = "Best viewed on a computer or in landscape (for now).";

  return (
    <div className="Landing">
      <hgroup>
        <a href="/">
          <h1>{useTypewriter(mainHeader)}</h1>
        </a>
        <h4>{useTypewriter(subHeader, "insert", mainHeader.length)}</h4>
        <h5>{useTypewriter(disclaimer, "insert", mainHeader.length + subHeader.length)}</h5>
      </hgroup>
    </div>
  )
}

export default Landing;

/*
  ? landing page ideas -- "Animations,"" maybe 3-5 seconds tops?

  * 1

  Black screen loads
  CLI Input cursor appears
    ```
    &gt; (blinking caret)
    ```
  typewriter()
    console.log("~goodbye~ hello world")
    moves up while shrinking into corner of "terminal"
    UI fades into sight (css transition?)
      desk top or laptop?
      something apple-y?
    
  * 2

  typewriter()
    ```
    &gt; npm run dev
    ```
    simulate alt-tab
    browser window:
      typewriter( URL bar )
    Portfolio goes full viewport

  * 3

  typewriter()
    black screen
      loading spinner (1sec)
    typewriter:
      ```
      "Hello. I'm `1NJ57C3`"    // (`) = different color
      1NJ57C3 glitches, flashes `injustice`
      ```
    landing page fades in from bg
  
  * 4
  
  Parallax scroll effects
    silhouette style campy old Western or maybe Tarantino splash screens?
    Parallax syncs to snap scroll-ish vibes?
    Sin City style font?
      Maybe create a carousel-inspired solution that uses horizontal scroll for effects?

  * 5

  Black or rather poorly lit
    Desk with closed laptop
    Desklamp?
  Turn light on?
  Laptop opens
  Screen turns on
  Terminal opens
  typewriter()
*/
