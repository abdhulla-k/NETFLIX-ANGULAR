import { Component, Input } from '@angular/core';

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

  changeTextStatus() {
    this.changeText = !this.changeText;
  }
}
