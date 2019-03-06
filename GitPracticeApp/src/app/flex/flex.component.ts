import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {

  constructor() { }
  
  array: any[] = ['Cuenta de Ahorros', 340000, 470000];

  ngOnInit() {


  }

}
