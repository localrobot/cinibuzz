import { MovieListObject, useGETMovieNowPlaying } from '@cinibuzz/tmdb';
import { useState } from 'react';

import ToggleButton from './toggle-button';

export interface NewReleaseButtonProps {
  selected: boolean;
  onSelect: (movies: MovieListObject[]) => void;
}

export function NewReleaseButton(props: NewReleaseButtonProps) {
  const [enabled, setEnabled] = useState(props.selected);

  useGETMovieNowPlaying({
    query: {
      enabled,
      onSettled: () => setEnabled(false),
      onSuccess: data => props.onSelect(data.results ?? []),
    },
  });

  return (
    <ToggleButton selected={props.selected} onClick={() => setEnabled(true)}>
      New Release
    </ToggleButton>
  );
}

export default NewReleaseButton;
