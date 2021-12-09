import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Curso } from './curso';
import { HerancaCrud } from './heranca-crud/heranca-crud'; //Crud genérico que vai ser herdado

@Injectable({
  providedIn: 'root'
})
export class CursosService extends HerancaCrud<Curso>{  //O service CursosService esta herdando as informações do HerancaCrud

  constructor(public override http: HttpClient) {
    super(http, 'http://localhost:3000/cursos'); //reescrevendo o http
  }

}

