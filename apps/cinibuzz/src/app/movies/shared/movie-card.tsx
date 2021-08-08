import { MovieListObject, useGETConfiguration } from '@cinibuzz/tmdb';

import { formatDate } from '../../utils';
import ImageCard from './image-card';

/* eslint-disable-next-line */
export interface MovieCardProps extends MovieListObject {}

export function MovieCard(props: MovieCardProps) {
  const { data: config } = useGETConfiguration();

  return config ? (
    <ImageCard
      imgSrc={`${config.images?.secure_base_url}${config.images?.poster_sizes?.[3]}${props.poster_path}`}
      title={props.title ?? ''}
      subTitle={formatDate(props.release_date)}
      linkTo={`/movies/${props.id}`}
    />
  ) : null;
}

export default MovieCard;
