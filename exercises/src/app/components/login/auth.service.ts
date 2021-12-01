import { Usuario } from './usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor() { }

  fazerLogin(usuario: Usuario) {
    if(usuario.nome === 'ruben' && usuario.senha === '1234') {
      this.usuarioAutenticado = true;
    } else {
      this.usuarioAutenticado = false;
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
