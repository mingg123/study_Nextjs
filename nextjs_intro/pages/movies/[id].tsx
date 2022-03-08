import { useRouter } from 'next/router';
import * as React from 'react';

export interface IMovieIdProps {}

export default function MovieId(props: IMovieIdProps) {
  const router = useRouter();
  console.log(router);
  return <div>{router.query.title}</div>;
}
