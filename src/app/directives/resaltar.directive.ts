import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor( private element: ElementRef ) { 
  }
  
  // mouseEntro es solo un alias, y se puede obviar
  @HostListener('mouseenter') mouseEntro() {
    this.element.nativeElement.style.backgroundColor = 'yellow'; 
  }

  @HostListener('mouseleave') mouseSalio() {
    this.element.nativeElement.style.backgroundColor = null; 
  }

}
