import { createAction, props } from '@ngrx/store';
import { Language, Theme } from './settings.models';

export const actionSettingsChangeTheme = createAction(
  '[Settings] Change Theme',
  props<{ theme: Theme }>()
);

export const actionSettingsChangeLanguage = createAction(
  '[Settings] Change Language',
  props<{ language: Language }>()
);
