import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { FormCursosComponent } from './form-cursos/form-cursos.component';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CursosListaComponent,
    FormCursosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CursosListaComponent,
  ]
})
export class CursosModule { }
