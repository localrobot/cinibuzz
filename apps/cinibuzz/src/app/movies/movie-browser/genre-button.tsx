import { GETGenreMovieList200GenresItem, MovieListObject, useGETDiscoverMovie } from '@cinibuzz/tmdb';
import { useState } from 'react';

import ToggleButton from './toggle-button';

export interface GenreButtonProps extends GETGenreMovieList200GenresItem {
  selected: boolean;
  onSelect: (data: MovieListObject[]) => void;
}

export function GenreButton(props: GenreButtonProps) {
  const [enabled, setEnabled] = useState(props.selected);

  useGETDiscoverMovie(
    { with_genres: `${props.id}` },
    {
      query: {
        enabled,
        onSettled: () => setEnabled(false),
        onSuccess: data => props.onSelect(data.results ?? []),
      },
    }
  );

  return (
    <ToggleButton selected={props.selected} onClick={() => setEnabled(true)}>
      {props.name}
    </ToggleButton>
  );
}

export default GenreButton;
