import "./App.css";
import { useState } from "react";

let arr = [
  "Red",
  "Green",
  "Blue",
  "Olive",
  "Gray",
  "Orange",
  "violet",
  "Coral",
  "brown",
  "purple",
  "Black",
];

export default function App() {
  let [color, setColor] = useState("skyBlue");
  document.querySelector("body").style.backgroundColor = color;
  return (
    <div style={{ position: "absolute", bottom: "40px" }}>
      <div
        className="navbar navbar-expand rounded-pill"
        style={{ backgroundColor: "gainsboro" }}
      >
        {arr.map((i, j) => {
          return (
            <div key={j}>
              <div
                style={{ backgroundColor: i, color: "white" }}
                className="border rounded-pill p-3 m-3"
                onClick={() => {
                  setColor(i);
                }}
              >
                {i}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
