import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { CatsComponent } from './modules/pages/cats/cats.component';
import { DogsComponent } from './modules/pages/dogs/dogs.component';
import { ChooseOptionComponent } from './modules/pages/choose-option/choose-option.component';
import { OptionGuardService } from './core/services/option.service';

const routes: Routes = [
  {
    path: 'choose',
    component: ChooseOptionComponent,
    canActivate: [OptionGuardService]
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'cats',
        component: CatsComponent
      },
      {
        path: 'dogs',
        component: DogsComponent
      }
    ],
    canActivate: [OptionGuardService]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [OptionGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
