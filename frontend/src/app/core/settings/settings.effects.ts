import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { merge, of } from 'rxjs';
import { distinctUntilChanged, tap, withLatestFrom } from 'rxjs/operators';

import { LocalStorageService } from '../storage/local.storage.service';
import { LocalizationService } from '../localization';
import { selectSettingsFeature } from './settings.selectors';

import { actionSettingsChangeTheme, actionSettingsChangeLanguage } from './settings.actions';
import { selectSettingsLanguage, selectSettingsTheme } from './settings.selectors';
import { State } from './settings.models';

export const SETTINGS_KEY = 'SETTINGS';
const INIT = of('init-effect-trigger');

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private overlayContainer: OverlayContainer,
    private localStorageService: LocalStorageService,
    private localizationService: LocalizationService
  ) {
  }

  effectPersistSettings = createEffect(() =>
      this.actions$.pipe(
        ofType(
          actionSettingsChangeLanguage,
          actionSettingsChangeTheme
        ),
        withLatestFrom(
          this.store.pipe(select(selectSettingsFeature))
        ),
        tap(([action, settings]) =>
          this.localStorageService.setItem(SETTINGS_KEY, settings)
        )
      ),
    { dispatch: false }
  );

  effectChangeTheme = createEffect(() =>
    merge(INIT, this.actions$.pipe(
      ofType(
        actionSettingsChangeTheme))).pipe(
      withLatestFrom(
        this.store.pipe(select(selectSettingsTheme))
      ),
      tap(([action, effectiveTheme]) => {
        const classList = this.overlayContainer.getContainerElement().classList;
        const toRemove = Array.from(classList).filter((item: string) =>
          item.includes('-theme')
        );
        if (toRemove.length) {
          classList.remove(...toRemove);
        }
        classList.add(effectiveTheme + '-theme');
      })
    ), { dispatch: false }
  );

  setTranslateServiceLanguage = createEffect(() =>
      this.store.pipe(
        select(selectSettingsLanguage),
        distinctUntilChanged(),
        tap(language => this.localizationService.setCurrentLanguage(language))
      ),
    { dispatch: false }
  );
}
