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
import type { GETMovieMovieIdWatchProviders200ResultsJpRentItem } from './gETMovieMovieIdWatchProviders200ResultsJpRentItem';
import type { GETMovieMovieIdWatchProviders200ResultsJpFlatrateItem } from './gETMovieMovieIdWatchProviders200ResultsJpFlatrateItem';
import type { GETMovieMovieIdWatchProviders200ResultsJpBuyItem } from './gETMovieMovieIdWatchProviders200ResultsJpBuyItem';

export type GETMovieMovieIdWatchProviders200ResultsJp = {
  link?: string;
  rent?: GETMovieMovieIdWatchProviders200ResultsJpRentItem[];
  flatrate?: GETMovieMovieIdWatchProviders200ResultsJpFlatrateItem[];
  buy?: GETMovieMovieIdWatchProviders200ResultsJpBuyItem[];
};
