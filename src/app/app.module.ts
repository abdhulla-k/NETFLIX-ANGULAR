import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MovieComponent } from './component/dashboard/movie/movie.component';
import { MoviesComponent } from './component/movies/movies.component';
import { HeaderComponent } from './component/header/header.component';
import { AllMoviesComponent } from './component/all-movies/all-movies.component';
import { SingleMovieComponent } from './component/all-movies/single-movie/single-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieComponent,
    MoviesComponent,
    HeaderComponent,
    AllMoviesComponent,
    SingleMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
