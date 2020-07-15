import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre='Kevin Bayona';
  saldo='1000.50';
  dias=['Domingo','Lunes','Martes', 'Miercoles','Jueves','Viernes', 'Savado'];
  articulos = [{
    codigo: 1,
    descripcion: "papas",
    precio: 12.33
  },{
    codigo: 2,
    descripcion: "manzanas",
    precio: 54
  }];
  fechaActual=new Date();
}
