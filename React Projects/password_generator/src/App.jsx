import "./App.css";
import { useState, useEffect, useCallback, useRef } from "react";

export default function App() {
  let [len, setLen] = useState(8);
  let [password, setPassword] = useState("");
  let [num, setNum] = useState(false);
  let [char, setChar] = useState(false);

  let passRef = useRef(null);

  let passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num == true) {
      str += "0123456789";
    }

    if (char == true) {
      str += "!@#$%^&*()<>?+-{}[]";
    }

    for (let i = 1; i <= len; i++) {
      pass += str[Math.floor(Math.random() * str.length - 1) + 1];
    }
    setPassword(pass);
  }, [len, char, num, setPassword]);

  useEffect(() => {
    passGenerator();
  }, [len, num, char, passGenerator]);

  let clipToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div>
      <div className="card bg-secondary">
        <h2>Password Generator</h2>
        <label htmlFor="pass" className="m-4">
          <input
            type="text"
            className=" p-1 m-0"
            id="pass"
            defaultValue={password}
            placeholder="Enter a password"
            ref={passRef}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              clipToClipboard();
            }}
          >
            Copy
          </button>
        </label>

        <div>
          <input
            type="range"
            id="len"
            min="0"
            defaultValue={len}
            max="100"
            onChange={() => {
              setLen(document.querySelector("#len").value);
            }}
          />
          <label htmlFor="len">Length ({len})</label>

          <input
            type="checkbox"
            id="num"
            defaultChecked={num}
            onChange={() => {
              setNum((prev) => !prev);
            }}
          />
          <label htmlFor="num">Numbers</label>

          <input
            type="checkbox"
            id="char"
            defaultChecked={char}
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </div>
  );
}
