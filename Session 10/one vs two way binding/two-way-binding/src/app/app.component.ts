import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'playground';
  username: string = '';
  password: string = '';

  changeTitle(e: any) {
    this.title = e.target.value;
  }
}
