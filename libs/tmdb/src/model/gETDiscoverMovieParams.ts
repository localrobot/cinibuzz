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
import type { GETDiscoverMovieSortBy } from './gETDiscoverMovieSortBy';
import type { GETDiscoverMovieWithWatchMonetizationTypes } from './gETDiscoverMovieWithWatchMonetizationTypes';

export type GETDiscoverMovieParams = {
  sort_by?: GETDiscoverMovieSortBy;
  certification_country?: string;
  certification?: string;
  'certification.lte'?: string;
  'certification.gte'?: string;
  include_adult?: boolean;
  include_video?: boolean;
  language?: string;
  page?: number;
  primary_release_year?: number;
  'primary_release_date.gte'?: string;
  'primary_release_date.lte'?: string;
  'release_date.gte'?: string;
  'release_date.lte'?: string;
  with_release_type?: number;
  year?: number;
  'vote_count.gte'?: number;
  'vote_count.lte'?: number;
  'vote_average.gte'?: number;
  'vote_average.lte'?: number;
  with_cast?: string;
  with_crew?: string;
  with_people?: string;
  with_companies?: string;
  with_genres?: string;
  without_genres?: string;
  with_keywords?: string;
  without_keywords?: string;
  'with_runtime.gte'?: number;
  'with_runtime.lte'?: number;
  with_original_language?: string;
  with_watch_providers?: string;
  watch_region?: string;
  with_watch_monetization_types?: GETDiscoverMovieWithWatchMonetizationTypes;
};
