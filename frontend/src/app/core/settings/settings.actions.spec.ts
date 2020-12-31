import { actionSettingsChangeTheme, actionSettingsChangeLanguage } from './settings.actions';
import { testTheme, testLanguage } from './settings.models';

describe('Settings Actions', () => {
  it('should create ActionSettingsChangeTheme action', () => {
    const action = actionSettingsChangeTheme({
      theme: testTheme
    });

    expect(action.type).toEqual('[Settings] Change Theme');
    expect(action.theme).toEqual(testTheme);
  });

  it('should create ActionSettingsChangeLanguage action', () => {
    const action = actionSettingsChangeLanguage({
      language: testLanguage
    });

    expect(action.type).toEqual(actionSettingsChangeLanguage.type);
    expect(action.language).toEqual(testLanguage);
  });
});
