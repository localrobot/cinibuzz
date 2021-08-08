import { Flex, Heading, Tag } from '@chakra-ui/react';
import { useGETMovieMovieIdKeywords } from '@cinibuzz/tmdb';
import { useParams } from 'react-router-dom';

/* eslint-disable-next-line */
export interface MovieKeywordsProps {}

export function MovieKeywords(props: MovieKeywordsProps) {
  const { movieId } = useParams();
  const { data } = useGETMovieMovieIdKeywords(+movieId);

  return (
    <Flex direction="column" width="25%">
      <Heading fontSize="xl" fontWeight="600" mb="4">
        Keywords
      </Heading>
      <Flex wrap="wrap" gridGap="2" align="flex-start" alignContent="flex-start">
        {data?.keywords?.map(keyword => (
          <Tag key={keyword.id}>{keyword.name}</Tag>
        ))}
      </Flex>
    </Flex>
  );
}

export default MovieKeywords;
