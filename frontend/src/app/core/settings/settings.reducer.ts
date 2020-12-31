import { Action, createReducer, on } from '@ngrx/store';

import { SettingsState } from './settings.models';
import { actionSettingsChangeTheme, actionSettingsChangeLanguage } from './settings.actions';

export const initialState: SettingsState = {
  language: 'en',
  theme: 'default'
};

const reducer = createReducer(
  initialState,
  on(
    actionSettingsChangeTheme,
    actionSettingsChangeLanguage,
    (state, action) => ({ ...state, ...action })
  )
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
