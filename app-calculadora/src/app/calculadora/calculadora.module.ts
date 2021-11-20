import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';  //componente calculadora criado

import { CalculadoraService } from './services/calculadora.service';  // service criado

@NgModule({
  declarations: [
    CalculadoraComponent  //componente calculadora criado
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculadoraComponent  //componente calculadora criado
  ],
  providers: [
    CalculadoraService   // service criado
  ]
})
export class CalculadoraModule { }
