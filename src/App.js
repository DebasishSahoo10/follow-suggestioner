import { useState } from "react";
import igLogo from "./ig-logo.svg";
import "./styles.css";

var accountsDB = {
  Wedding: [
    {
      name: "House on the clouds",
      rating: "5/5",
      description:
        "Wedding Filmmakers of the Year 2020, who finds storytelling as a Modern Approach To An Age Old Tradition."
    },
    {
      name: "Sanvera : the wedding reels",
      rating: "4.5/5",
      description:
        "This is my own venture 😇. My co-founder Smruti and I started it as a passion in 2014. We kept on learning and experimenting things and one day came when we decided we should take a leap forward. The fruit of the leap is, Sanvera : a space with tools where we make people's love into stories to remember and smile."
    },
    {
      name: "Dot Dusk",
      rating: "4/5",
      description:
        "DotDusk Studios was founded by Delhi-based photography enthusiasts, Lakhbir Singh and Sundeep Singh, in 2011. Over a short span, the award-winning brand has garnered internationally acclaim for being one of the most coveted luxury destination wedding filmmakers and photographers."
    },
    {
      name: "Cine Love Productions",
      rating: "4/5",
      description:
        "A team of enthusiastic storytelling wedding photographers who know nothing more than passionately crafting memories of your wedding day that you’d want to revisit, into love stories you’d want to cherish for a lifetime."
    }
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
      <div className="test">
        <img className="hero logo" src={igLogo}></img>
        <h1 className="hero">Instagram Follow Suggestions</h1>
      </div>
      <p className="intro">
        Checkout some of my favoutite photographers. Click on a genre to start.
      </p>
      <div>
        {Object.keys(accountsDB).map((genre) => (
          <button onClick={() => clickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr></hr>
      <div>
        <ul className="list-holder">
          {accountsDB[genreSelector].map((account) => (
            <li className="list">
              <div> {account.name} </div>
              <div> {account.rating} </div>
              <div> {account.description} </div>
            </li>
          ))}
        </ul>
      </div>
      <small>©️ Debasish Sahoo, 2022 All rights reserved.</small>
    </div>
  );
}
