import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './cats.component';



@NgModule({
  declarations: [CatsComponent],
  imports: [
    CommonModule
  ],
  exports: [CatsComponent]
})
export class CatsModule { }
