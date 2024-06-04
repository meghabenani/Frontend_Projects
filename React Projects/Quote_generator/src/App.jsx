import "./App.css";
import { useState } from "react";

export default function App() {
  let api = "https://type.fit/api/quotes";
  let [quote, setQuote] = useState("");
  let [author, setAuthor] = useState("");

  async function getAPi() {
    let res = await fetch(api);
    let data = await res.json();
    let rand = Math.floor(Math.random() * data.length - 1) + 1;
    data.map((i, j) => {
      if (j === rand) {
        setQuote(i.text);
        setAuthor(i.author);
      }
    });
  }

  return (
    <div className="container">
      <h1>Quote Generator</h1>
      <div className="card border-black w-50 container">
        <div>
          <button
            className="m-3 btn btn-secondary"
            onClick={() => {
              getAPi();
            }}
          >
            Click to generate new Quote
          </button>
          <h4 className="m-2">{quote}</h4>
          <p className="m-3">{author}</p>
        </div>
      </div>
    </div>
  );
}
