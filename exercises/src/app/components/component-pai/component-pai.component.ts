import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ComponentFilhoComponent }  from "./component-filho/component-filho.component";
import { ChangeDetectorRef } from "@angular/core";

@Component({
  selector: 'app-component-pai',
  templateUrl: './component-pai.component.html',
})
export class ComponentPaiComponent implements OnInit, AfterViewInit {

  // 1 - valor que será enviado para o componente Filho
  valorPai: number[] = [1, 2, 3, 4];


  /* 3 - @ViewChild permite que o componente filho seja injetado no componente pai.
  O @ViewChild permite que o componente pai acessa os métodos e propriedades do componente filho.
  Para o @ViewChild funcionar tem que implementar o ciclo de vida ngAfterViewInit*/
  @ViewChild(ComponentFilhoComponent) child !: ComponentFilhoComponent;


  message: string = "";


  constructor(
    private cd: ChangeDetectorRef, /* 3 - é necessário para tratar o erro quando fazemos a manipulação no ngAfterViewInit*/
    ) { }

  ngOnInit(): void {
  }

  /* 3 - ngAfterViewInit é um ciclo de vida, ele é necessário para obter os métodos e propriedades do componente filho*/
  ngAfterViewInit(): void {
    this.message = this.child.viewChildValorFilho; /* 3 - viewChildValorFilho é a variável que foi inserida do componente filho*/

    this.cd.detectChanges() /* 3 - o detectChanges é necessário para tirar o erro quando fazemos a manipulação no ngAfterViewInit*/
  }


  /* 2 - função que esta declarada no html, para receber o valor enviado pelo componente filho */
  recebeEmit(event: any) {
    console.log(event)
  }


}
