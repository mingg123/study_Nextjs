import { FC, useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  // const [counter, setCounter] = useState(0);
  return (
    <div>
      <NavBar />
      {/* <h1>Hello {counter}</h1>
       */}
      <h1>Hello </h1>
      <button
        onClick={() => {
          // setCounter(counter + 1);
          // setCounter((prev) => prev + 1);
        }}
      >
        +
      </button>
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  );
}
