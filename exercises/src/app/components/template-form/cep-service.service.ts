import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  constructor(private httpCliente: HttpClient) { }

  buscaCep(cep: string) {
    return this.httpCliente.get(`//viacep.com.br/ws/${cep}/json`);
  }

  postCep(form: any) {
    return this.httpCliente.post('https://httpbin.org/post', JSON.stringify(form.value)); //https://httpbin.org/post, endereço de teste
  }
}
