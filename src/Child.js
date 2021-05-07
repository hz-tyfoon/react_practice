import { useEffect, useState } from "react";

export default function Child({ allStates }) {
  console.log("--Child", { allStates });

  const [state1, setState1] = useState("cool");
  const [state2, setState2] = useState("nice");
  const [state3, setState3] = useState("joss");

  const { s1, s2, s3, onchange } = allStates;

  useEffect(() => {
    console.log("useEffect Child: empty array as dependecy", {
      s1,
      s2,
      s3,
    });
  }, []);

  useEffect(() => {
    console.log("useEffect Child: state1 changed, so this fired", {
      onchange,
      state1,
    });
    onchange({ st1: state1 });
  }, [state1]);

  useEffect(() => {
    console.log("useEffect Child: state2 changed, so this fired");
  }, [state2]);

  useEffect(() => {
    console.log("useEffect Child: state3 changed, so this fired");
  }, [state3]);

  console.log("useEffect Child: open space", {
    s1,
    s2,
    s3,
  });
  return (
    <div>
      <h3>This is CHild</h3>
      <button
        onClick={() => {
          const val = state1 === "cool" ? "cooler" : "cool";

          setState1(val);
        }}
      >
        change{" "}
      </button>
    </div>
  );
}
