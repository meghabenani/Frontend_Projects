import "./App.css";
import { useState, useEffect } from "react";
import UseCurrencyInfo from "./Hooks/useCurrencyInfo";
import Inputbox from "./Components/Inputbox";

export default function App() {
  return (
    <div>
      <h1 className="mb-5">Currency Converter</h1>
      <Inputbox />
    </div>
  );
}
