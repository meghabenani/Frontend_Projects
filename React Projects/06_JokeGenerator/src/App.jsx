import "./App.css";
import { useState } from "react";
export default function App() {
  let [joke, setJoke] = useState("Random Joke appers here..");
  let api = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";
  async function getJoke() {
    let getRes = await fetch(api);
    let res = await getRes.json();
    let data = res.joke;
    setJoke(data);
  }
  return (
    <div>
      <h1>Joke generator Using React and Joke API</h1>
      <button
        className="btn btn-success m-3"
        onClick={() => {
          getJoke();
        }}
      >
        Click to generate a Joke
      </button>
      <p
        className="m-3 rounded-pill p-3"
        style={{ backgroundColor: "lightgray" }}
      >
        {joke}
      </p>
    </div>
  );
}
