import { Component, OnDestroy, OnInit } from '@angular/core'

import { AbstractContainerComponent } from '~/app/containers'

import { measurementsTranslations } from '../translations/measurements.translations'
import { LocalizationService } from '~/app/core/localization'

@Component({
  selector: 'oaq-measurements',
  templateUrl: './measurements-container.component.html',
})
export class MeasurementsContainerComponent
  extends AbstractContainerComponent
  implements OnInit, OnDestroy {

  pageTitle: string

  constructor (
    protected localizationService: LocalizationService,
  ) {
    super(localizationService)
  }

  ngOnInit (): void {
    super.ngOnInit()

    this.pageTitle = 'Measurements'
    this.setTranslations(measurementsTranslations)
  }

  ngOnDestroy (): void {
    super.ngOnDestroy()
  }
}
