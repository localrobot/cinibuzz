import { Image, Text } from '@chakra-ui/react';
import { GETMovieMovieIdImages200PostersItem, useGETConfiguration } from '@cinibuzz/tmdb';

import Carousel from '../../../common/carousel';

export interface PostersPanelProps {
  posters: GETMovieMovieIdImages200PostersItem[];
}

export function PostersPanel(props: PostersPanelProps) {
  const { data: config } = useGETConfiguration();

  if (!props.posters.length) {
    return <Text>No Posters available.</Text>;
  }

  return (
    <Carousel itemsCount={props.posters.length}>
      {({ currentIndex }) => (
        <Image
          src={`${config?.images?.secure_base_url}${config?.images?.backdrop_sizes?.[2]}${props.posters[currentIndex].file_path}`}
          objectFit="contain"
          height="full"
          width="full"
          rounded="2xl"
        />
      )}
    </Carousel>
  );
}

export default PostersPanel;
