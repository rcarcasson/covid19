import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './country.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

const rutas: Routes = [
  {
    path: '',
    component: CountryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rutas),
    WidgetsModule
  ],
  declarations: [CountryComponent]
})
export class CountryPageModule {}
