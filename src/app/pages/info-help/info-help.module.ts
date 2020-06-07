import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { InfoHelpComponent } from './info-help.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

const rutas: Routes = [
  {
    path: '',
    component: InfoHelpComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rutas),
    WidgetsModule
  ],
  declarations: [InfoHelpComponent]
})
export class InfoHelpPageModule {}