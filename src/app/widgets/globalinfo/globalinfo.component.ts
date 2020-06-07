import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidProvider } from 'src/app/services/covid.provider';
import _ from 'lodash';
import { Summary } from 'src/app/models/summary.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-globalinfo',
  templateUrl: './globalinfo.component.html',
  styleUrls: ['./globalinfo.component.css']
})
export class GlobalinfoComponent implements OnInit{
  @ViewChild('paises', {static: true}) table;

  summary: Summary;
  cargando = true;
  error = false;
  dtOptions: any = {};
  dataTable: any;
  updateDate: any;

  constructor(
    private covidProvider: CovidProvider,
    private router: Router
  ) { }

  getCountry(info: any): void {
    localStorage.setItem('country', JSON.stringify(info));
    this.router.navigate(['/pais', String(_.get(info, 'CountryCode')).toLowerCase()]);
  }

  ngOnInit() {
    this.getSummary();
  }

  public getSummary() {
    this.cargando = true;

    const cbOK = response => {
      this.cargando = false;
      this.error = false;
      this.summary = response;
      this.updateDate = new Date(this.summary.Date);
      this.dtOptions = {
        data: this.summary.Countries,
        language: {
          lengthMenu: 'Mostrar _MENU_ registros por página',
          info: 'Mostrando página _PAGE_ de _PAGES_',
          infoEmpty: 'No hay registros para desplegar',
          infoFiltered: '(filtrado desde un total de _MAX_ registros)',
          search: 'Buscar: ',
          paginate: {
            first: 'Inicio',
            last: 'Último',
            next: 'Sig.',
            previous: 'Prev.'
          }
        },
        columns: [{
          title: 'País',
          data: 'Country',
        },
        {
          title: 'Nuevos confirmados',
          data: 'NewConfirmed',
          sClass: 'text-right'
        },
        {
          title: 'Total confirmados',
          data: 'TotalConfirmed',
          sClass: 'text-right text-primary text-bold'
        },
        {
          title: 'Nuevos Fallecidos',
          data: 'NewDeaths',
          sClass: 'text-right'
        },
        {
          title: 'Total fallecidos',
          data: 'TotalDeaths',
          sClass: 'text-right text-danger text-bold'
        },
        {
          title: 'Nuevos recuperados',
          data: 'NewRecovered',
          sClass: 'text-right'
        },
        {
          title: 'Total recuperados',
          data: 'TotalRecovered',
          sClass: 'text-right text-success text-bold'
        }],
        responsive: true,
        rowCallback: (row: Node, data: any[] | object, index: number) => {
          const self = this;
          $('td', row).off('click');
          $('td', row).on('click', () => {
            self.getCountry(data);
          });
          return row;
        }
      };

    };

    const cbError = error => {
      this.error = true;
      this.cargando = false;
    };

    this.covidProvider.getSummary().subscribe(cbOK, cbError);
  }

}
