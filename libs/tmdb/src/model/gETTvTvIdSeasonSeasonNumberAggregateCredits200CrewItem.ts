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
import type { ImagePath } from './imagePath';
import type { GETTvTvIdSeasonSeasonNumberAggregateCredits200CrewItemJobsItem } from './gETTvTvIdSeasonSeasonNumberAggregateCredits200CrewItemJobsItem';

export type GETTvTvIdSeasonSeasonNumberAggregateCredits200CrewItem = {
  adult?: boolean;
  gender?: number | null;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: ImagePath;
  jobs?: GETTvTvIdSeasonSeasonNumberAggregateCredits200CrewItemJobsItem[];
  department?: string;
  total_episode_count?: number;
};
