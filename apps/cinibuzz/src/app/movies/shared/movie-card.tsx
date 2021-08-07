import { Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { MovieListObject, useGETConfiguration } from '@cinibuzz/tmdb';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface MovieCardProps extends MovieListObject {}

export function MovieCard(props: MovieCardProps) {
  const { data: config } = useGETConfiguration();

  return config ? (
    <LinkBox d="flex" flexDirection="column">
      <Image
        src={`${config.images?.secure_base_url}/${config.images?.poster_sizes?.[3]}/${props.poster_path}`}
        alt={props.title}
        rounded="2xl"
        objectFit="cover"
        height="full"
        mb="2"
        fallbackSrc="https://via.placeholder.com/150"
      />

      <Text isTruncated fontSize="lg" mb="1">
        <LinkOverlay as={Link} to={`/movies/${props.id}`} fontWeight="semibold" title={props.title}>
          {props.title}
        </LinkOverlay>
      </Text>

      <Text d="block" as="time" dateTime={props.release_date} fontSize="medium" color="gray.500">
        {format(new Date(props.release_date ?? ''), 'MMM dd, yyyy')}
      </Text>
    </LinkBox>
  ) : null;
}

export default MovieCard;
