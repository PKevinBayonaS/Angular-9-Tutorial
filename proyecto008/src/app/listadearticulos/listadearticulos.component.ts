import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'listadearticulos',
  templateUrl: './listadearticulos.component.html',
  styleUrls: ['./listadearticulos.component.css']
})
export class ListadearticulosComponent implements OnInit {

  @Input() datos;

  constructor() { }

  ngOnInit(): void {
  }

}
