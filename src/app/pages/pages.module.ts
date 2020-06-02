import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageModule } from './main/main.module';
import { CountryPageModule } from './country/country.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainPageModule,
    CountryPageModule
  ]
})
export class PagesModule { }
