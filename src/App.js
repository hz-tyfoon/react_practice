import Grandfather from "./Grandfather";
import { useEffect, useState } from "react";

function App() {
  const [s1, setS1] = useState("state1");
  const [s2, setS2] = useState("state2");
  const [s3, setS3] = useState("state3");

  const onchange = ({ st1, st2, st3 }) => {
    setS1(st1 || s1);
    setS2(st2 || s2);
    setS3(st3 || s3);
  };

  return (
    <div className="App">
      <h2>
        <p>From App s1: {s1} </p>
        <p>From App s2: {s2} </p>
        <p>From App s3: {s3} </p>
      </h2>
      <button onClick={() => setS1(Math.floor(Math.random() * 10000))}>
        change s1
      </button>
      <button onClick={() => setS2(Math.floor(Math.random() * 10000))}>
        change s2
      </button>
      <button onClick={() => setS3(Math.floor(Math.random() * 10000))}>
        change s3
      </button>
      <Grandfather allStates={{ s1, s2, s3, onchange }} />
    </div>
  );
}

export default App;
