import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoServiceService {

  private cursos: string[] = ['Java', 'Python', 'HTML', 'CSS'];

  getCursos() {  //método
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
  }

}
