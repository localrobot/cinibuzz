import { Button } from '@chakra-ui/react';
import { GETDiscoverMovie200, GETGenreMovieList200GenresItem, useGETDiscoverMovie } from '@cinibuzz/tmdb';
import { useState } from 'react';

export interface GenreButtonProps extends GETGenreMovieList200GenresItem {
  onAfterData: (data: GETDiscoverMovie200) => void;
}

export function GenreButton(props: GenreButtonProps) {
  const [enabled, setEnabled] = useState(false);

  useGETDiscoverMovie(
    { with_genres: props.name },
    {
      query: {
        enabled,
        onSettled: () => setEnabled(false),
        onSuccess: data => props.onAfterData(data),
      },
    }
  );

  return (
    <Button variant="ghost" onClick={() => setEnabled(true)}>
      {props.name}
    </Button>
  );
}

export default GenreButton;
