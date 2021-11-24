import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoComponenteComponent } from './novo-componente/novo-componente.component'; //Novo Componente

@NgModule({
  declarations: [
    NovoComponenteComponent  //Novo Componente
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NovoComponenteComponent  //Novo Componente
  ]
})
export class NovoModuloModule { }
