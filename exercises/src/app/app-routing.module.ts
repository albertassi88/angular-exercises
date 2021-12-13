import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'cursos', loadChildren: () => import('../app/cursos/cursos.module').then(m => m.CursosModule) }, //loadChildren
  { path: 'alunos', loadChildren: () => import('../app/alunos/alunos.module').then(m => m.AlunosModule) }, //loadChildren
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
