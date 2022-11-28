import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movie: any;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.movie = this.dataService.detail;
  }
}
