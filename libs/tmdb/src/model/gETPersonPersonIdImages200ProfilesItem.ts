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
import type { GETPersonPersonIdImages200ProfilesItemIso6391 } from './gETPersonPersonIdImages200ProfilesItemIso6391';
import type { GETPersonPersonIdImages200ProfilesItemVoteAverage } from './gETPersonPersonIdImages200ProfilesItemVoteAverage';

export type GETPersonPersonIdImages200ProfilesItem = {
  aspect_ratio?: number;
  file_path?: string;
  height?: number;
  iso_639_1?: GETPersonPersonIdImages200ProfilesItemIso6391;
  vote_average?: GETPersonPersonIdImages200ProfilesItemVoteAverage;
  vote_count?: number;
  width?: number;
};
