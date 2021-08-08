import { AspectRatio, Image } from '@chakra-ui/react';
import { GETMovieMovieIdImages200BackdropsItem, useGETConfiguration } from '@cinibuzz/tmdb';

import Carousel from '../../../common/carousel';

export interface BackdropsPanelProps {
  backdrops: GETMovieMovieIdImages200BackdropsItem[];
}

export function BackdropsPanel(props: BackdropsPanelProps) {
  const { data: config } = useGETConfiguration();

  return (
    <Carousel itemsCount={props.backdrops.length}>
      {({ currentIndex }) => (
        <AspectRatio ratio={16 / 9}>
          <Image
            src={`${config?.images?.secure_base_url}${config?.images?.backdrop_sizes?.[2]}${props.backdrops[currentIndex].file_path}`}
            objectFit="contain"
            height="full"
            width="full"
            rounded="2xl"
          />
        </AspectRatio>
      )}
    </Carousel>
  );
}

export default BackdropsPanel;
