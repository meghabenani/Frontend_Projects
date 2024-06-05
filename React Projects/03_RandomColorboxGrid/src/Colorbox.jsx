import { useState } from "react";

export default function Colorbox() {
  function rand() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r},${g},${b})`;
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
