import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Seo } from '../components/Seo';

const API_KEY = '8c0de685bc8b7cd7bd8765231de30ac8';
export default function Home() {
  // const [counter, setCounter] = useState(0);
  const [movies, setMovies] = useState([]);
  useEffect(() => {}, []);
  return (
    <div>
      <Seo title="Home" />
      {/* <h1>Hello {counter}</h1>
       */}
      <h1>Hello </h1>
      {/* <button
        onClick={() => {
          // setCounter(counter + 1);
          // setCounter((prev) => prev + 1);
        }}
      >
        +
      </button> */}
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  );
}
