import "./App.css";

export default function App() {
  function click1() {
    let p1 = document.querySelector(".p1");
    if (p1.style.display == "none") {
      p1.style.display = "block";
      document.querySelector(".img1").src =
        "https://cdn-icons-png.flaticon.com/128/14054/14054146.png";
    } else {
      p1.style.display = "none";
      document.querySelector(".img1").src =
        "https://cdn-icons-png.flaticon.com/128/15804/15804798.png";
    }
  }
  function click2() {
    let p2 = document.querySelector(".p2");
    if (p2.style.display == "none") {
      p2.style.display = "block";
      document.querySelector(".card").style.height = "650px";
      document.querySelector(".img2").src =
        "https://cdn-icons-png.flaticon.com/128/14054/14054146.png";
    } else {
      p2.style.display = "none";
      document.querySelector(".img2").src =
        "https://cdn-icons-png.flaticon.com/128/15804/15804798.png";
      document.querySelector(".card").style.height = "500px";
    }
  }

  function click3() {
    let p3 = document.querySelector(".p3");
    if (p3.style.display == "none") {
      p3.style.display = "block";
      document.querySelector(".card").style.height = "700px";
      document.querySelector(".img3").src =
        "https://cdn-icons-png.flaticon.com/128/14054/14054146.png";
    } else {
      p3.style.display = "none";
      document.querySelector(".img3").src =
        "https://cdn-icons-png.flaticon.com/128/15804/15804798.png";
      document.querySelector(".card").style.height = "550px";
    }
  }
  return (
    <div>
      <div>
        <h2>Project 2 : FAQ/Accordion</h2>
      </div>

      <div
        className="card border-black "
        style={{
          background: "blue",
          width: "600px",
          height: "400px",
          borderRadius: "20px",
        }}
      >
        <h2 className="text-white my-3">Frequently Asked Question</h2>

        <div className="p-2">
          <h3 className="bg-white p-2">
            Is this is a good Product?
            <img
              className="img1"
              src="https://cdn-icons-png.flaticon.com/128/15804/15804798.png"
              alt=""
              style={{ width: "30px", position: "absolute", right: "10%" }}
              onClick={() => {
                click1();
              }}
            />
            <p
              className="p1"
              style={{
                display: "none",
                fontSize: "15px",
                fontWeight: "normal",
                padding: "15px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi
              quam facilis! Vel est a possimus ut amet aliquid unde!
            </p>
          </h3>
        </div>

        <div className="p-2">
          <h3 className="bg-white p-2">
            How much does it cost?
            <img
              className="img2"
              src="https://cdn-icons-png.flaticon.com/128/15804/15804798.png"
              alt=""
              style={{ width: "30px", position: "absolute", right: "10%" }}
              onClick={() => {
                click2();
              }}
            />
            <p
              className="p2"
              style={{
                display: "none",
                fontSize: "15px",
                fontWeight: "normal",
                padding: "15px",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              pariatur architecto quisquam consequatur, inventore minima
              incidunt minus a similique, quos delectus fugit repellendus aut
              quam voluptates. Animi nostrum illo eveniet?
            </p>
          </h3>
        </div>

        <div className="p-2">
          <h3 className="bg-white p-2">
            When can I get it?
            <img
              className="img3"
              src="https://cdn-icons-png.flaticon.com/128/15804/15804798.png"
              alt=""
              style={{ width: "30px", position: "absolute", right: "10%" }}
              onClick={() => {
                click3();
              }}
            />
            <p
              className="p3"
              style={{
                display: "none",
                fontSize: "15px",
                fontWeight: "normal",
                padding: "15px",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
              quibusdam blanditiis. Dolorem, iste adipisci amet ab sint et
              consequatur at quidem tempora totam voluptas laudantium.
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
}
