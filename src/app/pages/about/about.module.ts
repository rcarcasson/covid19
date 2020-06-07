import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

const rutas: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rutas),
    WidgetsModule
  ],
  declarations: [AboutComponent]
})
export class AboutPageModule {}
