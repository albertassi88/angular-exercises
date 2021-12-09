import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from './../cursos.service';
import { catchError, EMPTY, Subject } from 'rxjs';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent implements OnInit {

  exemploGet: any;
  errorGet = new Subject<boolean>();

  cursoSelecionado: Curso;

  public idCurso: number;

  public visible: boolean = true;
  @ViewChild('deleteModal') deleteModal: any  //para fazer referência a div com a variavel #deleteModal no cursos-lista.component.html

  constructor(
    private cursoService: CursosService,
    private router: Router, //colocar o id na rota
    private route: ActivatedRoute  //ActivatedRoute contém os parâmetros da rota
  ) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.exemploGet = this.cursoService.listGet()  // exemplo Get
    .pipe(catchError(error => {   //capturar erro
      this.errorGet.next(true);
      return EMPTY;
    })) ;
  }

  onEdit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route }); //colocar o id na rota
  }

  onDelete(id: number) {
    this.idCurso = id;
    this.visible = !this.visible
  }

  onConfirmDelete() {
    this.cursoService.removeDelete(this.idCurso).subscribe(
      sucess => {alert('Curso excluído com sucesso!'), this.onRefresh()}
    )
    this.visible = !this.visible;
  }

  onDeclineDelete() {
    this.visible = !this.visible;
  }



}
