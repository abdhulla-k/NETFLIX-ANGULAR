import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  url: string = 'https://api.themoviedb.org/3';
  api_key: string = '40f683e4602127f11f62ae016bd0b5c5';
  allMovies: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPopularMovies();
    this.getAllMovies();
    // this.getNowPlayingMovies();
  }

  getAllMovies() {
    Promise.allSettled([this.getPopularMovies(), this.getNowPlayingMovies()]).then(data => {
      // console.log(data);
    })
  }

  getPopularMovies() {
    this.http.get(<any>(this.url + "/movie/popular?api_key=" + this.api_key)).subscribe(data => {
      this.allMovies = this.modifyData(data);
      return data;
      // this.allMovies = [ ...this.allMovies, ...this.modifyData(data)]
    })
  }

  getNowPlayingMovies() {
    this.http.get(<any>(this.url+"/movie/now_playing?api_key="+this.api_key)).subscribe(data => {
      if(!this.allMovies.results) {
        this.allMovies = this.modifyData(data);
        console.log("thre is no")
      } else {
        console.log("thre is data")
        this.allMovies.results = [...this.allMovies.results, ...this.modifyData(data).results];
        setTimeout(()=>{
          console.log(this.allMovies.results)
        }, 3000);
      }
      return data;
    })
  }

  // this is the function to modify all data fetched. this function will go through all elements and make sure there is title available.
  modifyData(data) {
    if (data.results) {
      // go through all the elements of array
      data.results.forEach(element => {
        element.backdrop_path = "https://image.tmdb.org/t/p/original" + element.backdrop_path + "?api_key=" + this.api_key;

        // make sure there is title available
        if (!element.title) {
          element.title = element.name;
        }
      });
    }

    // return modified data
    return data;
  }
}
