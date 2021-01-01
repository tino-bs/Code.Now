import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { AbstractPageComponent } from '~/app/pages/abstract-page.component'

import { MeasurementsFacade } from '../../store/measurements.facade'
import { actionLoadMeasurements } from '../../store/actions/measurements.master.page.actions'

@Component({
  selector: 'oaq-measurements-page',
  templateUrl: './measurements-page.component.html',
  styleUrls: ['./measurements-page.component.scss'],
})
export class MeasurementsPageComponent
  extends AbstractPageComponent
  implements OnInit, OnDestroy {

  measurements$ = this.measurementsFacade.measurements$

  constructor (
    public element: ElementRef,
    public router: Router,
    private measurementsFacade: MeasurementsFacade,
  ) {
    super(element, router)
  }

  ngOnInit (): void {
    super.ngOnInit()

    this.measurementsFacade.dispatch(actionLoadMeasurements())
  }

  ngOnDestroy (): void {
    super.ngOnDestroy()
  }
}
