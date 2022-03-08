import axios from 'axios';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Seo } from '../components/Seo';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

interface Result {
  results: Movie[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { results } = await (
    await fetch(
      `http://localhost:3000/api/movies`
      // `/api/movies`
    )
  ).json();
  return {
    props: {
      results,
    },
  };
};

const Home: FC<Result> = ({ results }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const router = useRouter();
  const onClick = (id: number, title: string) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          id,
          title: title,
        },
      },
      `/movies/${id}`
    );
  };
  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (
  //       await fetch(
  //         `/api/movies`
  //         // `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  //       )
  //     ).json();
  //     setMovies(results);
  //   })();
  // }, []);
  return (
    <div>
      <Seo title="Home" />
      {/* {!movies && <h4>Loading...</h4>} */}
      {results?.map(movie => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <Link href={`/movies/${movie.id}`} key={movie.id}>
            <h4>{movie.original_title}</h4>
          </Link>
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
};

export default Home;
