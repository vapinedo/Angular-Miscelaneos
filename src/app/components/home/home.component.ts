import { Component, 
    OnChanges, 
    OnInit, 
    DoCheck, 
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked, 
    OnDestroy
  } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <app-clases></app-clases>

  <p appResaltar>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Voluptates molestiae magnam maiores, corporis, aperiam fugit ducimus at 
    numquam voluptatem consequatur est similique cupiditate officia laudantium 
    quisquam quia quos illo eos.
  </p>    

  <app-ng-switch></app-ng-switch>  

  `,
  styles: [
  ]
})
export class HomeComponent implements 
OnChanges, 
OnInit, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked, 
OnDestroy {

  constructor() { 
    console.log( 'Constructor' );
  }

  ngOnChanges(): void {
    console.log( 'ngOnChanges' );
  }

  ngOnInit(): void {
    console.log( 'ngOnInit' );
  }

  ngDoCheck(): void {
    console.log( 'ngDoCheck' );
  }

  ngAfterContentInit(): void {
    console.log( 'ngAfterContentIni' );
  }

  ngAfterContentChecked(): void {
    console.log( 'ngAfterContentChecke' );
  }

  ngAfterViewInit(): void {
    console.log( 'ngAfterViewIni' );
  }

  ngAfterViewChecked(): void {
    console.log( 'ngAfterViewChecked' );
  }

  ngOnDestroy(): void {
    console.log( 'ngOnDestroy' );
  }
  
}
