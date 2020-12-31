import { AppState } from '../core.state';

export interface SettingsState {
  language: Language;
  theme: Theme;
}

export interface State extends AppState {
  settings: SettingsState;
}

export type Theme = 'default' | 'dark';

export const testTheme: Theme = 'dark';

export type Language = 'en' | 'de';

export const testLanguage: Language = 'en';
