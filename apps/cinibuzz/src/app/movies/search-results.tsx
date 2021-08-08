import { Flex, Heading } from '@chakra-ui/react';
import { MovieListObject, useGETSearchMovie } from '@cinibuzz/tmdb';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieList from './shared/movie-list';

/* eslint-disable-next-line */
export interface SearchResultsProps {}

export function SearchResults(props: SearchResultsProps) {
  const [params] = useSearchParams();
  const searchTerm = params.get('q') ?? '';
  const page = +(params.get('page') ?? '1');
  const [movies, setMovies] = useState<MovieListObject[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useGETSearchMovie(
    { query: searchTerm, page },
    {
      query: {
        enabled: !!searchTerm,
        onSuccess: result => {
          setMovies(movies => [...movies, ...(result.results ?? [])]);
          setTotalPages(result.total_pages ?? 1);
        },
      },
    }
  );

  return (
    <Flex as="section" direction="column" my="12">
      <Heading fontWeight="light" my="8">
        {movies.length ? 'Showing results for' : 'No results for'} '<strong>{searchTerm}</strong>'
      </Heading>
      <MovieList movies={movies} pages={totalPages} />
    </Flex>
  );
}

export default SearchResults;
