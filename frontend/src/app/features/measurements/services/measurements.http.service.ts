import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from '~/environments/environment'
import { AbstractHttpService } from '~/app/core/http'

import { MeasurementsServiceModule } from './measurements.service.module'
import { Measurements } from '../models/measurements.models'

@Injectable({
  providedIn: MeasurementsServiceModule,
})
export class MeasurementsHttpService extends AbstractHttpService {

  constructor (
    protected httpClient: HttpClient,
  ) {
    super(httpClient)

    this.apiUrl = environment.oaqApiV1 + '/measurements?limit=4'
  }

  public getMeasurements () {
    return this.getCachableList<Measurements>()
  }
}
