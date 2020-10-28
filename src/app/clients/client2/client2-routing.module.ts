import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SecondClientComponent} from './second-client/second-client.component'

const routes: Routes = [
  {
    path: 'client2', component: SecondClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Client2RoutingModule { }
