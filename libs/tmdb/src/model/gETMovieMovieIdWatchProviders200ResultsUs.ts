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
import type { GETMovieMovieIdWatchProviders200ResultsUsRentItem } from './gETMovieMovieIdWatchProviders200ResultsUsRentItem';
import type { GETMovieMovieIdWatchProviders200ResultsUsBuyItem } from './gETMovieMovieIdWatchProviders200ResultsUsBuyItem';
import type { GETMovieMovieIdWatchProviders200ResultsUsFlatrateItem } from './gETMovieMovieIdWatchProviders200ResultsUsFlatrateItem';

export type GETMovieMovieIdWatchProviders200ResultsUs = {
  link?: string;
  rent?: GETMovieMovieIdWatchProviders200ResultsUsRentItem[];
  buy?: GETMovieMovieIdWatchProviders200ResultsUsBuyItem[];
  flatrate?: GETMovieMovieIdWatchProviders200ResultsUsFlatrateItem[];
};