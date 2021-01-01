import { Component, Input, OnInit } from '@angular/core'

import { Measurements } from '../../models/measurements.models'

@Component({
  selector: 'oaq-measurements-list',
  templateUrl: './measurements-list.component.html',
  styleUrls: ['./measurements-list.component.scss'],
})
export class MeasurementsListComponent implements OnInit {
  @Input() measurements: Measurements

  ghostMeasurements: any[]

  constructor () {
  }

  ngOnInit (): void {
    this.ghostMeasurements = new Array(10)
  }
}
