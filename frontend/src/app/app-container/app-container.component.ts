import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import {
  actionSettingsChangeLanguage,
  actionSettingsChangeTheme,
  Language,
  SettingsFacade,
  Theme
} from '../core/settings'
import { UiFacade } from '../ui'
import { LocalizationService } from '../core/localization'
import { appTranslations } from '../app-translations'

@Component({
  selector: 'oaq-root',
  templateUrl: './app-container.component.html',
})

export class AppContainerComponent implements OnInit {
  title = 'acn-code-now';

  theme$ = this.settingsFacade.theme$;
  language$ = this.settingsFacade.language$;

  isMobile$ = this.uiFacade.isMobile$;

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(
    private localizationService: LocalizationService,
    private settingsFacade: SettingsFacade,
    private uiFacade: UiFacade
  ) {
  }

  ngOnInit() {
    this.localizationService.setTranslations(appTranslations);
  }

  onThemeToggle(theme: Theme) {
    this.settingsFacade.dispatch(actionSettingsChangeTheme({ theme }));
  }

  onLanguageToggle(language: Language) {
		this.settingsFacade.dispatch(actionSettingsChangeLanguage({language}));
	}
}
