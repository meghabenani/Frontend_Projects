import "./App.css";
import { useState } from "react";

let arr = [
  {
    title: "Item 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam quis quasi fugiat ex suscipit dolores doloremque aliquam illum similique!",
  },
  {
    title: "Item 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam quis quasi fugiat ex suscipit dolores doloremque aliquam illum similique!",
  },
  {
    title: "Item 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam quis quasi fugiat ex suscipit dolores doloremque aliquam illum similique!",
  },
  {
    title: "Item 4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam quis quasi fugiat ex suscipit dolores doloremque aliquam illum similique!",
  },
];

export default function App() {
  let [open, setOpen] = useState();
  function change(index) {
    setOpen(open == index ? null : index);
  }
  return (
    <div>
      <h1>React Accordion / FAQ</h1>

      <div className="card container w-50 mt-5">
        {arr.map((i, j) => {
          return (
            <div key={j}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "20px",
                }}
                onClick={() => {
                  change(j);
                }}
              >
                <div>{i.title}</div>
                <div style={{ color: "crimson", fontWeight: "bolder" }}>
                  {open == j ? "-" : "+"}
                </div>
              </div>
              {open === j && (
                <div className="mt-3" style={{ fontWeight: "bold" }}>
                  {i.content}
                </div>
              )}
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
