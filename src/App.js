import "./index.css";
import Circle from "./components/Circle";
import { useState } from "react";

function App() {
  const [move, setMove] = useState({ left: 12 });

  console.log(move);

  let movement = (e) => {
    if (e.clientX < 436) {
      setMove({ ...move, left: move.left + 19 });
    } else {
      setMove({ ...move, left: move.left - 19 });
    }
  };

  return (
    <div className="App" onClick={movement}>
      <div className="container">
        <div className="bar" style={{ left: `${move.left}%` }}></div>
        <Circle number={1} color="orangered" />
        <Circle number={2} color="blue" />
        <Circle number={3} color="silver" />
        <Circle number={4} color="purple" />
        <Circle number={5} color="pink" />
      </div>
    </div>
  );
}

export default App;
