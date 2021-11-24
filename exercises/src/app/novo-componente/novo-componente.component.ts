import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.css']
})
export class NovoComponenteComponent {

  exemplo1: string = 'Exemplo1';

  getExemplo2() {
    return 'Exemplo2';
  }

  exemplo3 = 'https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg'

  botaoExemplo4() {
    alert('Botão Clicado');
  }

  onKeyUpExemplo5({target}: KeyboardEvent) {
    console.log((<HTMLInputElement>target).value)
  }

  valorSalvo: string = '';
  salvarExemplo6(valor: string) {
    this.valorSalvo = valor;
  }

  isMouseOver: boolean = false;
  onMouseExemplo7() {
    this.isMouseOver = !this.isMouseOver;
  }

}
