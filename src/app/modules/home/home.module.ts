import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ChooseOptionModule } from '../pages/choose-option/choose-option.module';
import { DogsModule } from '../pages/dogs/dogs.module';
import { CatsModule } from '../pages/cats/cats.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DogsModule,
    CatsModule
  ]
})
export class HomeModule { }
