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
import type { GETMovieMovieIdWatchProviders200ResultsEeFlatrateItem } from './gETMovieMovieIdWatchProviders200ResultsEeFlatrateItem';
import type { GETMovieMovieIdWatchProviders200ResultsEeBuyItem } from './gETMovieMovieIdWatchProviders200ResultsEeBuyItem';
import type { GETMovieMovieIdWatchProviders200ResultsEeRentItem } from './gETMovieMovieIdWatchProviders200ResultsEeRentItem';

export type GETMovieMovieIdWatchProviders200ResultsEe = {
  link?: string;
  flatrate?: GETMovieMovieIdWatchProviders200ResultsEeFlatrateItem[];
  buy?: GETMovieMovieIdWatchProviders200ResultsEeBuyItem[];
  rent?: GETMovieMovieIdWatchProviders200ResultsEeRentItem[];
};