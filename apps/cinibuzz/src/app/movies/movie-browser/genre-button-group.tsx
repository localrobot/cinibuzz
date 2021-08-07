import { Flex } from '@chakra-ui/react';
import { MovieListObject, useGETGenreMovieList } from '@cinibuzz/tmdb';
import { useCallback, useState } from 'react';

import GenreButton from './genre-button';
import NewReleaseButton from './new-release-button';
import UpcomingReleaseButton from './upcoming-release-button';

export interface GenreButtonGroupProps {
  onSelect: (movies: MovieListObject[]) => void;
}

export function GenreButtonGroup(props: GenreButtonGroupProps) {
  const { data } = useGETGenreMovieList();
  const [selectedGenre, setSelectedGenre] = useState(-1);

  const handleSelection = useCallback(
    (id: number, movies: MovieListObject[]) => {
      setSelectedGenre(id);
      props.onSelect(movies);
    },
    [props]
  );

  return (
    <Flex gridGap="2" py="4" overflow="auto" mb="8">
      <NewReleaseButton selected={selectedGenre === -1} onSelect={movies => handleSelection(-1, movies)} />
      <UpcomingReleaseButton selected={selectedGenre === -2} onSelect={movies => handleSelection(-2, movies)} />

      {data?.genres?.map(genre => (
        <GenreButton
          key={genre.id}
          selected={selectedGenre === genre.id}
          {...genre}
          onSelect={movies => handleSelection(genre.id ?? 0, movies)}
        />
      ))}
    </Flex>
  );
}

export default GenreButtonGroup;
