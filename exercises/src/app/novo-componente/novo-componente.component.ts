import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.css']
})
export class NovoComponenteComponent implements OnInit {

  nomeUrl: string;  //atributo

  cursos: string[] = ['Java', 'Js', 'Angular', 'Python'];

  constructor() {
    this.nomeUrl = 'www.uol.com.br';
  }

  ngOnInit(): void {
  }

}
