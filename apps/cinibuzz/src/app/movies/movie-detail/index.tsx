import { useParams } from 'react-router-dom';

/* eslint-disable-next-line */
export interface MovieDetailProps {}

export function MovieDetail(props: MovieDetailProps) {
  const { movieId } = useParams();

  return (
    <div>
      <h1>Welcome to MovieDetail! ${movieId}</h1>
    </div>
  );
}

export default MovieDetail;
