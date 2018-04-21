import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.color = '#7700FD';
    this.elem.nativeElement.style.fontsize = '26px';
   }

}
