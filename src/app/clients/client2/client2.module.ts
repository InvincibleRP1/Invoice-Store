import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Client2RoutingModule } from './client2-routing.module';
import { SecondClientComponent } from './second-client/second-client.component';


@NgModule({
  declarations: [SecondClientComponent],
  imports: [
    CommonModule,
    Client2RoutingModule
  ]
})
export class Client2Module { }
