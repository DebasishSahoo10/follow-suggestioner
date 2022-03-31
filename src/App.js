import { useState } from "react";
import "./styles.css";

export default function App() {
  var [links, setStyle] = useState("div");
  function clickHandler() {
    console.log("clicked");
    setStyle("div2");
  }

  return (
    <div className="App">
      <h1>Instagram Follow Suggestions</h1>
      <p>
        Checkout some of my favoutite photographers. Click on a genre to start.
      </p>
      <button onClick={() => clickHandler()}>Wedding</button>
      <button onClick={() => clickHandler()}>Street</button>
      <button onClick={() => clickHandler()}>Portrait</button>
      <div className={links}>
        <div className="links">Testing</div>
      </div>
    </div>
  );
}
