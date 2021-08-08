import { Flex, Heading, Text } from '@chakra-ui/react';
import { MovieListObject } from '@cinibuzz/tmdb';
import { useState } from 'react';

import MovieList from '../shared/movie-list';
import GenreButtonGroup from './genre-button-group';

/* eslint-disable-next-line */
export interface MovieBrowserProps {}

export function MovieBrowser(props: MovieBrowserProps) {
  const [movies, setMovies] = useState<MovieListObject[]>([]);

  return (
    <Flex as="section" direction="column" my="12">
      <Heading fontWeight="light" my="8">
        Browse movies by category
      </Heading>
      <GenreButtonGroup onSelect={setMovies} />
      {movies.length ? <MovieList movies={movies} /> : <Text>No Movies Available</Text>}
    </Flex>
  );
}

export default MovieBrowser;
