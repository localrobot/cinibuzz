import { SimpleGrid } from '@chakra-ui/react';
import { MovieListObject } from '@cinibuzz/tmdb';

import MovieCard from './movie-card';

export interface MovieListProps {
  movies: MovieListObject[];
}

export function MovieList(props: MovieListProps) {
  return (
    <SimpleGrid as="section" columns={4} gap={6}>
      {props.movies.map(movie => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </SimpleGrid>
  );
}

export default MovieList;
