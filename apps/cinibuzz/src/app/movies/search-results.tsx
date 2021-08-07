import { Flex, Heading } from '@chakra-ui/react';
import { useGETSearchMovie } from '@cinibuzz/tmdb';
import { useSearchParams } from 'react-router-dom';

import MovieList from './shared/movie-list';

/* eslint-disable-next-line */
export interface SearchResultsProps {}

export function SearchResults(props: SearchResultsProps) {
  const [params] = useSearchParams();
  const searchTerm = params.get('q') ?? '';
  const { data: movies } = useGETSearchMovie({ query: searchTerm }, { query: { enabled: !!searchTerm } });

  return (
    <Flex direction="column" my="6">
      <Heading>
        Showing results for '<strong>{searchTerm}</strong>'
      </Heading>
      <MovieList movies={movies?.results ?? []} />
    </Flex>
  );
}

export default SearchResults;
