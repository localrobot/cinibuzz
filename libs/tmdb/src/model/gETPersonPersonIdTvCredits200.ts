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
import type { GETPersonPersonIdTvCredits200CastItem } from './gETPersonPersonIdTvCredits200CastItem';
import type { GETPersonPersonIdTvCredits200CrewItem } from './gETPersonPersonIdTvCredits200CrewItem';

export type GETPersonPersonIdTvCredits200 = {
  cast?: GETPersonPersonIdTvCredits200CastItem[];
  crew?: GETPersonPersonIdTvCredits200CrewItem[];
  id?: number;
};
