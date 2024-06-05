import "./App.css";
import { useState, useEffect, useCallback, useRef } from "react";

export default function App() {
  let [length, setLength] = useState(8);
  let [numcheck, setNumcheck] = useState(false);
  let [charcheck, setCharcheck] = useState(false);
  let [pass, setPass] = useState("");

  let passRef = useRef(null);

  let password = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    {
      numcheck ? (str += "0123456789") : "";
    }
    {
      charcheck ? (str += "!@#$%^&*()<>?;") : "";
    }

    let p = "";

    for (let i = 1; i <= length; i++) {
      p += str[Math.floor(Math.random() * str.length - 1) + 1];
    }
    setPass(p);
  }, [length, numcheck, charcheck, setPass]);

  useEffect(() => {
    password();
  }, [numcheck, charcheck, length, password]);

  let clipToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  return (
    <div className="container card w-50" style={{ border: "1px solid black" }}>
      <h3 style={{ marginBottom: "30px" }}>Password Generator</h3>

      <form action="#">
        <div className="btn-group">
          <input
            type="text"
            id="pass"
            readOnly
            placeholder="Enter password"
            value={pass}
            ref={passRef}
          />

          <button
            className="btn btn-secondary"
            onClick={() => {
              clipToClipboard();
            }}
          >
            Copy
          </button>
        </div>

        <div className="mt-3">
          <label
            htmlFor="range"
            className="m-2"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          >
            <input
              type="range"
              id="range"
              defaultValue={length}
              className="m-2"
            />
            Length ({length})
          </label>
          <label htmlFor="num" className="m-1">
            <input
              type="checkbox"
              className="m-1"
              id="num"
              defaultChecked={numcheck}
              onChange={() => {
                setNumcheck(!numcheck);
              }}
            />
            Numbers
          </label>

          <label htmlFor="char" className="m-1">
            <input
              type="checkbox"
              className="m-1"
              id="char"
              defaultChecked={charcheck}
              onChange={() => {
                setCharcheck(!charcheck);
              }}
            />
            Characters
          </label>
        </div>
      </form>
    </div>
  );
}
