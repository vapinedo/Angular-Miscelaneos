import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  
    <p [style.fontSize.px]=" fontSize ">
      Hola mundo... esta es una etiqueta
    </p> 

    <button (click)=" fontSize = fontSize - 5 " class="btn btn-success btn-sm mr-1">
      <i class="fa fa-minus"></i>
    </button>

    <button (click)=" fontSize = fontSize + 5 " class="btn btn-primary btn-sm">
      <i class="fa fa-plus"></i>
    </button>

  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  fontSize = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
