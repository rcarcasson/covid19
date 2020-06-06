import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import _ from 'lodash';
import { CountryStats } from 'src/app/models/countrystats.model';


@Component({
  selector: 'app-maingraph',
  templateUrl: './maingraph.component.html',
  styleUrls: ['./maingraph.component.css']
})
export class MaingraphComponent implements OnInit {
  @Input() data: CountryStats;
  indice = 0;

    lineChartData: ChartDataSets[];

    // tslint:disable-next-line: max-line-length
    lineChartLabels: Label[];

    lineChartOptions = {
      responsive: true,
    };

    lineChartColors: Color[] = [
    { backgroundColor: 'rgba(66, 135, 255, 0.91)', borderColor: 'rgba(66, 135, 255, 0.91)' },
    { backgroundColor: 'rgba(255, 242, 66, 0.91)', borderColor: 'rgba(255, 242, 66, 0.91)' },
    { backgroundColor: 'rgba(200, 9, 9, 0.91)', borderColor: 'rgba(200, 9, 9, 0.91)' },
    { backgroundColor: 'rgba(86, 200, 9, 0.91)', borderColor: 'rgba(86, 200, 9, 0.91)' }
    ];

    lineChartLegend = true;
    lineChartPlugins = [];
    lineChartType = 'line';

  constructor() { }

  ngOnInit() {
    this.data = _.reverse(this.data);
    this.generarGrafico();
  }

  private generarGrafico() {
    let dataFiltrada: CountryStats;
    dataFiltrada = _.slice(this.data, this.indice, 7);
    dataFiltrada = _.reverse(dataFiltrada);
    this.lineChartData = [
      // tslint:disable-next-line: max-line-length
      { data: _.map(dataFiltrada, 'Active'), label: 'Activos', backgroundColor: 'rgba(66, 135, 255, 0.91)', borderColor: 'black', fill: false },
      // tslint:disable-next-line: max-line-length
      { data: _.map(dataFiltrada, 'Confirmed'), label: 'Confirmados', backgroundColor: 'rgba(255, 242, 66, 0.91)', borderColor: 'black', fill: false },
      // tslint:disable-next-line: max-line-length
      { data: _.map(dataFiltrada, 'Deaths'), label: 'Muertos', backgroundColor: 'rgba(200, 9, 9, 0.91)', borderColor: 'black', fill: false },
      // tslint:disable-next-line: max-line-length
      { data: _.map(dataFiltrada, 'Recovered'), label: 'Recuperados', backgroundColor: 'rgba(86, 200, 9, 0.91)', borderColor: 'black', fill: false }
    ];

    this.lineChartLabels = _.map(dataFiltrada, this.extraeFecha);
  }

  private extraeFecha(fecha: CountryStats) {
    const finalFecha: any = fecha.Date.toString().split('T');
    return finalFecha[0];
  }

}
