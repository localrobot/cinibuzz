import { Button } from '@chakra-ui/react';
import { GETMovieNowPlaying200, useGETMovieNowPlaying } from '@cinibuzz/tmdb';
import { useState } from 'react';

export interface NewReleaseButtonProps {
  onAfterData: (newReleases: GETMovieNowPlaying200) => void;
}

export function NewReleaseButton(props: NewReleaseButtonProps) {
  const [enabled, setEnabled] = useState(false);

  useGETMovieNowPlaying({
    query: {
      enabled,
      onSettled: () => setEnabled(false),
      onSuccess: data => props.onAfterData(data),
    },
  });

  return (
    <Button variant="ghost" onClick={() => setEnabled(true)}>
      New Release
    </Button>
  );
}

export default NewReleaseButton;
