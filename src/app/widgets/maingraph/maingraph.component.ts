import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CovidProvider } from 'src/app/services/covid.provider';


@Component({
  selector: 'app-maingraph',
  templateUrl: './maingraph.component.html',
  styleUrls: ['./maingraph.component.css']
})
export class MaingraphComponent implements OnInit {

    lineChartData: ChartDataSets[] = [
        { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
        ];

    lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

    lineChartOptions = {
    responsive: true,
    };

    lineChartColors: Color[] = [
    {
        borderColor: 'black',
        backgroundColor: 'rgba(255,255,0,0.28)',
    },
    ];

    lineChartLegend = true;
    lineChartPlugins = [];
    lineChartType = 'line';

  constructor(private covidProvider: CovidProvider) { }

  ngOnInit() {
      this.test();
  }

  private test() {
    const cbOk = response => {
        console.log(response);
    };

    const cbError = error => {
        console.log(error);
    };

    // this.covidProvider.getByCountryAllStatus('chile').subscribe(cbOk, cbError);

  }

}
