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
import type { GETMovieMovieIdWatchProviders200ResultsFiBuyItem } from './gETMovieMovieIdWatchProviders200ResultsFiBuyItem';
import type { GETMovieMovieIdWatchProviders200ResultsFiFlatrateItem } from './gETMovieMovieIdWatchProviders200ResultsFiFlatrateItem';
import type { GETMovieMovieIdWatchProviders200ResultsFiRentItem } from './gETMovieMovieIdWatchProviders200ResultsFiRentItem';

export type GETMovieMovieIdWatchProviders200ResultsFi = {
  link?: string;
  buy?: GETMovieMovieIdWatchProviders200ResultsFiBuyItem[];
  flatrate?: GETMovieMovieIdWatchProviders200ResultsFiFlatrateItem[];
  rent?: GETMovieMovieIdWatchProviders200ResultsFiRentItem[];
};
