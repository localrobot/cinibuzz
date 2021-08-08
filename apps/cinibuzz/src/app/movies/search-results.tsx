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
    <Flex as="section" direction="column" my="12">
      <Heading fontWeight="light" my="8">
        {movies?.results?.length ? 'Showing results for' : 'No results for'} '<strong>{searchTerm}</strong>'
      </Heading>
      <MovieList movies={movies?.results ?? []} />
    </Flex>
  );
}

export default SearchResults;
