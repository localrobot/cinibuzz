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
import type { MovieListObject } from './movieListObject';
import type { GETMovieNowPlaying200Dates } from './gETMovieNowPlaying200Dates';

export type GETMovieNowPlaying200 = {
  page?: number;
  results?: MovieListObject[];
  dates?: GETMovieNowPlaying200Dates;
  total_pages?: number;
  total_results?: number;
};
