import { createAction, props } from '@ngrx/store'
import { ApiV1Response, Measurements } from '../../models/measurements.models'

// measurements
export const actionLoadMeasurementsSuccess = createAction(
  '[Measurements API] Load Success',
  props<{ resp: ApiV1Response<Measurements> }>(),
)

// general request error
export const actionLoadMeasurementsError = createAction(
  '[Measurements API] Load Error',
  props<{ error: any }>(),
)
