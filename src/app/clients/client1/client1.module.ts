import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Client1RoutingModule } from './client1-routing.module';
import { FirstClientComponent } from './first-client/first-client.component';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { Project3Component } from './project3/project3.component';


@NgModule({
  declarations: [FirstClientComponent, Project1Component, Project2Component, Project3Component],
  imports: [
    CommonModule,
    Client1RoutingModule
  ]
})
export class Client1Module { }
