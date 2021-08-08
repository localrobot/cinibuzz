import { GETGenreMovieList200GenresItem, MovieListObject, useGETDiscoverMovie } from '@cinibuzz/tmdb';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ToggleButton from './toggle-button';

export interface GenreButtonProps extends GETGenreMovieList200GenresItem {
  selected: boolean;
  onSelect: (data: [movies: MovieListObject[], totalPages: number]) => void;
}

export function GenreButton(props: GenreButtonProps) {
  const [enabled, setEnabled] = useState(props.selected);
  const [params] = useSearchParams();
  const page = +(params.get('page') ?? '1');

  useGETDiscoverMovie(
    { with_genres: `${props.id}`, page },
    {
      query: {
        enabled,
        onSettled: () => setEnabled(false),
        onSuccess: data => props.onSelect([data.results ?? [], data.total_pages ?? 1]),
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
