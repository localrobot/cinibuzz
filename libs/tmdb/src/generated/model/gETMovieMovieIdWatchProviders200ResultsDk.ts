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
import type { GETMovieMovieIdWatchProviders200ResultsDkRentItem } from './gETMovieMovieIdWatchProviders200ResultsDkRentItem';
import type { GETMovieMovieIdWatchProviders200ResultsDkBuyItem } from './gETMovieMovieIdWatchProviders200ResultsDkBuyItem';
import type { GETMovieMovieIdWatchProviders200ResultsDkFlatrateItem } from './gETMovieMovieIdWatchProviders200ResultsDkFlatrateItem';

export type GETMovieMovieIdWatchProviders200ResultsDk = {
  link?: string;
  rent?: GETMovieMovieIdWatchProviders200ResultsDkRentItem[];
  buy?: GETMovieMovieIdWatchProviders200ResultsDkBuyItem[];
  flatrate?: GETMovieMovieIdWatchProviders200ResultsDkFlatrateItem[];
};
