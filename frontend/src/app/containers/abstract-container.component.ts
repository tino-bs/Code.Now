import { Component, OnDestroy, OnInit } from '@angular/core'

import { LocalizationService, Translation } from '~/app/core/localization'

@Component({
  template: '',
})

/**
 * abstract component class for container components
 * a container component can contain a router outlet
 */
export class AbstractContainerComponent implements OnInit, OnDestroy {

  constructor (
    protected localizationService: LocalizationService,
  ) {
  }

  ngOnInit (): void {
  }

  ngOnDestroy (): void {
  }

  /**
   * set container's translations
   */
  public setTranslations (translations: Translation) {
    this.localizationService.setTranslations(translations)
  }
}
