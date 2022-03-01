import { FC, useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <NavBar />
      <h1>Hello {counter}</h1>
      {/* <button
        onClick={() => {
          setCounter(counter + 1);
          // setCounter((prev) => prev + 1);
        }}
      >
        +
      </button> */}
    </div>
  );
}

// library는 내가원는 것을 사용하는것
// framework는 나의 코드를 불러오는것.
// 코드를 적절한 위치에 적기만 한다면
// 프레임워크가 코드를 불러와서 자동으로 보여준다
