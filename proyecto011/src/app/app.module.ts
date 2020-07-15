import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegosModule } from './juegos/juegos.module';
import { AcercadeModule } from './acercade/acercade.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JuegosModule,
    AcercadeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
