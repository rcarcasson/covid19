import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageModule } from './main/main.module';
import { CountryPageModule } from './country/country.module';
import { InfoHelpPageModule } from './info-help/info-help.module';
import { AboutPageModule } from './about/about.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainPageModule,
    CountryPageModule,
    InfoHelpPageModule,
    AboutPageModule
  ]
})
export class PagesModule { }
