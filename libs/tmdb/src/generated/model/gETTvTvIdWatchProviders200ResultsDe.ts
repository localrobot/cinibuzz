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
import type { GETTvTvIdWatchProviders200ResultsDeBuyItem } from './gETTvTvIdWatchProviders200ResultsDeBuyItem';
import type { GETTvTvIdWatchProviders200ResultsDeFlatrateItem } from './gETTvTvIdWatchProviders200ResultsDeFlatrateItem';

export type GETTvTvIdWatchProviders200ResultsDe = {
  link?: string;
  buy?: GETTvTvIdWatchProviders200ResultsDeBuyItem[];
  flatrate?: GETTvTvIdWatchProviders200ResultsDeFlatrateItem[];
};