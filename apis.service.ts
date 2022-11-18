import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

constructor(private http: HttpClient) { }

  get() {
    return this.http.get('https://swapi-trybe.herokuapp.com/api/planets')
      .pipe(map((res: any) => res['results']));
  }

  getId(id: number) {
    return this.http.get(`https://swapi-trybe.herokuapp.com/api/planets/${id}`)
    .pipe(map((res: any) => res['results']));
  }

  put(id: number, body: any) {
    return this.http.put(`https://swapi-trybe.herokuapp.com/api/planets/${id}`, body);
  }

}
