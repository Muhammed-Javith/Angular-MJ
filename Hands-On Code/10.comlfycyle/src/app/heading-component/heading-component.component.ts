import { Component, Input, OnChanges,SimpleChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-heading-component',
  templateUrl: './heading-component.component.html',
  styleUrls: ['./heading-component.component.css']
})
export class HeadingComponentComponent implements OnChanges, OnInit {
  @Input() text =''
  ngOnChanges(changes: SimpleChanges):void{
      
    // if(changes['text'].isFirstChange()) {
    //   console.log("you modifying original value")
      console.log("ngOnchanges called");
    // }
    // console.log("ngOnchanges called",changes);
    // console.log("ngOnchanges called",changes['text'].currentValue);
    // console.log("ngOnchanges called",changes['text'].previousValue);
    // console.log("ngOnchanges called",changes['text'].firstChange);

  }
  ngOnInit(): void {
    console.log("ngOnInit called");
    // Initialization logic here
    this.text='First Value';
  }

}
