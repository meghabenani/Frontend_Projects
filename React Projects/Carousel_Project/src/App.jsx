import "./App.css";
import { ImgArr } from "./ImgArr";
import { useState } from "react";

export default function App() {
  let [img, setImg] = useState(0);
  return (
    <div>
      <h1>Project 1 : Carousel</h1>
      <button
        style={{
          position: "absolute",
          left: "23%",
          bottom: "45%",
          width: "80px",
          borderRadius: "30px",
        }}
        onClick={() => {
          if (img == 0) {
            setImg(ImgArr.length - 1);
          } else {
            setImg(img - 1);
          }
        }}
      >
        <img
          style={{ width: "30%" }}
          src="https://cdn-icons-png.flaticon.com/128/3183/3183354.png"
          alt=""
        />
      </button>
      <div style={{ position: "absolute", right: "30%", bottom: "20%" }}>
        {ImgArr.map((i, j) => {
          if (j === img) {
            return (
              <div key={j}>
                <img src={i} alt="" />
              </div>
            );
          }
        })}
      </div>
      <button
        style={{
          position: "absolute",
          right: "20%",
          bottom: "45%",
          width: "80px",
          borderRadius: "30px",
        }}
        onClick={() => {
          if (img == ImgArr.length - 1) {
            setImg(0);
          } else {
            setImg(img + 1);
          }
        }}
      >
        <img
          style={{ width: "30%" }}
          src="https://cdn-icons-png.flaticon.com/128/15412/15412425.png"
          alt=""
        />
      </button>
    </div>
  );
}
