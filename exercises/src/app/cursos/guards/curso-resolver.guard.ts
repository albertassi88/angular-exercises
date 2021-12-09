import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curso } from '../curso';

import { CursosService } from './../cursos.service';

@Injectable({
  providedIn: 'root'
})

export class CursoResolverGuard implements Resolve<Curso> {

  constructor(private cursoService: CursosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : Observable<Curso> {
      if (route.params && route.params['id']) {
        return this.cursoService.listById(route.params['id']);
      }

      return of ({ //of - retorna um observable a partir do objeto informado que é o Curso
        id: null,
        nome: null
      })
    }

}
