import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstClientComponent } from './first-client/first-client.component'
import { Project1Component } from './project1/project1.component'
import { Project2Component } from './project2/project2.component'
import { Project3Component } from './project3/project3.component'

const routes: Routes = [
  {
    path: 'client1', component: FirstClientComponent,
    children: [
      { path: 'project1', component: Project1Component },
      { path: 'project2', component: Project2Component },
      { path: 'project3', component: Project3Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Client1RoutingModule { }
