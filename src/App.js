import { useState } from "react";
import "./styles.css";

var accountsDB = {
  Wedding: [
    { name: "House on the clouds", rating: "4.5/5" },
    { name: "Sanvera : the wedding reels", rating: "4/5" }
  ],
  Street: [
    { name: "Moises Levy", rating: "4.5/5" },
    { name: "MesYeux", rating: "4/5" }
  ],
  Portrait: [
    { name: "Nirav Patel", rating: "4.5/5" },
    { name: "Alessio Albi", rating: "4/5" }
  ]
};

export default function App() {
  var [links, setStyle] = useState("div");
  function clickHandler() {}

  return (
    <div className="App">
      <h1>Instagram Follow Suggestions</h1>
      <p>
        Checkout some of my favoutite photographers. Click on a genre to start.
      </p>
      <button onClick={() => clickHandler()}>Wedding</button>
      <button onClick={() => clickHandler()}>Street</button>
      <button onClick={() => clickHandler()}>Portrait</button>
    </div>
  );
}
