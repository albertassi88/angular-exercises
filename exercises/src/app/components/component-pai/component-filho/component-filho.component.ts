import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ServiceNaoRelacionalService } from './../../../componente-nao-ralacional/service-nao-relacional.service';

@Component({
  selector: 'app-component-filho',
  templateUrl: './component-filho.component.html',
})
export class ComponentFilhoComponent implements OnInit {

  /* 1 - @Input() recebe um valor, no componente filho espera receber o valor do componente pai*/
  @Input() inputReceberValorDoPai: number[] = [];


  /* 2 - @Output() envia um valor, no componente filho será enviado um valor para o componente pai.
  Para enviar valores com o @output() requer um evento, exemplo clique em um botão.*/
  @Output() outputEnviarValorParaOPai = new EventEmitter<String>();


  /* 3 - Valor que será enviado para o componente pai, usando o @ViewChild*/
  viewChildValorFilho: string = "oiiiii";


  constructor(
    public navService: ServiceNaoRelacionalService /* 4 - inserindo o service */
  ) { }

  ngOnInit(): void {
  }

  /* 2 - tem que associar o outputEnviarValorParaOPai à propriedate da tag filho que esta no componente pai*/
  botaoEnviar() {
    this.outputEnviarValorParaOPai.emit('1234');
  }

  /* 4 - Metódo inserido no button no html para enviar um valor para outro componente */
  botaoService() {
    this.navService.emitNewInput('enviando isso');
  }

}
