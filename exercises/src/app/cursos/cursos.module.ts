import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { FormCursosComponent } from './form-cursos/form-cursos.component';

@NgModule({
  declarations: [
    CursosListaComponent,
    FormCursosComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CursosListaComponent,
    FormCursosComponent
  ]
})
export class CursosModule { }
