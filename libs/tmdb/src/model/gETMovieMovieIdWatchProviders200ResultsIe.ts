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
import type { GETMovieMovieIdWatchProviders200ResultsIeRentItem } from './gETMovieMovieIdWatchProviders200ResultsIeRentItem';
import type { GETMovieMovieIdWatchProviders200ResultsIeFlatrateItem } from './gETMovieMovieIdWatchProviders200ResultsIeFlatrateItem';
import type { GETMovieMovieIdWatchProviders200ResultsIeBuyItem } from './gETMovieMovieIdWatchProviders200ResultsIeBuyItem';

export type GETMovieMovieIdWatchProviders200ResultsIe = {
  link?: string;
  rent?: GETMovieMovieIdWatchProviders200ResultsIeRentItem[];
  flatrate?: GETMovieMovieIdWatchProviders200ResultsIeFlatrateItem[];
  buy?: GETMovieMovieIdWatchProviders200ResultsIeBuyItem[];
};
