import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceNaoRelacionalService {

  /* 4 - Enviando valores de um Service para outros componentes distantes */
  readonly newInput = new EventEmitter();

  constructor() { }

  /* 4 - Método para enviar os valores para outros componentes distantes */
  emitNewInput(value: any) {
    this.newInput.emit(value);
  }

}
