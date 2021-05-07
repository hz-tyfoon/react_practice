import Father from "./Father";
import { useEffect } from "react";

export default function Grandfather({ allStates }) {
  console.log("--Grandfather", allStates);
  const { s1, s2, s3 } = allStates;

  useEffect(() => {
    console.log("useEffect grandfather: empty array as dependecy");
  }, []);

  useEffect(() => {
    console.log("useEffect grandfather: s1 changed, so this fired");
  }, [s1]);

  useEffect(() => {
    console.log("useEffect grandfather: s2 changed, so this fired");
  }, [s2]);

  useEffect(() => {
    console.log("useEffect grandfather: s3 changed, so this fired");
  }, [s3]);

  return (
    <div>
      <h2>This is GrandFather</h2>
      <Father allStates={allStates} />
    </div>
  );
}
