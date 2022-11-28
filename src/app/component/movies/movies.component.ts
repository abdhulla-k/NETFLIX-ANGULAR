import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  allMovies: any;
  result: any = [{adult: false, backdrop_path: 'https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46u…5Dtr.jpg?api_key=40f683e4602127f11f62ae016bd0b5c5', genre_ids: Array(3), id: 436270,}];
  api_key = '40f683e4602127f11f62ae016bd0b5c5';
  category: any = "popular"
  hi = "hi";

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getPopularMovies();
    setInterval(()=>{
      this.hi+="h"
    }, 1000)
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

  getPopularMovies() {
    this.dataService.selectedCategory.subscribe(category => {
      console.log(category)
      this.category = category;
      if (category === 'popular') {
        this.dataService.getPopularMovies().subscribe(data => {
          this.allMovies = this.modifyData(data);
          console.log(this.allMovies.results);
        })
      }
    }, err => {
      console.log(err);
    })
  }
}
