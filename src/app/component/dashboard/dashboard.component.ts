import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  api_key: string = '40f683e4602127f11f62ae016bd0b5c5';

  // varibles to save movies data;
  latestMove: any;
  popularMovies: any;
  nowPlayingMovies: any;
  topRatedMovies: any;
  upComingMovies: any;
  trendingMovies: any;
  originals: any;

  hi = "hi"

  constructor( private dataService: DataService) {}

  ngOnInit(): void {
    // call all function after the component got initialized.
    this.getLatestMovie();
    this.getPopularMovies();
    this.getNowPlayingMovies();
    this.getTopRatedMovies();
    this.getUpCommingMovies();
    this.getTrendingMovies();
    this.getOriginal();
    setInterval(()=>{
      this.hi += 'o';
    }, 3000)
  }

  // this is the function to modify all data fetched. this function will go through all elements and make sure there is title available.
  modifyData(data, category) {
    if(data.results) {
      // go through all the elements of array
      data.results.forEach(element => {
        element.backdrop_path = "https://image.tmdb.org/t/p/original"+element.backdrop_path+"?api_key="+this.api_key;
        element.category = category;

        // make sure there is title available
        if(!element.title) {
          element.title = element.name;
        }
      });
    }

    // return modified data
    return data;
  }

  changeData(data: any): any {
    if(!data.backdrop_path) {
      data.backdrop_path = "https://image.tmdb.org/t/p/original"+data.poster_path+"?api_key="+this.api_key
      console.log( data.backdrop_path);
    } else {
      data.backdrop_path = "https://image.tmdb.org/t/p/original"+data.backdrop_path+"?api_key="+this.api_key
      console.log( data.backdrop_path);
    }
    return data;
  }

  // function to fetch lates movies
  getLatestMovie() {
    this.dataService.getLatestMovie().subscribe(data => {
      // assign modified data to variable
      this.latestMove = this.changeData(data);
    }, err => {
      console.log("error while geting latest movie");
      console.log(err);
    })
  }

  // function to fetch popular movies
  getPopularMovies() {
    this.dataService.getPopularMovies().subscribe(data => {
      // assign modified data to variable
      this.popularMovies = this.modifyData(data, 'popular');
      console.log(this.popularMovies);
    }, err => {
      console.log("error while fitching popular movies");
      console.log(err)
    })
  }

  // function to fetch now playing movies
  getNowPlayingMovies() {
    this.dataService.getNowPlayingMovies().subscribe(data => {
      // assign modified data to variable
      this.nowPlayingMovies = this.modifyData(data, 'nowPlaying');
    }, err => {
      console.log("error while fitching popular movies");
      console.log(err)
    })
  }

  // function to fetch top rated movies
  getTopRatedMovies() {
    this.dataService.getTopRatedMovies().subscribe(data => {
      // assign modified data to variable
      this.topRatedMovies = this.modifyData(data, 'topRated');
    }, err => {
      console.log("error while fitching popular movies");
      console.log(err)
    })
  }

  // function to fetch upcoming movies
  getUpCommingMovies() {
    this.dataService.getUpComingMovies().subscribe(data => {
      // assign modified data to variable
      this.upComingMovies = this.modifyData(data, 'upcoming');
    }, err => {
      console.log("error while fitching popular movies");
      console.log(err)
    })
  }

  // function to fetch trending movies
  getTrendingMovies() {
    this.dataService.getTrendingMovies().subscribe(data => {
      // assign modified data to variable
      this.trendingMovies = this.modifyData(data, 'trending');
    }, err => {
      console.log("error while fitching popular movies");
      console.log(err)
    })
  }

  // function to fetch serieses
  getOriginal() {
    // call function from service
    this.dataService.getOriginals().subscribe(data => {
      // assign modified data to variable
      this.originals = this.modifyData(data, 'series');
    }, err => {
      console.log("error while fitching popular movies");
      console.log(err)
    })
  }

}
