import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  cars:string[] = [];
  cardataupdated(carsData:string[]){
    this.cars = carsData;
  }

}
