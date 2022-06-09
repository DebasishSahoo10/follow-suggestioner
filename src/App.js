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
    {
      name: "Moises Levy",
      rating: "4.5/5",
      description:
        "Award winner Fine Art and Street photographer who uses Leica & Fuji and beieves that Perspective changes everything in Life."
    },
    {
      name: "MesYeux",
      rating: "4/5",
      description:
        "A 23 year bio-tech student who takes photogrpahy as a way dive into her creativity. She uses a Nord smartphone to create her wonders, which she believes as another view of simple wordly things. No doubt, Her perspectives are most unique ones."
    },
    {
      name: "Street Photo International",
      rating: "4/5",
      description:
        "Street Photography International (SPi) are a collective of street photographers who formed with the aim to promote the best Street Photography from around the world, and to provide a platform for unrepresented photographers with talent. "
    },
    {
      name: "Kurt 5",
      rating: "4/5",
      description:
        "A NYC based photographer who captures wonderful colors of nature as a hobby. His hidden messages in the societal images is really worth following."
    }
  ],
  Portrait: [
    {
      name: "Nirav Patel",
      rating: "4.5/5",
      description:
        "Nirav Patel is a San Francisco based Fine Art Portrait and Wedding Photographer whose emotive work is inspired by quiet moments. His signature pieces involve the molding of natural and artificial light in dramatic ways to draw attention to expression and emotion."
    },
    {
      name: "Alessio Albi",
      rating: "4/5",
      description:
        "Photographer based in Italy, Represented by Condé Nast and Monday Artists. He loves to captures people and their stories in a still frame."
    },
    {
      name: "Rohan Shrestha",
      rating: "4/5",
      description:
        "Drawing on a legacy from his father Rakesh Shrestha, Rohan’s passion for photography was fuelled from his childhood. He has worked with almost all big names of Bollywood"
    },
    {
      name: "Taras Taraporvala",
      rating: "4/5",
      description:
        "He is a really good photographer based on Bollywood and has worked with more than hundreads of brands while shooting bollywood stars."
    }
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
