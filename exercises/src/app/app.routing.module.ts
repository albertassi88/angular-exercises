import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: "cursos", component: CursosComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: '**', component: PaginaNaoEncontradaComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
