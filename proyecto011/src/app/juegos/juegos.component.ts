import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  valor1:number;
  valor2:number;
  valor3:number;
  resultado: string;

  constructor() {
    this.valor1=this.retornaAleatorio();
    this.valor2=this.retornaAleatorio();
    this.valor3=this.retornaAleatorio();
   }

   retornaAleatorio(){
     return Math.trunc(Math.random()*6)+1;
   }

   tirar(){
     this.valor1=this.retornaAleatorio();
     this.valor2=this.retornaAleatorio();
     this.valor3=this.retornaAleatorio();
     if(this.valor1==this.valor2 && this.valor1==this.valor3){
       this.resultado='Gano!!!';
     }else{
       this.resultado='Perdio';
     }
   }

  ngOnInit(): void {
  }

}
