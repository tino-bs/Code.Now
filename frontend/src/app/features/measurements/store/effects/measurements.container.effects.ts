import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Action } from '@ngrx/store'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { tap } from 'rxjs/operators'

import { featureNameMeasurements } from '~/app/features'
import { actionLoadMeasurementsError } from '../actions/measurements.api.actions'

@Injectable()
export class MeasurementsContainerEffects {

  constructor (
    private actions$: Actions<Action>,
    private router: Router,
  ) {
  }

  effectLoadMeasurementsError = createEffect(() =>
      this.actions$.pipe(
        ofType(
          actionLoadMeasurementsError,
        ),
        tap(() => {
          this.router.navigate([featureNameMeasurements])
        }),
      ),
    { dispatch: false },
  )
}
