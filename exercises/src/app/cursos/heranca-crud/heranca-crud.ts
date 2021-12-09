import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-heranca-crud',
  templateUrl: './heranca-crud.component.html',
  styleUrls: ['./heranca-crud.component.css']
})
export class HerancaCrud<T> {

  constructor(
    public http: HttpClient,
    @Inject(String) public API_URL: string
  ) { }

  listGet() {
    return this.http.get<T[]>(this.API_URL);  //Get
  }

  listById(id: number) { //GetId
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  createPost(record: T) {  //Post
    return this.http.post(this.API_URL, record).pipe(take(1));
  }

  updatePut(record: T) {  //Put
    return this.http.put(`${this.API_URL}/${record['id']}`, record).pipe(take(1));
  }

  removeDelete(id: number) {  //Delete
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }
}
