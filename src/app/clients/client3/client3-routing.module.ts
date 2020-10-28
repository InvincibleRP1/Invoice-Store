import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThirdClientComponent} from './third-client/third-client.component'

const routes: Routes = [
  {
    path:'client3', component: ThirdClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Client3RoutingModule { }
