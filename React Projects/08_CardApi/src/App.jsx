import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  let [card, setCard] = useState([]);

  let api = "https://jsonplaceholder.typicode.com/posts";
  async function getData() {
    let d = await fetch(api);
    let res = await d.json();
    setCard(res);
  }

  useEffect(() => {
    getData();
  }, [setCard]);

  return (
    <div>
      {card.map((i, j) => {
        return (
          <div className="card w-50 container" key={j}>
            <h5>{i.body}</h5>
            <div>{i.title}</div>
            <div>By id: {i.id}</div>
          </div>
        );
      })}
    </div>
  );
}
