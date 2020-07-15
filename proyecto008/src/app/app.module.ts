import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadearticulosComponent } from './listadearticulos/listadearticulos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadearticulosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
