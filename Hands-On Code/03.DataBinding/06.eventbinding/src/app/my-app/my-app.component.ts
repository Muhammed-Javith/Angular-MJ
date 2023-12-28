import { Component } from '@angular/core';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent {
  clickCount = 0;
  clickme(){
    this.clickCount++;
  }
  value = '';
  value1= '';
  handleInput(event:any){
    this.value = (event.target as HTMLInputElement).value;
  }

}
