import { Injectable } from '@angular/core';
import { Store, Action, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Language, State, Theme } from './settings.models';
import { selectSettingsLanguage, selectSettingsTheme } from './settings.selectors';

@Injectable()
export class SettingsFacade {
  theme$: Observable<Theme>;
  language$: Observable<Language>;

  constructor(private store: Store<State>) {

    this.theme$ = store.pipe(select(selectSettingsTheme));
    this.language$ = store.pipe(select(selectSettingsLanguage));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
