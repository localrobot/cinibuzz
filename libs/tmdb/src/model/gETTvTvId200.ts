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
import type { GETTvTvId200CreatedByItem } from './gETTvTvId200CreatedByItem';
import type { GETTvTvId200GenresItem } from './gETTvTvId200GenresItem';
import type { GETTvTvId200LastEpisodeToAir } from './gETTvTvId200LastEpisodeToAir';
import type { GETTvTvId200NextEpisodeToAir } from './gETTvTvId200NextEpisodeToAir';
import type { GETTvTvId200NetworksItem } from './gETTvTvId200NetworksItem';
import type { GETTvTvId200ProductionCompaniesItem } from './gETTvTvId200ProductionCompaniesItem';
import type { GETTvTvId200ProductionCountriesItem } from './gETTvTvId200ProductionCountriesItem';
import type { GETTvTvId200SeasonsItem } from './gETTvTvId200SeasonsItem';
import type { GETTvTvId200SpokenLanguagesItem } from './gETTvTvId200SpokenLanguagesItem';

export type GETTvTvId200 = {
  backdrop_path?: ImagePath;
  created_by?: GETTvTvId200CreatedByItem[];
  episode_run_time?: number[];
  first_air_date?: string;
  genres?: GETTvTvId200GenresItem[];
  homepage?: string;
  id?: number;
  in_production?: boolean;
  languages?: string[];
  last_air_date?: string;
  last_episode_to_air?: GETTvTvId200LastEpisodeToAir;
  name?: string;
  next_episode_to_air?: GETTvTvId200NextEpisodeToAir;
  networks?: GETTvTvId200NetworksItem[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: ImagePath;
  production_companies?: GETTvTvId200ProductionCompaniesItem[];
  production_countries?: GETTvTvId200ProductionCountriesItem[];
  seasons?: GETTvTvId200SeasonsItem[];
  spoken_languages?: GETTvTvId200SpokenLanguagesItem[];
  status?: string;
  tagline?: string;
  type?: string;
  vote_average?: number;
  vote_count?: number;
};