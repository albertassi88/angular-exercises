import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoComponenteComponent } from './novo-componente/novo-componente.component';  //novo componente
import { NovoServiceService } from './novo-componente/novo-service/novo-service.service';  //novo service


@NgModule({
  declarations: [
    NovoComponenteComponent  //novo componente
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NovoComponenteComponent  //novo componente
  ],
  providers: [
    NovoServiceService  //novo service
  ]
})
export class NovoModuloModule { }
