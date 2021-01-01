import { Injectable } from '@angular/core'
import { Store, Action, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import * as fromMeasurements from './index'
import { Measurements } from '../models/measurements.models'

@Injectable()
export class MeasurementsFacade {
  loaded$: Observable<boolean>
  measurements$: Observable<Measurements>

  constructor (private store: Store<fromMeasurements.State>) {

    this.loaded$ = store.pipe(select(fromMeasurements.selectLoaded))
    this.measurements$ = store.pipe(select(fromMeasurements.selectAllMeasurements))
  }

  dispatch (action: Action) {
    this.store.dispatch(action)
  }
}
