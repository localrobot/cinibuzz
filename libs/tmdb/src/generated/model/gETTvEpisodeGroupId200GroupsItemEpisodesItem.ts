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
import type { GETTvEpisodeGroupId200GroupsItemEpisodesItemProductionCode } from './gETTvEpisodeGroupId200GroupsItemEpisodesItemProductionCode';
import type { ImagePath } from './imagePath';

export type GETTvEpisodeGroupId200GroupsItemEpisodesItem = {
  air_date?: string;
  episode_number?: number;
  id?: number;
  name?: string;
  overview?: string;
  production_code?: GETTvEpisodeGroupId200GroupsItemEpisodesItemProductionCode;
  season_number?: number;
  show_id?: number;
  still_path?: ImagePath;
  vote_average?: number;
  vote_count?: number;
  order?: number;
};
