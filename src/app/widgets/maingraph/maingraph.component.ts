import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import _ from 'lodash';
import { CountryStats } from 'src/app/models/countrystats.model';
import { CovidProvider } from 'src/app/services/covid.provider';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-maingraph',
  templateUrl: './maingraph.component.html',
  styleUrls: ['./maingraph.component.css']
})
export class MaingraphComponent implements OnInit, OnDestroy {
  @Input() data: CountryStats;
  indice = 0;
  suscripcion: Subscription;

    lineChartData: ChartDataSets[];

    // tslint:disable-next-line: max-line-length
    lineChartLabels: Label[];

    lineChartOptions = {
      responsive: true,
    };

    lineChartColors: Color[] = [
    { backgroundColor: 'rgba(66, 135, 255, 0.91)', borderColor: 'rgba(66, 135, 255, 0.91)' },
    { backgroundColor: 'rgba(255, 242, 66, 0.91)', borderColor: 'rgba(225, 208, 25, 0.91)' },
    { backgroundColor: 'rgba(200, 9, 9, 0.91)', borderColor: 'rgba(200, 9, 9, 0.91)' },
    { backgroundColor: 'rgba(86, 200, 9, 0.91)', borderColor: 'rgba(86, 200, 9, 0.91)' }
    ];

    lineChartLegend = true;
    lineChartPlugins = [];
    lineChartType = 'line';

  constructor(private covidProvider: CovidProvider) { }

  ngOnInit() {
    this.data = _.reverse(this.data);
    this.suscripcion = this.covidProvider.semana$.subscribe( semana => {
      this.indice = semana;
      this.generarGrafico();
    });
    this.generarGrafico();
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }

  private generarGrafico() {
    let dataFiltrada: CountryStats;
    dataFiltrada = _.slice(this.data, this.indice, this.indice + 7);
    dataFiltrada = _.reverse(dataFiltrada);
    this.lineChartData = [
      // tslint:disable-next-line: max-line-length
      { data: _.map(dataFiltrada, 'Active'), label: 'Activos', backgroundColor: 'rgba(66, 135, 255, 0.91)', borderColor: 'black', fill: false },
      // tslint:disable-next-line: max-line-length
      { data: _.map(dataFiltrada, 'Confirmed'), label: 'Confirmados', backgroundColor: 'rgba(255, 242, 66, 0.91)', borderColor: 'black', fill: false },
      // tslint:disable-next-line: max-line-length
      { data: _.map(dataFiltrada, 'Deaths'), label: 'Fallecidos', backgroundColor: 'rgba(200, 9, 9, 0.91)', borderColor: 'black', fill: false },
      // tslint:disable-next-line: max-line-length
      { data: _.map(dataFiltrada, 'Recovered'), label: 'Recuperados', backgroundColor: 'rgba(86, 200, 9, 0.91)', borderColor: 'black', fill: false }
    ];

    this.lineChartLabels = _.map(dataFiltrada, this.extraeFecha);
  }

  private extraeFecha(fecha: CountryStats) {
    const finalFecha: any = fecha.Date.toString().split('T');
    return finalFecha[0];
  }

  semanaAnterior() {
    this.indice = this.indice + 7;
  }

  semanaSiguiente() {
    if (this.indice === 0) {
      return;
    }

    this.indice = this.indice - 7;
  }

}
