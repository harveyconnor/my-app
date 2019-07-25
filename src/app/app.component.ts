import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my app';
  isClicked = false;

  tit = '';

  onClick() {
    this.isClicked = !this.isClicked;
  }
}
