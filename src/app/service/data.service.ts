import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // url to fetch data from
  url: string = 'https://api.themoviedb.org/3';

  api_key: string = '40f683e4602127f11f62ae016bd0b5c5';
  selectedCategory = new EventEmitter<String>();

  constructor(private http: HttpClient) { }

  // show all movie. emit category
  showAll(category: String) {
    this.selectedCategory.emit(category);
  }

  // function to get the latest movie details. this function will return an observable object.
  getLatestMovie(): Observable<any> {
    // returning the lates movie data
    return this.http.get<any>(this.url+"/movie/latest?api_key="+this.api_key);
  }

  // function to get the popular movie details. this function will return an observable object.
  getPopularMovies(): Observable<any> {
    return this.http.get(<any>(this.url+"/movie/popular?api_key="+this.api_key))
  }
  
  // function to get now playing movie details. this function will return an observable object.
  getNowPlayingMovies(): Observable<any> {
    return this.http.get(<any>(this.url+"/movie/now_playing?api_key="+this.api_key))
  }

  // function to get top rated movie details. this function will return an observable object.
  getTopRatedMovies(): Observable<any> {
    return this.http.get(<any>(this.url+"/movie/top_rated?api_key="+this.api_key))
  }

  // function to get upcoming movie details. this function will return an observable object.
  getUpComingMovies(): Observable<any> {
    return this.http.get(<any>(this.url+"/movie/upcoming?api_key="+this.api_key))
  }

  // function to get trending movie details. this function will return an observable object.
  getTrendingMovies(): Observable<any> {
    return this.http.get(<any>(this.url+"/trending/all/week?api_key="+this.api_key))
  }

  // function to get series details. this function will return an observable object.
  getOriginals(): Observable<any> {
    return this.http.get(<any>(this.url+"/discover/tv?api_key="+this.api_key))
  }

}
