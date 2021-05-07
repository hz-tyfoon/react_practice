import Child from "./Child";
import { useEffect } from "react";

export default function Father({ allStates }) {
  console.log("--Father", allStates);
  const { s1, s2, s3 } = allStates;

  useEffect(() => {
    console.log("useEffect Father: empty array as dependecy");
  }, []);

  useEffect(() => {
    console.log("useEffect Father: s1 changed, so this fired");
  }, [s1]);

  useEffect(() => {
    console.log("useEffect Father: s2 changed, so this fired");
  }, [s2]);

  useEffect(() => {
    console.log("useEffect Father: s3 changed, so this fired");
  }, [s3]);

  return (
    <div>
      <h2>This is Father</h2>

      <Child allStates={allStates} />
    </div>
  );
}
