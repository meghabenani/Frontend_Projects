import "./App.css";
import { useState, useEffect } from "react";
import Inputbox from "./Hooks/Components/Inputbox";

export default function App() {
  let [amount, setAmount] = useState(0);
  let [from, setFrom] = useState("usd");
  return (
    <div>
      <Inputbox
        label={"from"}
        amount={amount}
        currentMoney={from}
        changeValue={(amount) => {
          setAmount(amount);
        }}
        changeCurrency={() => {}}
      />
    </div>
  );
}
