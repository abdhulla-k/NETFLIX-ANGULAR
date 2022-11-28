import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() movie: any;
  @Input() index: any;
  @Input() type: string;
  changeText = true;

  constructor(private dataService: DataService, private router: Router) { }

  changeTextStatus() {
    this.changeText = !this.changeText;
  }

  // show all movies function with category
  showAll() {
    this.dataService.showAll(this.movie.category);
    this.router.navigate(['category']);
  }

  showDetails() {
    // console.log(this.movie);
    this.dataService.detail = this.movie;
    this.router.navigate(['/details']);
  }
}
