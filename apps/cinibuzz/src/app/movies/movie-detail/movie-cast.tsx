import { Box, Grid, Heading } from '@chakra-ui/react';
import { GETMovieMovieIdCredits200CastItem, useGETConfiguration } from '@cinibuzz/tmdb';

import ImageCard from '../shared/image-card';

export interface MovieCastProps {
  cast: GETMovieMovieIdCredits200CastItem[];
}

export function MovieCast(props: MovieCastProps) {
  const { data: config } = useGETConfiguration();

  return (
    <Box>
      <Heading fontSize="xl" fontWeight="600" mb="4">
        Cast
      </Heading>

      <Grid gap="6" overflow="auto" templateColumns={`repeat(${props.cast.length}, 240px)`}>
        {props.cast.map(actor => (
          <ImageCard
            gridRow="1"
            key={actor.id}
            imgSrc={`${config?.images?.base_url}${config?.images?.profile_sizes?.[3]}${actor.profile_path}`}
            title={actor.name ?? ''}
            subTitle={actor.character ?? ''}
            linkTo={`results?${new URLSearchParams([['q', actor.name ?? '']]).toString()}`}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default MovieCast;
