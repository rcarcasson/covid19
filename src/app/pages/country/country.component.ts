import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/summary.model';
import { CovidProvider } from 'src/app/services/covid.provider';
import _ from 'lodash';
import { CountryStats } from 'src/app/models/countrystats.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country: Country;
  dataCountry: CountryStats[];
  flag = '';
  cargando = true;


  constructor(
    private covidProvider: CovidProvider
  ) { }

  ngOnInit() {
    this.country = JSON.parse(localStorage.getItem('country'));
    this.flag = 'flag-icon flag-icon-' + String(this.country.CountryCode).toLowerCase();
    this.getCountryAllStatus();
  }

  private getCountryAllStatus() {

    const cbOK = response => {
      this.dataCountry = response;
      this.cargando = false;
    };

    const cbError = error => {
      console.log(error);
    };

    this.covidProvider.getByCountryAllStatus(_.get(this.country, 'CountryCode')).subscribe(cbOK, cbError);
  }

}
