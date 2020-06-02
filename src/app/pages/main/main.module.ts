import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

const rutas: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rutas),
    WidgetsModule
  ],
  declarations: [MainComponent]
})
export class MainPageModule {}
