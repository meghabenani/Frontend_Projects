export default function Inputbox() {
  let label = "from";
  let amount = 0;
  return (
    <div className="card w-75 container">
      <div className="row">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
          className="col-6"
        >
          <label htmlFor="num">{label}</label>
          <input
            type="number"
            id="num"
            value={amount}
            style={{
              border: "0px",
              width: "50px",
            }}
            onChange={() => {}}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
          }}
          className="col-6"
        >
          <div>Currency Type</div>
          <select name="currency" style={{ border: "0px", width: "50px" }}>
            <option value="usd">usd</option>
          </select>
        </div>
      </div>
    </div>
  );
}
