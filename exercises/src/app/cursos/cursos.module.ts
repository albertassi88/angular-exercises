import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosGeralComponent } from './cursos-geral/cursos-geral.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';

import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
  declarations: [
  //  CursosGeralComponent,
    CursosListComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],

})
export class CursosModule { } //como estamos usando o loadChildren nos cursos, não podemos importar o CursosModule em lugar nenhum
