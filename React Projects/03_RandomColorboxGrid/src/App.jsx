import "./App.css";
import Colorbox from "./Colorbox";

export default function App() {
  let arr = [];

  for (let i = 1; i <= 25; i++) {
    arr.push(<Colorbox />);
  }
  return (
    <div
      style={{
        display: "flex",
        height: "200px",
        width: "200px",
        flexWrap: "wrap",
        position: "absolute",
        bottom: "300px",
        left: "600px",
      }}
    >
      {arr}
    </div>
  );
}
