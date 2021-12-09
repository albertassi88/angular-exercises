import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { CursosService } from './../cursos.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-form-cursos',
  templateUrl: './form-cursos.component.html',
  styleUrls: ['./form-cursos.component.css']
})
export class FormCursosComponent implements OnInit {

  formulario: FormGroup;

  constructor(  //injetar as dependências
    private fb: FormBuilder,
    private cursosService: CursosService,
    private location: Location,  //para voltar a rota anterior
    private route: ActivatedRoute  //ActivatedRoute contém os parâmetros da rota
  ) { }

  ngOnInit(): void {

    this.formulario = this.fb.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });

    //forma 1 de fazer

    /**this.route.params.subscribe(
      (params: any) => {
        const id = params.id;
        const curso = this.cursosService.listById(id);
        curso.subscribe(curso => {
          this.updateForm(curso);
        })
      }
    );*/

    //forma 2 de fazer

    this.route.params.pipe(
      map((params: any) => params.id), //map - mapeia o valor recebido e retorna o valor modificado
      switchMap(id => this.cursosService.listById(id)), //switchMap - retorna outro Observable, ele cancela as requisições anteriores e retona o valor do último pedido.
    ).subscribe(curso => this.updateForm(curso));
  }

  //só é usado na forma 1 ou 2 de fazer

  updateForm(curso: any) {  //popular o formulário
    this.formulario.patchValue({
      id: curso.id,
      nome: curso.nome
    })
  }

  onSalvar() {  //Post
    if (this.formulario.valid) {
      if (this.formulario.value.id) {
        this.cursosService.updatePut(this.formulario.value).subscribe(   //Put
          success => {
            alert(`Curso atualizado com sucesso! ${success}`),
            this.location.back();  //para voltar a rota anterior
          },
        )
      } else {
        this.cursosService.createPost(this.formulario.value).subscribe(  //Post
          success => {
            alert(`Curso criado com sucesso! ${success}`),
            this.location.back();  //para voltar a rota anterior
          },
        );
      }
    }
  }

  onCancelar() {

  }

}
