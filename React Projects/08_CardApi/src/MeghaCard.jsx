import { useState, useEffect } from "react";
export default function MeghaCard() {
  let [data, setData] = useState();

  let api = "https://jsonplaceholder.typicode.com/posts";
  let arr = [];

  async function getData() {
    let d = await fetch(api);
    let res = await d.json();
    res.map((i, j) => {
      arr.push(
        <div className="card container w-50" key={j}>
          <h5>{i.body}</h5>
          <div>{i.title}</div>
          <div>By id: {i.id}</div>

          <br />
        </div>
      );
      setData(arr);
    });
  }

  useEffect(() => {
    getData();
  }, [setData]);

  return (
    <div>
      <div>{data}</div>
    </div>
  );
}
