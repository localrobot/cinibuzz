import { AspectRatio, Text } from '@chakra-ui/react';
import { GETMovieMovieIdVideos200ResultsItem } from '@cinibuzz/tmdb';
import { useMemo } from 'react';

import Carousel from '../../../common/carousel';

const VIDEO_SOURCE_MAP: Record<string, string> = {
  YouTube: 'https://www.youtube.com/embed/',
  Vimeo: 'https://player.vimeo.com/video/',
};

const SUPPORTED_SITES = new Set(Object.keys(VIDEO_SOURCE_MAP));

export interface VideosPanelProps {
  videos: GETMovieMovieIdVideos200ResultsItem[];
}

export function VideosPanel(props: VideosPanelProps) {
  const supportedVideos = useMemo(() => props.videos.filter(v => SUPPORTED_SITES.has(v.site ?? '')), [props.videos]);

  if (!supportedVideos.length) {
    return <Text>No Videos available</Text>;
  }

  return (
    <Carousel itemsCount={supportedVideos.length}>
      {({ currentIndex }) => (
        <AspectRatio ratio={16 / 9}>
          <iframe
            height="100%"
            width="100%"
            src={`${VIDEO_SOURCE_MAP[supportedVideos[currentIndex].site ?? '']}${supportedVideos[currentIndex].key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={supportedVideos[currentIndex].name}
          />
        </AspectRatio>
      )}
    </Carousel>
  );
}

export default VideosPanel;
