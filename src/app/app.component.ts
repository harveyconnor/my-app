import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My App';
  isClicked = false;

  tit = '';

  onClick() {
    this.isClicked = !this.isClicked;
  }
}
