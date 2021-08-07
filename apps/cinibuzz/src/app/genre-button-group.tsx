import { Flex } from '@chakra-ui/react';
import { MovieListObject, useGETGenreMovieList } from '@cinibuzz/tmdb';

import GenreButton from './genre-button';
import NewReleaseButton from './new-release-button';
import UpcomingReleaseButton from './upcoming-release-button';

export interface GenreButtonGroupProps {
  onAfterData: (movies: MovieListObject[]) => void;
}

export function GenreButtonGroup(props: GenreButtonGroupProps) {
  const { data } = useGETGenreMovieList();

  return (
    <Flex gridGap="2" flexWrap="wrap">
      <NewReleaseButton onAfterData={data => props.onAfterData(data.results ?? [])} />
      <UpcomingReleaseButton onAfterData={data => props.onAfterData(data.results ?? [])} />

      {data?.genres?.map(genre => (
        <GenreButton key={genre.id} {...genre} onAfterData={data => props.onAfterData(data.results ?? [])} />
      ))}
    </Flex>
  );
}

export default GenreButtonGroup;
