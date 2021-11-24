import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoServiceService {

  getCursos() {  //método
    return ['Java', 'Python', 'HTML', 'CSS'];
  }

}
