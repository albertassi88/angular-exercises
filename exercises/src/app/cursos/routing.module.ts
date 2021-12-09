import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { FormCursosComponent } from './form-cursos/form-cursos.component';
import { CursoResolverGuard } from './guards/curso-resolver.guard';

const routes: Routes = [
  { path: '', component: CursosListaComponent},
  {
    path: 'novo',
    component: FormCursosComponent,
    resolve: {  //guard
      curso: CursoResolverGuard
    }
  },
  {
    path: 'editar/:id',
    component: FormCursosComponent,
    resolve: {  //guard
      curso: CursoResolverGuard
    }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ]
})
export class RoutingModule { }
