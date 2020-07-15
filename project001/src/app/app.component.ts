import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Principe Kevin Bayona Smythe';
  edad=27;
  email='kevin-bayona@hotmail.com';
  experiencia=[{empresa: 'CCGOLD', duracion: 1},
                {empresa: 'Systematis', duracion: 1},
                {empresa: 'TCS', duracion: 4},
                {empresa: 'CCGOLD', duracion: 1}];
  activo=true;
  sitio='https://www.google.com';
  contador=0;
  unidireccional='Juan';
  bidireccional='';

  esActivo(){
    if(this.activo)
      return 'Trabajo Activo';
    else
      return 'Trabajo Inactivo';
  }

  totalExperiencia(){
    let suma=0;
    this.experiencia.forEach(function(object, key){
      suma+=object.duracion
    });
    return suma;
  }

  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }

}
