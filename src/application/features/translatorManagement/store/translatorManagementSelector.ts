import { Selector, createSelector } from '@reduxjs/toolkit';

import { AppState } from '@/application/store';

import { TranslatorState } from './translatorManagementSlice';

export const selectTranslatorManagementRoot: Selector<
  AppState,
  TranslatorState
> = state => state.translatorManagement;

export const selectTranslators = createSelector(
  selectTranslatorManagementRoot,
  state => state.translators
);
