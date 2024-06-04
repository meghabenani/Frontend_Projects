import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  let [typeofColor, setTypeofColor] = useState("RGB");
  let [color, setColor] = useState("rgb(255, 255, 96)");

  document.querySelector("body").style.backgroundColor = `${color}`;

  // function hexColor() {
  //   let hex = "#";
  //   for (let i = 1; i <= 6; i++) {
  //     let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  //     hex += arr[Math.floor(Math.random() * arr.length - 1) + 1];
  //     setColor(`${hex}`);
  //   }
  // }

  let hex = "#";
  for (let i = 1; i <= 6; i++) {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    hex += arr[Math.floor(Math.random() * arr.length - 1) + 1];
  }

  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;

  let rgb = `rgb(${r},${g},${b})`;

  // function rgbColor() {
  //   let r = Math.floor(Math.random() * 255) + 1;
  //   let g = Math.floor(Math.random() * 255) + 1;
  //   let b = Math.floor(Math.random() * 255) + 1;

  //   let rgb = `rgb(${r},${g},${b})`;
  //   setColor(`${rgb}`);
  // }

  // useEffect(() => {
  //   if (typeofColor === "RGB") {
  //     rgbColor();
  //   } else {
  //     hexColor();
  //   }
  // }, [typeofColor]);
  return (
    <div>
      <button
        onClick={() => {
          setTypeofColor("HEX");
          setColor("#F55995");
        }}
      >
        Create Hex color
      </button>
      <button onClick={() => setTypeofColor("RGB")}>Create RGB color</button>
      <button
        onClick={() => {
          if (typeofColor === "RGB") {
            setColor(`${rgb}`);
          } else {
            setColor(`${hex}`);
          }
        }}
      >
        Generate Random Color
      </button>

      <h1>{typeofColor == "RGB" ? "RGB color" : "HEX color"}</h1>
      <p>{color}</p>
    </div>
  );
}
