import { Button, Flex, SimpleGrid } from '@chakra-ui/react';
import { MovieListObject } from '@cinibuzz/tmdb';
import { useSearchParams } from 'react-router-dom';

import MovieCard from './movie-card';

export interface MovieListProps {
  movies: MovieListObject[];
  pages: number;
}

export function MovieList(props: MovieListProps) {
  const [params, setParams] = useSearchParams();
  const page = +(params.get('page') ?? '1');

  return (
    <Flex direction="column" gridGap="8">
      <SimpleGrid as="section" columns={4} gap={6}>
        {props.movies.map(movie => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </SimpleGrid>

      {page < props.pages && (
        <Button
          variant="ghost"
          colorScheme="blackAlpha"
          onClick={() => {
            params.set('page', `${page + 1}`);
            setParams(params);
          }}
        >
          View More
        </Button>
      )}
    </Flex>
  );
}

export default MovieList;
