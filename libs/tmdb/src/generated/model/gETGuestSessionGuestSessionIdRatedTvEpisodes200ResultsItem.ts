/*
 * Generated by orval v5.5.3 🍺
 * Do not edit manually.
 * API
 * ## Welcome

This is a place to put general notes and extra information, for internal use.

To get started designing/documenting this API, select a version on the left. # Title
No Description
 * OpenAPI spec version: 3
 */
import type { ImagePath } from './imagePath';
import type { GETGuestSessionGuestSessionIdRatedTvEpisodes200ResultsItemVoteAverage } from './gETGuestSessionGuestSessionIdRatedTvEpisodes200ResultsItemVoteAverage';
import type { GETGuestSessionGuestSessionIdRatedTvEpisodes200ResultsItemRating } from './gETGuestSessionGuestSessionIdRatedTvEpisodes200ResultsItemRating';

export type GETGuestSessionGuestSessionIdRatedTvEpisodes200ResultsItem = {
  air_date?: string;
  episode_number?: number;
  id?: number;
  name?: string;
  overview?: string;
  production_code?: string | null;
  season_number?: number;
  show_id?: number;
  still_path?: ImagePath;
  vote_average?: GETGuestSessionGuestSessionIdRatedTvEpisodes200ResultsItemVoteAverage;
  vote_count?: number;
  rating?: GETGuestSessionGuestSessionIdRatedTvEpisodes200ResultsItemRating;
};
