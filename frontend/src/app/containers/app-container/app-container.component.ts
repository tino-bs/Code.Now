import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'

import {
  actionSettingsChangeLanguage,
  actionSettingsChangeTheme,
  Language,
  SettingsFacade,
  Theme,
} from '~/app/core/settings'
import { UiFacade } from '~/app/ui'
import { AbstractContainerComponent } from '../abstract-container.component'
import { LocalizationService } from '~/app/core/localization'
import { appTranslations } from '~/app/translations'

@Component({
  selector: 'oaq-root',
  templateUrl: './app-container.component.html',
})

export class AppContainerComponent
  extends AbstractContainerComponent
  implements OnInit, OnDestroy {
  title = 'acn-code-now'

  theme$ = this.settingsFacade.theme$
  language$ = this.settingsFacade.language$

  isMobile$ = this.uiFacade.isMobile$

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav

  constructor (
    protected localizationService: LocalizationService,
    private settingsFacade: SettingsFacade,
    private uiFacade: UiFacade,
  ) {
    super(localizationService)
  }

  ngOnInit () {
    super.ngOnInit()

    this.setTranslations(appTranslations)
  }

  ngOnDestroy (): void {
    super.ngOnDestroy()
  }

  onThemeToggle (theme: Theme) {
    this.settingsFacade.dispatch(actionSettingsChangeTheme({ theme }))
  }

  onLanguageToggle (language: Language) {
    this.settingsFacade.dispatch(actionSettingsChangeLanguage({ language }))
  }
}
