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
import type { GETMovieMovieIdWatchProviders200ResultsFrFlatrateItem } from './gETMovieMovieIdWatchProviders200ResultsFrFlatrateItem';
import type { GETMovieMovieIdWatchProviders200ResultsFrBuyItem } from './gETMovieMovieIdWatchProviders200ResultsFrBuyItem';
import type { GETMovieMovieIdWatchProviders200ResultsFrRentItem } from './gETMovieMovieIdWatchProviders200ResultsFrRentItem';

export type GETMovieMovieIdWatchProviders200ResultsFr = {
  link?: string;
  flatrate?: GETMovieMovieIdWatchProviders200ResultsFrFlatrateItem[];
  buy?: GETMovieMovieIdWatchProviders200ResultsFrBuyItem[];
  rent?: GETMovieMovieIdWatchProviders200ResultsFrRentItem[];
};
