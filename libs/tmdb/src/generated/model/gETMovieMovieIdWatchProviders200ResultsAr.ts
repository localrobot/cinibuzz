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
import type { GETMovieMovieIdWatchProviders200ResultsArFlatrateItem } from './gETMovieMovieIdWatchProviders200ResultsArFlatrateItem';
import type { GETMovieMovieIdWatchProviders200ResultsArRentItem } from './gETMovieMovieIdWatchProviders200ResultsArRentItem';
import type { GETMovieMovieIdWatchProviders200ResultsArBuyItem } from './gETMovieMovieIdWatchProviders200ResultsArBuyItem';

export type GETMovieMovieIdWatchProviders200ResultsAr = {
  link?: string;
  flatrate?: GETMovieMovieIdWatchProviders200ResultsArFlatrateItem[];
  rent?: GETMovieMovieIdWatchProviders200ResultsArRentItem[];
  buy?: GETMovieMovieIdWatchProviders200ResultsArBuyItem[];
};
