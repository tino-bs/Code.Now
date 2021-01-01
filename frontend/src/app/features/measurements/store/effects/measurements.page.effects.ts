import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, exhaustMap } from 'rxjs/operators'

import { actionLoadMeasurements } from '../actions/measurements.master.page.actions'
import { actionLoadMeasurementsSuccess, actionLoadMeasurementsError } from '../actions/measurements.api.actions'
import { MeasurementsHttpService } from '../../services/measurements.http.service'
import { ApiV1Response, Measurements } from '../../models/measurements.models'

@Injectable()
export class MeasurementsPageEffects {

  constructor (
    private actions$: Actions,
    private measurementsHttpService: MeasurementsHttpService,
  ) {
  }

  effectLoadMeasurements = createEffect(() =>
    this.actions$.pipe(
      ofType(actionLoadMeasurements),
      exhaustMap(() =>
        this.measurementsHttpService.getMeasurements().pipe(
          map((resp: ApiV1Response<Measurements>) => actionLoadMeasurementsSuccess({ resp }),
          ),
          catchError(error => of(actionLoadMeasurementsError({ error }))),
        ),
      ),
    ),
  )
}
