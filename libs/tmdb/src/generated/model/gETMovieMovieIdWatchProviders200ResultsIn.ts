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
import type { GETMovieMovieIdWatchProviders200ResultsInBuyItem } from './gETMovieMovieIdWatchProviders200ResultsInBuyItem';
import type { GETMovieMovieIdWatchProviders200ResultsInFlatrateItem } from './gETMovieMovieIdWatchProviders200ResultsInFlatrateItem';
import type { GETMovieMovieIdWatchProviders200ResultsInRentItem } from './gETMovieMovieIdWatchProviders200ResultsInRentItem';

export type GETMovieMovieIdWatchProviders200ResultsIn = {
  link?: string;
  buy?: GETMovieMovieIdWatchProviders200ResultsInBuyItem[];
  flatrate?: GETMovieMovieIdWatchProviders200ResultsInFlatrateItem[];
  rent?: GETMovieMovieIdWatchProviders200ResultsInRentItem[];
};
