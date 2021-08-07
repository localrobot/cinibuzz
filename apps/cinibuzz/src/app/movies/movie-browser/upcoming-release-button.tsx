import { Button } from '@chakra-ui/react';
import { GETMovieUpcoming200, useGETMovieUpcoming } from '@cinibuzz/tmdb';
import { useState } from 'react';

export interface UpcomingReleaseButtonProps {
  onAfterData: (movies: GETMovieUpcoming200) => void;
}

export function UpcomingReleaseButton(props: UpcomingReleaseButtonProps) {
  const [enabled, setEnabled] = useState(false);

  useGETMovieUpcoming({
    query: {
      enabled,
      onSettled: () => setEnabled(false),
      onSuccess: data => props.onAfterData(data),
    },
  });

  return (
    <Button variant="ghost" onClick={() => setEnabled(true)}>
      Upcoming
    </Button>
  );
}

export default UpcomingReleaseButton;
