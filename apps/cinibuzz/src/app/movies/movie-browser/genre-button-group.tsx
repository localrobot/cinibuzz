import { Flex } from '@chakra-ui/react';
import { MovieListObject, useGETGenreMovieList } from '@cinibuzz/tmdb';
import { useCallback, useState } from 'react';

import GenreButton from './genre-button';
import NewReleaseButton from './new-release-button';
import UpcomingReleaseButton from './upcoming-release-button';

export interface GenreButtonGroupProps {
  onSelect: (data: [movies: MovieListObject[], totalPages: number]) => void;
}

export function GenreButtonGroup(props: GenreButtonGroupProps) {
  const { data } = useGETGenreMovieList();
  const [selectedGenre, setSelectedGenre] = useState(-1);

  const handleSelection = useCallback(
    (id: number, result: [movies: MovieListObject[], totalPages: number]) => {
      setSelectedGenre(id);
      props.onSelect(result);
    },
    [props]
  );

  return (
    <Flex gridGap="2" py="4" overflow="auto" mb="8">
      <NewReleaseButton selected={selectedGenre === -1} onSelect={result => handleSelection(-1, result)} />
      <UpcomingReleaseButton selected={selectedGenre === -2} onSelect={result => handleSelection(-2, result)} />

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
