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
import type { GETMovieMovieIdWatchProviders200ResultsHuRentItem } from './gETMovieMovieIdWatchProviders200ResultsHuRentItem';
import type { GETMovieMovieIdWatchProviders200ResultsHuBuyItem } from './gETMovieMovieIdWatchProviders200ResultsHuBuyItem';
import type { GETMovieMovieIdWatchProviders200ResultsHuFlatrateItem } from './gETMovieMovieIdWatchProviders200ResultsHuFlatrateItem';

export type GETMovieMovieIdWatchProviders200ResultsHu = {
  link?: string;
  rent?: GETMovieMovieIdWatchProviders200ResultsHuRentItem[];
  buy?: GETMovieMovieIdWatchProviders200ResultsHuBuyItem[];
  flatrate?: GETMovieMovieIdWatchProviders200ResultsHuFlatrateItem[];
};