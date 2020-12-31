import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../core.state';

import { SettingsState } from './settings.models';

export const stateSettings = 'settings';

export const selectSettingsFeature = createFeatureSelector<AppState, SettingsState>(
  stateSettings
);

export const selectSettingsState = createSelector(
  selectSettingsFeature,
  (state: SettingsState) => state
);

export const selectSettingsLanguage = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.language
);

export const selectSettingsTheme = createSelector(
  selectSettingsState,
  settings => settings.theme
);
