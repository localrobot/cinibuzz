import { Flex, Heading, Tab, TabList, TabPanel, TabPanels, TabProps, Tabs } from '@chakra-ui/react';
import { useGETMovieMovieIdImages, useGETMovieMovieIdVideos } from '@cinibuzz/tmdb';
import { useParams } from 'react-router-dom';

import BackdropsPanel from './backdrops-panel';
import MostPopularPanel from './most-popular-panel';
import PostersPanel from './posters-panel';
import VideosPanel from './videos-panel';

function MediaTab(props: TabProps) {
  return (
    <Tab
      fontSize="sm"
      color="gray.500"
      px="0"
      fontWeight="semibold"
      _selected={{ color: 'black' }}
      _focus={{ border: 'none' }}
      {...props}
    />
  );
}

export interface MovieMediaProps {
  mostPopulalarImageSrc: string;
}

export function MovieMedia(props: MovieMediaProps) {
  const { movieId } = useParams();
  const { data: images } = useGETMovieMovieIdImages(+movieId);
  const { data: videos } = useGETMovieMovieIdVideos(+movieId);

  return (
    <Flex direction="column" width="75%">
      <Heading fontSize="xl" fontWeight="600" mb="4">
        Media
      </Heading>

      <Tabs variant="unstyled" isLazy>
        <TabList gridGap="4">
          <MediaTab>Most Popular</MediaTab>
          <MediaTab>Videos</MediaTab>
          <MediaTab>Backdrops</MediaTab>
          <MediaTab>Posters</MediaTab>
        </TabList>

        <TabPanels>
          <TabPanel p="0">
            <MostPopularPanel imageSrc={props.mostPopulalarImageSrc} />
          </TabPanel>
          <TabPanel p="0">
            <VideosPanel videos={videos?.results ?? []} />
          </TabPanel>
          <TabPanel p="0">
            <BackdropsPanel backdrops={images?.backdrops ?? []} />
          </TabPanel>
          <TabPanel p="0">
            <PostersPanel posters={images?.posters ?? []} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default MovieMedia;
