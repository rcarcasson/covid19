import { Injectable, EventEmitter } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import _ from 'lodash';
import { CovidService } from './covid.service';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidProvider {

  semana$ = new EventEmitter<number>();

  constructor(private covidService: CovidService) { }

  public getByCountryAllStatus(country: string): Observable<any> {
    const result = {
      infoCovid: [],
      infoPais: {}
    };

    const cbOk = response => {
      result.infoCovid = response;
      return this.getCountryInfo(country);
    };

    const cbOkPais = response => {
      result.infoPais = response;
      return result;
    };

    const cbError = error => {
      return throwError(error);
    };

    return this.covidService.getByCountryAllStatus(country)
      .pipe(mergeMap(cbOk))
      .pipe(map(cbOkPais))
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

  public getCountryInfo(country: string): Observable<any> {
    const result = {
      codigo: 0,
      mensaje: '',
      datos: {
        capital: '',
        poblacion: 0
      }
    };

    const cbOk = response => {
      result.codigo = 200;
      result.datos.capital = _.get(response, 'capital', '');
      result.datos.poblacion = _.get(response, 'population', '');
      return result;

    };

    const cbError = error => {
      return throwError(error);
    };

    return this.covidService.getInfoCountry(country)
      .pipe(map(cbOk))
      .pipe(catchError(cbError));
  }
}
