import { Icon, Image, LinkBox, Text } from '@chakra-ui/react';
import { MovieListObject, useGETConfiguration } from '@cinibuzz/tmdb';
import { SiThemoviedatabase } from 'react-icons/si';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface MovieCardProps extends MovieListObject {}

export function MovieCard(props: MovieCardProps) {
  const { data: config } = useGETConfiguration();

  return config ? (
    <LinkBox>
      {props.poster_path ? (
        <Image
          src={`${config.images?.secure_base_url}/${config.images?.poster_sizes?.[0]}/${props.poster_path}`}
          alt={props.title}
        />
      ) : (
        <Icon as={SiThemoviedatabase} />
      )}
      <Link to={`/movies/${props.id}`}>{props.title}</Link>
      <Text as="time">{props.release_date}</Text>
    </LinkBox>
  ) : null;
}

export default MovieCard;
