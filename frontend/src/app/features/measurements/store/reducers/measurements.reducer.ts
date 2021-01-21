import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'
import { Action, createReducer, on } from '@ngrx/store'

import { Measurement } from '../../models/measurements.models'
import {
  actionLoadMeasurementsSuccess,
  actionLoadMeasurementsError,
} from '../actions/measurements.api.actions'

export interface State extends EntityState<Measurement> {
  loaded: boolean
  selectedId?: string
  error?: any
}

export const adapter: EntityAdapter<Measurement> = createEntityAdapter<Measurement>({
  selectId: (measurement: Measurement) => measurement.location,
  sortComparer: false,
})

export const initialState: State = adapter.getInitialState({
  loaded: false,
})

export const {
  selectIds: getMeasurementsIds,
  selectEntities: getMeasurementsEntities,
  selectAll: getAllMeasurements,
  selectTotal: getTotalMeasurements,
} = adapter.getSelectors()

const reducer = createReducer(
  initialState,
  on(
    actionLoadMeasurementsSuccess, (state, { resp }) => {
    state = { ...state, loaded: true }
    return adapter.setAll(resp, state)
  }),
  on(actionLoadMeasurementsError, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
)

export function measurementsReducer (
  state: State | undefined,
  action: Action,
) {
  return reducer(state, action)
}
