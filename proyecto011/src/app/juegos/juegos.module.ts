import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadoComponent } from './dado/dado.component';
import { JuegosComponent } from './juegos.component';



@NgModule({
  exports: [JuegosComponent],
  declarations: [DadoComponent, JuegosComponent],
  imports: [
    CommonModule
  ]
})
export class JuegosModule { }
