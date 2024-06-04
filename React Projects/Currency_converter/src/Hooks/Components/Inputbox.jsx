export default function Inputbox({
  label,
  amount,
  changeValue,
  currentMoney = "usd",
  changeCurrency,
  currencyOption = [],
}) {
  return (
    <div className="card w-50 container" style={{ border: "1px solid black" }}>
      <div className="row">
        <div className="col-6">
          <div>{label}</div>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              changeValue(e.target.value);
            }}
          />
        </div>
        <div className="col-6">
          <div>Currency</div>
          <select
            name="currency"
            value={currentMoney}
            onChange={(e) => {
              changeCurrency(e.target.value);
            }}
          >
            {currencyOption.map((i) => {
              <option value={i}>{i}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}
