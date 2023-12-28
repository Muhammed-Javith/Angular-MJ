import { Directive, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { 
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    // this.el.nativeElement.style.color = 'black';
    // this.el.nativeElement.style.fontWeight = 'bold';
    // this.el.nativeElement.style.fontSize = '20px';
    // this.el.nativeElement.style.fontStyle = 'italic';

  }
  @HostListener('mouseenter') MouseEnter(){
    this.Highlight('yellow')
  }
  @HostListener('mouseleave') MouseLeave(){
    this.Highlight('')
  }
  private Highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }


}
