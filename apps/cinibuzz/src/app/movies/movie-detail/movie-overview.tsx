import { Flex, FlexProps, Grid, Heading, Text, TextProps } from '@chakra-ui/react';
import { GETMovieMovieId200, GETMovieMovieIdCredits200CrewItem } from '@cinibuzz/tmdb';

import { formatCurrency } from '../../utils';

function MovieOverviewText(props: TextProps) {
  return <Text gridColumn="span 4" color="gray.500" mb="6" {...props} />;
}

interface MovieDetailItemProps {
  primaryText: string | undefined;
  secondaryText: string | undefined;
}

function MovieDetailItem({ primaryText, secondaryText, ...flexProps }: MovieDetailItemProps & FlexProps) {
  return (
    <Flex direction="column" {...flexProps}>
      <Text as="span" fontWeight="500" mb="1">
        {primaryText}
      </Text>
      <Text as="span">{secondaryText}</Text>
    </Flex>
  );
}

export interface MovieOverviewProps {
  movie: GETMovieMovieId200 | undefined;
  crew: GETMovieMovieIdCredits200CrewItem[];
}

export function MovieOverview(props: MovieOverviewProps) {
  const language = props.movie?.spoken_languages?.find(l => l.iso_639_1 === props.movie?.original_language)?.name;

  return (
    <Grid as="section" templateColumns="repeat(6, 1fr)">
      <Heading gridColumn="span 4" fontSize="xl" fontWeight="600" mb="4">
        Overview
      </Heading>

      <MovieOverviewText>{props.movie?.overview ?? 'No Overview is available'}</MovieOverviewText>

      {props.crew.slice(0, 4).map(item => (
        <MovieDetailItem key={item.id} gridRow="3" primaryText={item.name} secondaryText={item.job} />
      ))}

      <Flex direction="column" gridGap="4" gridRow="1/4" gridColumn="5/7" ml="24">
        <MovieDetailItem primaryText="Status" secondaryText={props.movie?.status ?? 'No Status Available'} />
        <MovieDetailItem
          primaryText="Original Language"
          secondaryText={language ?? props.movie?.original_language ?? 'No Language Available'}
        />
        <MovieDetailItem
          primaryText="Budget"
          secondaryText={props.movie?.budget ? formatCurrency(props.movie.budget) : 'No Budget Available'}
        />
        <MovieDetailItem
          primaryText="Revenue"
          secondaryText={props.movie?.revenue ? formatCurrency(props.movie?.revenue) : 'No Revenue Available'}
        />
      </Flex>
    </Grid>
  );
}

export default MovieOverview;
