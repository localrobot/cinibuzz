import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { MovieListObject, useGETConfiguration } from '@cinibuzz/tmdb';

/* eslint-disable-next-line */
export interface MovieCardProps extends MovieListObject {}

export function MovieCard(props: MovieCardProps) {
  const { data: config } = useGETConfiguration();

  return config ? (
    <Box>
      <Image
        src={`${config.images?.secure_base_url}/${config.images?.poster_sizes?.[0]}/${props.poster_path}`}
        alt={props.title}
      />
      <Heading>{props.title}</Heading>
      <Text as="time">{props.release_date}</Text>
    </Box>
  ) : null;
}

export default MovieCard;
