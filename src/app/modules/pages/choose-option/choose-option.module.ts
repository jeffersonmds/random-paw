import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseOptionComponent } from './choose-option.component';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [ChooseOptionComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ChooseOptionComponent]
})
export class ChooseOptionModule { }
