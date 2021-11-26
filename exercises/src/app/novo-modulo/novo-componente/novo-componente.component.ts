import { Component, OnInit } from '@angular/core';

import { NovoServiceService } from './novo-service/novo-service.service'; // novo service

@Component({
  selector: 'app-novo-componente',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.css']
})
export class NovoComponenteComponent implements OnInit {

  cursos: string[] = [];  //atributo

  constructor(private novoService: NovoServiceService) { // as injeções de dependências são feitas dentro do construtor

  }

  ngOnInit(): void {
    this.cursos = this.novoService.getCursos();
  }

  onSalvar(valor: string) {
    this.novoService.addCurso(valor);
  }

}
