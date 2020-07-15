import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegosModule } from './juegos/juegos.module';
import { AcercadeModule } from './acercade/acercade.module';

import { JuegosComponent } from './juegos/juegos.component';
import { AcercadeComponent } from './acercade/acercade.component';

const routes: Routes = [
  {
    path:'juegodados',
    component:JuegosComponent
  },
  {
    path:'acercade',
    component:AcercadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
