import { Box, Flex, FlexProps, Heading, HeadingProps, Text } from '@chakra-ui/react';
import { GETMovieMovieId200, useGETConfiguration } from '@cinibuzz/tmdb';

import { durationInWords, formatDate } from '../../utils';

function MoviePosterBox(props: FlexProps) {
  return (
    <Flex
      as="header"
      bgSize="cover"
      height="540px"
      color="white"
      align="flex-end"
      justify="space-between"
      rounded="2xl"
      p="12"
      {...props}
    />
  );
}

function UserScore({ score }: { score: number }) {
  return (
    <Flex justify="space-between" align="center" gridGap="16">
      <Text>
        User <br /> Score
      </Text>
      <Flex
        as="strong"
        fontSize="xl"
        align="center"
        justify="center"
        rounded="full"
        bg="white"
        color="green.500"
        p="2"
        width="16"
        height="16"
      >
        {score}%
      </Flex>
    </Flex>
  );
}

function MovieTitle(props: HeadingProps) {
  return <Heading mb="4" size="2xl" {...props} />;
}

function MovieBasicDetails(props: GETMovieMovieId200) {
  return (
    <Flex gridGap="4">
      <Text as="span">{formatDate(props.release_date)}</Text>
      <Text as="span" px="4" borderLeft="1px" borderRight="1px" borderColor="white">
        {props.genres?.map(genre => genre.name).join(', ')}
      </Text>
      <Text as="span">{durationInWords(props.runtime)}</Text>
    </Flex>
  );
}

/* eslint-disable-next-line */
export interface MovieHeaderProps extends GETMovieMovieId200 {}

export function MovieHeader(props: MovieHeaderProps) {
  const { data: config } = useGETConfiguration();

  return (
    <MoviePosterBox
      bgImage={`${config?.images?.secure_base_url}${config?.images?.backdrop_sizes?.[3]}${props.backdrop_path}`}
    >
      <Box>
        <MovieTitle>{props.title}</MovieTitle>
        <MovieBasicDetails {...props} />
      </Box>

      <UserScore score={Math.round(10 * (props.vote_average ?? 0))} />
    </MoviePosterBox>
  );
}

export default MovieHeader;
