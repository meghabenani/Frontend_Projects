import "./App.css";
import { useState } from "react";
let nextId = 0;

export default function App() {
  let [cart, setCart] = useState([]);
  let [btn, setBtn] = useState("");
  function remove(id) {
    let newItem = cart.filter((i) => {
      return i.id != id;
    });
    setCart(newItem);
  }
  return (
    <div className="container">
      <h1>Shooping List</h1>

      <div
        className="card text-center container border-black"
        style={{ width: "450px" }}
      >
        <div>
          <h2>Items To Buy</h2>
          <form
            action="#"
            onSubmit={(e) => {
              let value = document.querySelector("input").value;
              setCart([...cart, { id: nextId++, item: value }]);
              setBtn("X");
              document.querySelector("input").value = " ";
              e.target.reset();
            }}
          >
            <label htmlFor="item" className="m-4">
              <input
                type="text"
                id="item"
                placeholder="Add a new Item"
                required
              />
              <button>Add</button>
            </label>
          </form>
          {cart.map((i) => {
            return (
              <div
                key={i.id}
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <p>{i.item}</p>
                <p
                  onClick={() => {
                    remove(i.id);
                  }}
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  {btn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
