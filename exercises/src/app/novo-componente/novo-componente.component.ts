import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.css']
})
export class NovoComponenteComponent {

  nomeUrl: string;  //atributo

  cursosNgFor: string[] = ['Java', 'Js', 'Angular', 'Python'];

  constructor() {
    this.nomeUrl = 'www.uol.com.br';
  }

  cursosNgIf: string[] = [];

  mostarCursosNgIf: boolean = true;

  onMostrarCursosNgIf() {
    this.mostarCursosNgIf = !this.mostarCursosNgIf;
  }

  abaNgSwitch: string = 'home';

  favoritoNgClass: boolean = false;

  onMostrarFavorito() {
    this.favoritoNgClass = !this.favoritoNgClass;
  }

  ativoNgStyle: boolean = false;

  mudarAtivoNgStyle() {
    this.ativoNgStyle = !this.ativoNgStyle;
  }

}
