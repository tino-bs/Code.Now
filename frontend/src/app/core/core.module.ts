import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '~/environments/environment';

// core state
import { reducers, metaReducers } from './core.state';

// localization
import { LocalizationModule } from './localization/localization.module';

// settings
import { SettingsEffects, SettingsFacade } from './settings';

// storage service
import { LocalStorageService } from './storage/local-storage.service';


@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    // translation
    TranslateModule.forRoot(),
    LocalizationModule,

    // app state
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      SettingsEffects,
    ]),

    // redux dev tools
    environment.production ? [] : StoreDevtoolsModule.instrument({ name: environment.appName }),
  ],
  providers: [
    LocalStorageService,
    SettingsFacade,
  ],
  exports: [
    TranslateModule,
    LocalizationModule
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
