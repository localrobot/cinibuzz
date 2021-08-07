import { MovieListObject, useGETMovieUpcoming } from '@cinibuzz/tmdb';
import { useState } from 'react';

import ToggleButton from './toggle-button';

export interface UpcomingReleaseButtonProps {
  selected: boolean;
  onSelect: (movies: MovieListObject[]) => void;
}

export function UpcomingReleaseButton(props: UpcomingReleaseButtonProps) {
  const [enabled, setEnabled] = useState(props.selected);

  useGETMovieUpcoming({
    query: {
      enabled,
      onSettled: () => setEnabled(false),
      onSuccess: data => props.onSelect(data.results ?? []),
    },
  });

  return (
    <ToggleButton selected={props.selected} onClick={() => setEnabled(true)}>
      Upcoming
    </ToggleButton>
  );
}

export default UpcomingReleaseButton;
