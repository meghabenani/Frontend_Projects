import { useState } from "react";

let colorList = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];
export default function Colorbox() {
  function rand() {
    let rand = Math.floor(Math.random() * colorList.length - 1) + 1;
    return colorList[rand];
  }
  let [color, setColor] = useState(rand);
  return (
    <div>
      <div
        style={{ backgroundColor: color, height: "40px", width: "40px" }}
        onClick={() => {
          setColor(rand);
        }}
      ></div>
    </div>
  );
}
