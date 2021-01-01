import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { HttpModule } from './http.module';

@Injectable({
  providedIn: HttpModule
})

/**
 * abstract http service class
 * for list and details
 * with optional runtime caching for GET requests
 */
export class AbstractHttpService {

  public apiUrl: string;

  private cacheSize = 1;
  private cachedList: Observable<any>;
  private cachedDetails: Observable<any>;
  private cachedGet: Observable<any>;
  private cachedId: string;

  constructor(
    protected httpClient: HttpClient,
  ) {
  }

  // generic http requests
  cachableGetRequest<T>(withCredentials?: boolean) {
    // return cached http observable if cache is available and cached id is equal to requested id

    if (!this.cachedGet) {
      this.cachedGet = this.getRequest<T>(withCredentials).pipe(
        shareReplay(this.cacheSize)
      );
    }

    return this.cachedGet;
  }

  getRequest<T>(withCredentials?: boolean) {
    return this.httpClient.get<T>(this.apiUrl, { withCredentials });
  }

  headRequest<T>(withCredentials?: boolean) {
    return this.httpClient.head<T>(this.apiUrl, { withCredentials });
  }

  optionsRequest<T>(withCredentials?: boolean) {
    return this.httpClient.options<T>(this.apiUrl, { withCredentials });
  }

  patchRequest<T1, T2>(payload?: T1, withCredentials?: boolean) {
    return this.httpClient.patch<T2>(this.apiUrl, payload, { withCredentials });
  }

  postRequest<T1, T2>(payload?: T1, withCredentials?: boolean) {
    return this.httpClient.post<T2>(this.apiUrl, payload, { withCredentials });
  }

  putRequest<T>(payload?: T, withCredentials?: boolean) {
    return this.httpClient.put<any>(this.apiUrl, payload, { withCredentials });
  }

  deleteRequest<T>(withCredentials?: boolean) {
    return this.httpClient.delete<T>(this.apiUrl, { withCredentials });
  }

  // list related http requests
  getCachableList<T>() {
    // return cached http observable for list if available

    if (!this.cachedList) {
      this.cachedList = this.fetchCachableList<T>().pipe(
        shareReplay(this.cacheSize)
      );
    }

    return this.cachedList;
  }

  private fetchCachableList<T>() {
    const url = `${this.apiUrl}`;

    return this.httpClient.get<T>(url);
  }

  getCachableListItemDetails<T>(id: string) {
    // return cached http observable if cache is available and cached id is equal to requested id

    if (this.cachedDetails && this.cachedId === id) {
      return this.cachedDetails;
    } else {
      this.cachedId = id;
      this.cachedDetails = this.fetchCachableListItemDetails<T>(id).pipe(
        shareReplay(this.cacheSize)
      );
    }

    return this.cachedDetails;
  }

  private fetchCachableListItemDetails<T>(id: string) {
    const url = `${this.apiUrl}/${id}`;

    return this.httpClient.get<T>(url);
  }

  addOneListItem<T>(toAdd: T, withCredentials?: boolean) {
    return this.httpClient.post<T>(this.apiUrl, toAdd, { withCredentials });
  }

  updateOneListItem<T>(id: string, toUpdate: T, withCredentials?: boolean) {
    const url = `${this.apiUrl}/${id}`;

    return this.httpClient.put<T>(url, toUpdate, { withCredentials });
  }

  deleteOneListItem(id: string, withCredentials?: boolean) {
    const url = `${this.apiUrl}/${id}`;

    return this.httpClient.delete(url, { withCredentials });
  }
}
