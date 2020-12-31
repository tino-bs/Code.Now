import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import {
  actionSettingsChangeLanguage,
  actionSettingsChangeTheme,
  Language,
  SettingsFacadeService,
  Theme
} from './core/settings'
import { UiFacadeService } from './ui/ui.facade.service'
import { LocalizationService } from './core/localization'
import { AppTranslations } from './translations/app.translations'

@Component({
  selector: 'oaq-root',
  templateUrl: './app.container.component.html',
})

export class AppContainerComponent implements OnInit {
  title = 'acn-code-now';

  theme$ = this.settingsFacadeService.theme$;
  language$ = this.settingsFacadeService.language$;

  isMobile$ = this.uiFacadeService.isMobile$;

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(
    private localizationService: LocalizationService,
    private settingsFacadeService: SettingsFacadeService,
    private uiFacadeService: UiFacadeService
  ) {
  }

  ngOnInit() {
    this.localizationService.setTranslations(AppTranslations);
  }

  onThemeToggle(theme: Theme) {
    this.settingsFacadeService.dispatch(actionSettingsChangeTheme({ theme }));
  }

  onLanguageToggle(language: Language) {
		this.settingsFacadeService.dispatch(actionSettingsChangeLanguage({language}));
	}
}
