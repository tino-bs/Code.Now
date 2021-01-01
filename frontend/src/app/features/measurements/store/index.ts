import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'

import { AppState } from '~/app/core/core.state'

import { featureNameMeasurements } from '~/app/features'
import * as fromMeasurements from './reducers/measurements.reducer'

export interface MeasurementsState {
  measurements: fromMeasurements.State
}

export interface State extends AppState {
  measurements: MeasurementsState
}

export const measurementsReducer: ActionReducerMap<MeasurementsState> = {
  measurements: fromMeasurements.measurementsReducer,
}

export const selectMeasurementFeature = createFeatureSelector<MeasurementsState>(featureNameMeasurements)

export const selectMeasurementEntitiesState = createSelector(
  selectMeasurementFeature,
  state => state.measurements,
)

export const selectMeasurementsEntities = createSelector(selectMeasurementEntitiesState, fromMeasurements.getMeasurementsEntities)
export const selectMeasurementsIds = createSelector(selectMeasurementEntitiesState, fromMeasurements.getMeasurementsIds)
export const selectLoaded = createSelector(selectMeasurementEntitiesState, (state: fromMeasurements.State) => state.loaded)
export const selectError = createSelector(selectMeasurementEntitiesState, (state: fromMeasurements.State) => state.error)

export const selectAllMeasurements = createSelector(
  selectMeasurementsEntities,
  selectMeasurementsIds,
  (entities, ids: string[]) => {
    return ids.map(id => entities[id])
  },
)
