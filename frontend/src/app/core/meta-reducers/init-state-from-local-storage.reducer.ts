import {ActionReducer, INIT, UPDATE} from '@ngrx/store';

import {LocalStorageService} from '../storage/local-storage.service';
import {AppState} from '../core.state';

export function initStateFromLocalStorage(
	reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
	return (state, action) => {
		const newState = reducer(state, action);
		if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
			return {...newState, ...LocalStorageService.loadInitialState()};
		}
		return newState;
	};
}
