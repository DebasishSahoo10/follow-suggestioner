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
  var [genreSelector, setGenre] = useState("Wedding");
  function clickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Instagram Follow Suggestions</h1>
      <p>
        Checkout some of my favoutite photographers. Click on a genre to start.
      </p>
      <div>
        {Object.keys(accountsDB).map((genre) => (
          <button onClick={() => clickHandler(genre)}>{genre}</button>
        ))}
      </div>

      <div>
        <ul>
          {accountsDB[genreSelector].map((account) => (
            <li>
              <div> {account.name} </div>
              <div> {account.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
