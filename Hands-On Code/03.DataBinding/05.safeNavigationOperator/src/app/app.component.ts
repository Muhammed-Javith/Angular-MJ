import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'safeNavigationOperator';
  users = [
    { details: { name: 'Javith'}},
    {details: { name: 'Akthar'}},
  ]
}
