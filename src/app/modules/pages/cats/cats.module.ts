import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './cats.component';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [CatsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [CatsComponent]
})
export class CatsModule { }
