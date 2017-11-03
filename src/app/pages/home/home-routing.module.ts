import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcceptGuard } from '../../shared/guards/accept.guard';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // AcceptGuard によるガードを設定する
  { path: 'home', component: HomeComponent, canActivate: [AcceptGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
