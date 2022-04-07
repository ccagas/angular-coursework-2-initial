import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display: boolean = true;

  clicks: any[] = [];

  onToggleDisplay() {
    this.display = !this.display;
    this.clicks.push(this.clicks.length);
  }
}
