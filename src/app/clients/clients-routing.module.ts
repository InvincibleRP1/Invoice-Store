import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientsHomeComponent} from './clients-home/clients-home.component'
import {Client1Module} from './client1/client1.module'
import {Client2Module} from './client2/client2.module'
import {Client3Module} from './client3/client3.module'

const routes: Routes = [
  {path: 'clients' , component: ClientsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), Client1Module, Client2Module, Client3Module],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
