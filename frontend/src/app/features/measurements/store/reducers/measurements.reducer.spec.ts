import { initialState, measurementsReducer, State } from './measurements.reducer'
import {
  actionLoadMeasurementsSuccess,
  actionLoadMeasurementsError,
} from '../actions/measurements.api.actions'
import { testMeasurement, testApiV1Response } from '../../models/measurements.models'

describe('Measurements Reducer', () => {

  const testMeasurementsState: State = {
    loaded: false,
    ids: [],
    entities: {},
  }

  describe('with a valid initial state', () => {
    it('should return the initial state', () => {
      const action = {} as any
      const state = measurementsReducer(undefined, action)

      expect(state).toBe(initialState)
    })
  })

  describe('retrieving the LoadMeasurementsSuccess action', () => {
    const testActionLoadMeasurementsSuccess = actionLoadMeasurementsSuccess({ resp: testApiV1Response })
    const testStateLoadMeasurements = measurementsReducer(testMeasurementsState, testActionLoadMeasurementsSuccess)

    it('should create the measurements entities', () => {
      expect(testStateLoadMeasurements.ids[0]).toEqual('test_id')
      expect({ ...testStateLoadMeasurements.entities.test_id }).toEqual(testMeasurement)
    })

    it('should set measurements "loaded" true', () => {
      expect(testStateLoadMeasurements.loaded).toBeTruthy()
    })
  })

  describe('retrieving the LoadMeasurementsError action', () => {
    it('should set measurements "loaded" true', () => {
      const action = actionLoadMeasurementsError({ error: {} })
      const state = measurementsReducer(testMeasurementsState, action)

      expect(state.loaded).toBeTruthy()
    })
  })
})
