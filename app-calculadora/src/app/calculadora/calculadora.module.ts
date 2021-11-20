import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';  //componente calculadora criado

@NgModule({
  declarations: [
    CalculadoraComponent  //componente calculadora criado
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculadoraComponent  //componente calculadora criado
  ]
})
export class CalculadoraModule { }
