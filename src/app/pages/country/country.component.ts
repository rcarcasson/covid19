import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Country } from 'src/app/models/summary.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country: Country;
  flag = '';


  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.country = JSON.parse(localStorage.getItem('country'));
    this.flag = 'flag-icon flag-icon-' + String(this.country.CountryCode).toLowerCase();
    console.log(this.country);
  }

}
