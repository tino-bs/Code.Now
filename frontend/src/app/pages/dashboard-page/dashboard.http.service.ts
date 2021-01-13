import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from '~/environments/environment'
import { AbstractHttpService } from '~/app/core/http'

@Injectable()
export class DashboardHttpService extends AbstractHttpService {

  constructor (
    protected httpClient: HttpClient,
  ) {
    super(httpClient)

    this.apiUrl = 'http://localhost:4000/'
  }

  public getGreeting () {
    return this.getRequest<string[]>()
  }
}
