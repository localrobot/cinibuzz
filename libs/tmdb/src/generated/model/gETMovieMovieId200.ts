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
import type { GETMovieMovieId200BelongsToCollection } from './gETMovieMovieId200BelongsToCollection';
import type { GETMovieMovieId200GenresItem } from './gETMovieMovieId200GenresItem';
import type { GETMovieMovieId200ProductionCompaniesItem } from './gETMovieMovieId200ProductionCompaniesItem';
import type { GETMovieMovieId200ProductionCountriesItem } from './gETMovieMovieId200ProductionCountriesItem';
import type { GETMovieMovieId200SpokenLanguagesItem } from './gETMovieMovieId200SpokenLanguagesItem';
import type { GETMovieMovieId200Status } from './gETMovieMovieId200Status';

export type GETMovieMovieId200 = {
  adult?: boolean;
  backdrop_path?: ImagePath;
  belongs_to_collection?: GETMovieMovieId200BelongsToCollection;
  budget?: number;
  genres?: GETMovieMovieId200GenresItem[];
  homepage?: string | null;
  id?: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: ImagePath;
  production_companies?: GETMovieMovieId200ProductionCompaniesItem[];
  production_countries?: GETMovieMovieId200ProductionCountriesItem[];
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: GETMovieMovieId200SpokenLanguagesItem[];
  status?: GETMovieMovieId200Status;
  tagline?: string | null;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};
