import { MovieListObject, useGETMovieNowPlaying } from '@cinibuzz/tmdb';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ToggleButton from './toggle-button';

export interface NewReleaseButtonProps {
  selected: boolean;
  onSelect: (data: [movies: MovieListObject[], totalPages: number]) => void;
}

export function NewReleaseButton(props: NewReleaseButtonProps) {
  const [enabled, setEnabled] = useState(props.selected);
  const [params] = useSearchParams();
  const page = +(params.get('page') ?? '1');

  useGETMovieNowPlaying(
    { page },
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
      New Release
    </ToggleButton>
  );
}

export default NewReleaseButton;
