import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import _ from 'lodash';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private endpoint = '';
  constructor(private http: HttpClient) { }

  private cbFailure(error: Response) {
    let auxResponse: any = {
      estado: {
        codigoEstado: 555,
        glosaEstado: 'Ocurrio un error en la ejecución de uno de los servicios.'
      }
    };
    try {
      auxResponse = error.json();
    } catch { }
    return throwError(auxResponse);
  }

  public getByCountryAllStatus(country: string): Observable<any> {
    this.endpoint = _.get(environment, 'ENDPOINTS.COUNTRY_ALL_STATUS', '');
    this.endpoint = _.replace(this.endpoint, '{cod}', country.toLowerCase());

    return this.http.get(this.endpoint)
      .pipe(catchError(this.cbFailure));
  }

  public getSummary(): Observable<any> {
    this.endpoint = _.get(environment, 'ENDPOINTS.SUMMARY', '');

    return this.http.get(this.endpoint)
      .pipe(catchError(this.cbFailure));
  }
}
