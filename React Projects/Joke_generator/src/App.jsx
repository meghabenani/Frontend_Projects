import "./App.css";
import { useState } from "react";

export default function App() {
  let [joke, setJoke] = useState("");
  let api = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";

  // function getApi() {
  //   fetch(api)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setJoke(data.joke);
  //     });
  // }

  async function getApi() {
    let res = await fetch(api);
    let data = await res.json();
    let joke = data.joke;
    setJoke(joke);
  }

  return (
    <div className="text-center">
      <h1 className="p-2 m-3">Joke Generator</h1>

      <div
        className="card w-50 container border-black"
        style={{ background: "lightgreen " }}
      >
        <div>
          <button onClick={getApi} className="btn btn-secondary m-3">
            {" "}
            Click to generate new Joke
          </button>
          <p>{joke}</p>
        </div>
      </div>
    </div>
  );
}
