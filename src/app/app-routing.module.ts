import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllMoviesComponent } from './component/all-movies/all-movies.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DetailsComponent } from './component/details/details.component';
import { MoviesComponent } from './component/movies/movies.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category', component: MoviesComponent },
  { path: 'showAll', component: AllMoviesComponent },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
