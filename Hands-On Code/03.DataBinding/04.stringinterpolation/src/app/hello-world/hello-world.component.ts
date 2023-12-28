import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  title = "Learn Angular 16 from scratch";
  color = 'darkgreen';
  getTitle() { 
    return this.title;
  }
}
