import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaingraphComponent } from './maingraph/maingraph.component';
import { ChartsModule } from 'ng2-charts';
import { GlobalinfoComponent } from './globalinfo/globalinfo.component';
import { DataTablesModule } from 'angular-datatables';
import { QueEsComponent } from './que-es/que-es.component';
import { ConsejosComponent } from './consejos/consejos.component';
import { MasInfoComponent } from './mas-info/mas-info.component';



@NgModule({
  declarations: [
    MaingraphComponent,
    GlobalinfoComponent,
    QueEsComponent,
    ConsejosComponent,
    MasInfoComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    DataTablesModule
  ],
  exports: [
    MaingraphComponent,
    GlobalinfoComponent,
    QueEsComponent,
    ConsejosComponent,
    MasInfoComponent
  ]
})
export class WidgetsModule { }
