import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs.component';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [DogsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [DogsComponent]
})
export class DogsModule { }
