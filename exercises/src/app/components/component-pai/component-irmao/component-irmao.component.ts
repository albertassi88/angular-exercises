import { Component, Input, OnInit } from '@angular/core';

import { ServiceNaoRelacionalService } from './../../../componente-nao-ralacional/service-nao-relacional.service';

@Component({
  selector: 'app-component-irmao',
  templateUrl: './component-irmao.component.html',
})
export class ComponentIrmaoComponent implements OnInit {

  /* 1 - @Input() recebe um valor, no componente irmão espera receber o valor do componente pai*/
  @Input() inputReceberValorDoPai: number[] = [];


  constructor(
    public navService: ServiceNaoRelacionalService /* 4 - inserindo o service */
  ) { }

  ngOnInit() { }


  /* 4 - ngOnChanges é um ciclo de vida para receber o valor, pode ser usado no ciclo de vida
  ngOnInit também.
  O uso do subscribe é para se inscrever e receber o valor. */
  ngOnChanges() {
    this.navService.newInput.subscribe(r => {
      console.log(r)
    })
  }

}
