import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) { }

  listGet(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.API);  //Get
  }

  listById(id: number) { //GetId
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }

  createPost(curso: string) {  //Post
    return this.http.post(this.API, curso).pipe(take(1));
  }

  updatePut(curso: any) {  //Put
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1));
  }

  removeDelete(id: number) {  //Delete
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}

