import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosGeralComponent } from './cursos-geral/cursos-geral.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';

//Routing dos cursos

const appRoutes: Routes = [
  { path: '', component: CursosListComponent },  //deixar o path em branco com '' pois já estamos passando a string no app.routing.module
  { path: 'novo', component: CursosGeralComponent }  //vai ficar cursos/novo
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],  //usar o forChild
  exports: [RouterModule]
})

export class CursosRoutingModule { }
