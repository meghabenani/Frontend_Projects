import "./App.css";
import { useState } from "react";

export default function App() {
  let [advice, setAdvice] = useState("Random Quote");
  let api = "https://api.adviceslip.com/advice";

  async function getQuote() {
    let get = await fetch(api);
    let res = await get.json();
    let data = res.slip.advice;
    setAdvice(data);
  }
  return (
    <div>
      <h1 className="m-5" style={{ position: "absolute", top: "0px" }}>
        Quote Generator
      </h1>
      <div
        className="card border-black container rounded-4"
        style={{ width: "500px" }}
      >
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>{advice}</p>
        <button
          className="btn btn-secondary container rounded-pill"
          style={{ width: "150px", height: "50px" }}
          onClick={() => {
            getQuote();
          }}
        >
          Give me advice
        </button>
      </div>
    </div>
  );
}
