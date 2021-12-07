import { Component, OnInit } from '@angular/core';

import { CursosService } from './../cursos.service';
import { catchError, EMPTY, Subject } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent implements OnInit {

  exemploGet: any;
  errorGet = new Subject<boolean>();

  constructor(private cursoService: CursosService) { }

  ngOnInit(): void {
    this.exemploGet = this.cursoService.list()  // exemplo Get
    .pipe(catchError(error => {   //capturar erro
      this.errorGet.next(true);
      return EMPTY;
    })) ;
  }




}
