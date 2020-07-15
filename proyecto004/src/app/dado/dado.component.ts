import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  @Input() valor: number;

  constructor() { }

  ngOnInit(): void {
  }

}
