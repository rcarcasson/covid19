import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'inicio', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'pais/:country', loadChildren: './pages/country/country.module#CountryPageModule' },
  { path: 'info', loadChildren: './pages/info-help/info-help.module#InfoHelpPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: '**', redirectTo: 'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
