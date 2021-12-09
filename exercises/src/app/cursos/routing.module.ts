import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { FormCursosComponent } from './form-cursos/form-cursos.component';

const routes: Routes = [
  { path: '', component: CursosListaComponent},
  {
    path: 'novo',
    component: FormCursosComponent,
  },
  {
    path: 'editar/:id',
    component: FormCursosComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ]
})
export class RoutingModule { }
