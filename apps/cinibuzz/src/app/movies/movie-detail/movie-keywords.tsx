import { Flex, Heading, Tag, Text } from '@chakra-ui/react';
import { useGETMovieMovieIdKeywords } from '@cinibuzz/tmdb';
import { Link, useParams } from 'react-router-dom';

/* eslint-disable-next-line */
export interface MovieKeywordsProps {}

export function MovieKeywords(props: MovieKeywordsProps) {
  const { movieId } = useParams();
  const { data } = useGETMovieMovieIdKeywords(+movieId);

  if (!data?.keywords?.length) {
    return <Text>No Keywords are associated with this movie.</Text>;
  }

  return (
    <Flex direction="column" width="25%">
      <Heading fontSize="xl" fontWeight="600" mb="4">
        Keywords
      </Heading>
      <Flex wrap="wrap" gridGap="2" align="flex-start" alignContent="flex-start">
        {data?.keywords?.map(keyword => (
          <Tag
            as={Link}
            key={keyword.id}
            to={`../results?${new URLSearchParams([['q', keyword.name ?? '']]).toString()}`}
          >
            {keyword.name}
          </Tag>
        ))}
      </Flex>
    </Flex>
  );
}

export default MovieKeywords;
