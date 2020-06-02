import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import _ from 'lodash';
import { CovidService } from './covid.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidProvider {

  constructor(private covidService: CovidService) { }

  public getByCountryAllStatus(country: string): Observable<any> {

    const cbOk = response => {
      return response;
    };

    const cbError = error => {
      return throwError(error);
    };

    return this.covidService.getByCountryAllStatus('chile')
      .pipe(map(cbOk))
      .pipe(catchError(cbError));

  }

  public getSummary(): Observable<any> {

    const cbOk = response => {
      return response;
    };

    const cbError = error => {
      return throwError(error);
    };

    return this.covidService.getSummary()
      .pipe(map(cbOk))
      .pipe(catchError(cbError));
  }
}
