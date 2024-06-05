import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  let [typeofColor, setTypeofColor] = useState("rgb");
  let [color, setColor] = useState("rgb(240, 305, 65)");
  document.querySelector("body").style.backgroundColor = color;

  function hexColor() {
    let arr = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let hex = "#";
    for (let i = 1; i <= 6; i++) {
      let rand = arr[Math.floor(Math.random() * arr.length - 1) + 1];
      hex += rand;
    }
    setColor(hex);
  }

  function rgbColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let rgb = `rgb(${r},${g},${b})`;

    setColor(rgb);
  }

  useEffect(() => {
    if (typeofColor === "rgb") {
      rgbColor();
    } else {
      hexColor();
    }
  }, [typeofColor]);
  return (
    <div>
      <button
        onClick={() => {
          setTypeofColor("hex");
        }}
      >
        Create hex color
      </button>
      <button
        onClick={() => {
          setTypeofColor("rgb");
        }}
      >
        Create RGB color
      </button>
      <button
        onClick={() => {
          typeofColor === "rgb" ? rgbColor() : hexColor();
        }}
      >
        Generate Random color
      </button>

      <div className="container m-5">
        <h1 style={{ fontSize: "50px", margin: "80px" }}>
          {typeofColor === "rgb" ? "RGB Color" : "HEX Color"}
        </h1>
        <h1 style={{ fontSize: "50px", margin: "50px" }}>{color}</h1>
      </div>
    </div>
  );
}
