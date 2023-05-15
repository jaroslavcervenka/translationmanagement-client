import { Selector, createSelector } from '@reduxjs/toolkit';

import { AppState } from '@/application/store';

import { TranslationJobState } from './translationJobSlice';

export const selectTranslationJobRoot: Selector<
  AppState,
  TranslationJobState
> = state => state.translationJob;

export const selectTranslationJobs = createSelector(
  selectTranslationJobRoot,
  state => state.jobs
);
