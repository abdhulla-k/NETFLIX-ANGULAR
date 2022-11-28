import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent {
  @Input() movie: any;
  @Input() index: any;

  constructor( private dataService: DataService, private router: Router) {}

  showDetails() {
    // console.log(this.movie);
    this.dataService.detail = this.movie;
    this.router.navigate(['/details']);
    console.log("emitted")
  }
}
