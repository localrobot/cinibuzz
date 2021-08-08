import { Flex } from '@chakra-ui/react';
import { useGETMovieMovieId, useGETMovieMovieIdCredits } from '@cinibuzz/tmdb';
import { useParams } from 'react-router-dom';

import MovieCast from './movie-cast';
import MovieHeader from './movie-header';
import MovieKeywords from './movie-keywords';
import MovieMedia from './movie-media';
import MovieOverview from './movie-overview';
import MovieRecommendations from './movie-recommendations';

/* eslint-disable-next-line */
export interface MovieDetailProps {}

export function MovieDetail(props: MovieDetailProps) {
  const { movieId } = useParams();
  const { data: movie } = useGETMovieMovieId(+movieId);
  const { data: credits } = useGETMovieMovieIdCredits(+movieId);

  return (
    <Flex as="section" direction="column" gridGap="16" mb="36">
      <MovieHeader {...movie} />
      <MovieOverview movie={movie} crew={credits?.crew ?? []} />
      <MovieCast cast={credits?.cast ?? []} />
      <Flex gridGap="8">
        <MovieMedia mostPopulalarImageSrc={movie?.backdrop_path ?? ''} />
        <MovieKeywords />
      </Flex>
      <MovieRecommendations />
    </Flex>
  );
}

export default MovieDetail;
