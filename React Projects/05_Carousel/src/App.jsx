import "./App.css";
import { Arr } from "./Arr";
import { useState } from "react";

export default function App() {
  let [index, setIndex] = useState(0);
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <img
        src="https://cdn-icons-png.flaticon.com/128/2985/2985161.png"
        alt=""
        style={{
          height: "80px",
          width: "80px",
          position: "absolute",
          left: "300px",
          bottom: "300px",
        }}
        onClick={() => {
          index == 0 ? setIndex(Arr.length - 1) : setIndex(index - 1);
        }}
      />
      {Arr.map((i, j) => {
        if (j === index) {
          return (
            <div key={j}>
              <img src={i} style={{ height: "500px", width: "500px" }} alt="" />
            </div>
          );
        }
      })}
      <img
        src="https://cdn-icons-png.flaticon.com/128/5436/5436598.png"
        alt=""
        style={{
          height: "80px",
          width: "80px",
          position: "absolute",
          right: "320px",
          bottom: "300px",
        }}
        onClick={() => {
          index < Arr.length - 1 ? setIndex(index + 1) : setIndex(0);
        }}
      />
    </div>
  );
}
