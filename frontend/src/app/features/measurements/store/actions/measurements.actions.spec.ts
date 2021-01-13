import { actionLoadMeasurements } from './measurements.master.page.actions'
import { actionLoadMeasurementsSuccess, actionLoadMeasurementsError } from './measurements.api.actions'
import { testApiV1Response } from '../../models/measurements.models'

describe('Measurements Actions', () => {
  it('should create LoadMeasurements action', () => {
    const action = actionLoadMeasurements()

    expect(action.type).toEqual('[Measurements Page] Load Measurements')
  })

  it('should create LoadMeasurementsSuccess action', () => {
    const action = actionLoadMeasurementsSuccess({ resp: testApiV1Response })

    expect(action.type).toEqual('[Measurements API] Load Success')
    expect(action.resp).toEqual(jasmine.objectContaining(testApiV1Response))
  })

  it('should create LoadMeasurementsError action', () => {
    const action = actionLoadMeasurementsError({ error: {} })

    expect(action.type).toEqual('[Measurements API] Load Error')
  })
})
