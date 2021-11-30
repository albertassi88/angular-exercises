import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursoDetalheComponent } from './components/curso-detalhe/curso-detalhe.component';
import { LoginComponent } from './components/login/login.component';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cursos", component: CursosComponent },
  { path: "curso/:id", component: CursoDetalheComponent },
  { path: "login", component: LoginComponent },
  { path: "nao-encontrado", component: NaoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
