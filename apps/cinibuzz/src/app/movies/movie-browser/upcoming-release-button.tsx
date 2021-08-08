import { MovieListObject, useGETMovieUpcoming } from '@cinibuzz/tmdb';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ToggleButton from './toggle-button';

export interface UpcomingReleaseButtonProps {
  selected: boolean;
  onSelect: (data: [movies: MovieListObject[], totalPages: number]) => void;
}

export function UpcomingReleaseButton(props: UpcomingReleaseButtonProps) {
  const [enabled, setEnabled] = useState(props.selected);
  const [params] = useSearchParams();
  const page = +(params.get('page') ?? '1');

  useGETMovieUpcoming(
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
      Upcoming
    </ToggleButton>
  );
}

export default UpcomingReleaseButton;
