import {ActionReducerMap, MetaReducer} from '@ngrx/store';

import {initStateFromLocalStorage} from './meta-reducers/init-state-from-local-storage.reducer';

import {settingsReducer, SettingsState, stateSettings} from './settings';

export type AppState = {
	[stateSettings]: SettingsState;
};

export const reducers: ActionReducerMap<AppState> = {
	settings: settingsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [
	initStateFromLocalStorage
];

export const testAppState: AppState = {
	[stateSettings]: {} as any,
};
