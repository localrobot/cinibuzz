import { Flex, Heading } from '@chakra-ui/react';
import { MovieListObject } from '@cinibuzz/tmdb';
import { useState } from 'react';

import MovieList from '../shared/movie-list';
import GenreButtonGroup from './genre-button-group';

/* eslint-disable-next-line */
export interface MovieBrowserProps {}

export function MovieBrowser(props: MovieBrowserProps) {
  const [movies, setMovies] = useState<MovieListObject[]>([]);

  return (
    <Flex direction="column" my="6">
      <Heading fontWeight="light" my="8">
        Browse movies by category
      </Heading>
      <GenreButtonGroup onAfterData={setMovies} />
      <MovieList movies={movies} />
    </Flex>
  );
}

export default MovieBrowser;
