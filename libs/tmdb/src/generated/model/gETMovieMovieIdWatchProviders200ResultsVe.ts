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
import type { GETMovieMovieIdWatchProviders200ResultsVeFlatrateItem } from './gETMovieMovieIdWatchProviders200ResultsVeFlatrateItem';
import type { GETMovieMovieIdWatchProviders200ResultsVeRentItem } from './gETMovieMovieIdWatchProviders200ResultsVeRentItem';
import type { GETMovieMovieIdWatchProviders200ResultsVeBuyItem } from './gETMovieMovieIdWatchProviders200ResultsVeBuyItem';

export type GETMovieMovieIdWatchProviders200ResultsVe = {
  link?: string;
  flatrate?: GETMovieMovieIdWatchProviders200ResultsVeFlatrateItem[];
  rent?: GETMovieMovieIdWatchProviders200ResultsVeRentItem[];
  buy?: GETMovieMovieIdWatchProviders200ResultsVeBuyItem[];
};