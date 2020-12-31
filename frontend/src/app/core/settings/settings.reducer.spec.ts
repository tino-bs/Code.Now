import { initialState, settingsReducer } from './settings.reducer';

import { actionSettingsChangeLanguage, actionSettingsChangeTheme } from './settings.actions';
import { testTheme, testLanguage } from './settings.models';

describe('Settings Reducer', () => {
  it('should return default state', () => {
    const action = {} as any;
    const state = settingsReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should update theme', () => {
    const action = actionSettingsChangeTheme({ theme: testTheme });
    const state = settingsReducer(undefined, action);

    expect(state.theme).toEqual(testTheme);
  });

  it('should update language', () => {
    const action = actionSettingsChangeLanguage({ language: testLanguage });
    const state = settingsReducer(undefined, action);

    expect(state.language).toEqual(testLanguage);
  });
});
