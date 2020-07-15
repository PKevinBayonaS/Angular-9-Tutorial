import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperComponent } from './developer/developer.component';
import { AcercadeComponent } from './acercade.component';



@NgModule({
  exports:[AcercadeComponent],
  declarations: [DeveloperComponent, AcercadeComponent],
  imports: [
    CommonModule
  ]
})
export class AcercadeModule { }
