import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaingraphComponent } from './maingraph/maingraph.component';
import { ChartsModule } from 'ng2-charts';
import { GlobalinfoComponent } from './globalinfo/globalinfo.component';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    MaingraphComponent,
    GlobalinfoComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    DataTablesModule
  ],
  exports: [
    MaingraphComponent,
    GlobalinfoComponent
  ]
})
export class WidgetsModule { }
