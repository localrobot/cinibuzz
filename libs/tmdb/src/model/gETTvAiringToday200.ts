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
import type { TvListResultObject } from './tvListResultObject';

export type GETTvAiringToday200 = {
  page?: number;
  results?: TvListResultObject[];
  total_results?: number;
  total_pages?: number;
};
