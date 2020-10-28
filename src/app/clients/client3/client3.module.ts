import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Client3RoutingModule } from './client3-routing.module';
import { ThirdClientComponent } from './third-client/third-client.component';


@NgModule({
  declarations: [ThirdClientComponent],
  imports: [
    CommonModule,
    Client3RoutingModule
  ]
})
export class Client3Module { }
