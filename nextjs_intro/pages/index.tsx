import axios from 'axios';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Seo } from '../components/Seo';

interface Movie {
  poster_path: string | null;
  id: number;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `/api/movies`
          // `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
    // console.log('fetch');
    // async () => {
    //   console.log('hihi');
    //   const response = await axios({
    //     url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    //     method: 'get',
    //   });
    //   if (response) {
    //     console.log(response);
    //   }
    // }();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map(movie => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx global>{`
        a {
          color: white;
        }
        img {
          width: 300px;
          height: 500px;
        }
      `}</style>
    </div>
  );
}
