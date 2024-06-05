import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  let [data, setData] = useState({});
  let [amount, setAmount] = useState(1);
  let [fromvalue, setFromvalue] = useState("inr");
  let [tovalue, setTovalue] = useState("usd");
  let [value, setValue] = useState(1);

  let [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCountry(Object.keys(res));
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromvalue}.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res[fromvalue]);
      });
  }, [fromvalue]);

  useEffect(() => {
    let rate = data[tovalue];
    setValue(rate * amount);
  }, [fromvalue, tovalue, amount]);

  return (
    <div
      className="card w-75 container border-black"
      style={{ backgroundColor: "papayawhip" }}
    >
      <h1 className="mb-5">Currency Converter</h1>

      <div className="row mt-4">
        <div className="col-5">
          <label htmlFor="amount" className="m-2">
            Amount
          </label>
          <br />
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>

        <div className="col-3">
          <label htmlFor="from" className="m-2">
            From{" "}
          </label>
          <br />
          <select
            id="from"
            style={{ width: "80px" }}
            onChange={(e) => {
              setFromvalue(e.target.value);
            }}
          >
            <option value="inr">{fromvalue}</option>
            {country.map((i, j) => {
              return (
                <option value={i} key={j}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-1">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10476/10476101.png"
            style={{ width: "30px", marginTop: "30px" }}
            alt=""
            onClick={() => {
              setFromvalue(tovalue);
              setTovalue(fromvalue);
            }}
          />
        </div>
        <div className="col-3">
          <label htmlFor="to" className="m-2">
            To
          </label>
          <br />
          <select
            id="to"
            style={{ width: "80px" }}
            onChange={(e) => {
              setTovalue(e.target.value);
            }}
          >
            <option value="usd">{tovalue}</option>

            {country.map((i, j) => {
              return (
                <option value={i} key={j}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <br />
      <h2 className="mt-5">Converted Amount : </h2>

      <h2 className="m-4" style={{ color: "purple" }}>
        {amount} {fromvalue} ={value} {tovalue}
      </h2>
    </div>
  );
}
