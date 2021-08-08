import { Box, Heading, Image, LinkBox, LinkOverlay, SimpleGrid, Text } from '@chakra-ui/react';
import { useGETConfiguration, useGETMovieMovieIdRecommendations } from '@cinibuzz/tmdb';
import { Link, useParams } from 'react-router-dom';

/* eslint-disable-next-line */
export interface MovieRecommendationsProps {}

export function MovieRecommendations(props: MovieRecommendationsProps) {
  const { movieId } = useParams();
  const { data } = useGETMovieMovieIdRecommendations(+movieId);
  const { data: config } = useGETConfiguration();

  if (!data?.results?.length) {
    return <Text>No Recommendations are available</Text>;
  }

  return (
    <Box>
      <Heading gridColumn="span 4" fontSize="xl" fontWeight="600" mb="4">
        Recommendations
      </Heading>

      <SimpleGrid columns={3} gap="6">
        {data?.results?.slice(0, 3).map(movie => (
          <LinkBox d="flex" flexDirection="column" key={movie.id}>
            <Image
              src={`${config?.images?.base_url}${config?.images?.backdrop_sizes?.[2]}${movie.backdrop_path}`}
              alt={movie.title}
              rounded="2xl"
              objectFit="cover"
              height="full"
              mb="2"
              fallbackSrc="https://via.placeholder.com/150"
            />

            <Text isTruncated fontSize="lg" mb="1">
              <LinkOverlay
                as={Link}
                to={`movies/${movieId}`}
                d="flex"
                justifyContent="space-between"
                fontWeight="semibold"
                fontSize="sm"
                title={movie.title}
              >
                <Text as="span">{movie.title}</Text>
                <Text as="span">{Math.round(10 * (movie.vote_average ?? 0))}%</Text>
              </LinkOverlay>
            </Text>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default MovieRecommendations;
