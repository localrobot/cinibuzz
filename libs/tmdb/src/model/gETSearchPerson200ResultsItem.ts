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
import type { GETSearchPerson200ResultsItemKnownForItem } from './gETSearchPerson200ResultsItemKnownForItem';

export type GETSearchPerson200ResultsItem = {
  profile_path?: ImagePath;
  adult?: boolean;
  id?: number;
  known_for?: GETSearchPerson200ResultsItemKnownForItem[];
  name?: string;
  popularity?: number;
};
