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
import type { GETTvEpisodeGroupId200GroupsItem } from './gETTvEpisodeGroupId200GroupsItem';
import type { GETTvEpisodeGroupId200Network } from './gETTvEpisodeGroupId200Network';

export type GETTvEpisodeGroupId200 = {
  description?: string;
  episode_count?: number;
  group_count?: number;
  groups?: GETTvEpisodeGroupId200GroupsItem[];
  id?: string;
  name?: string;
  network?: GETTvEpisodeGroupId200Network;
  type?: number;
};
