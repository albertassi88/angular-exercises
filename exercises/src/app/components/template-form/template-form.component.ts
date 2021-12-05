import { Component, OnInit } from '@angular/core';
import { CepServiceService } from './cep-service.service';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {



  constructor(private cepService: CepServiceService) { }

  ngOnInit(): void {
  }

  consultaCep({value}: any, form: any) {
    let cep = value.replace(/\D/g, '');
    if (cep !== '') {
      let validaCep = /^[0-9]{8}$/;
      if (validaCep.test(cep)) {
        this.cepService.buscaCep(value).subscribe(dados => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados: any, form: any) {
    form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      rua: dados.logradouro,
      cep: dados.cep,
      numero: '',
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }

  onSubmit(formulario: any) {
    this.cepService.postCep(formulario).subscribe(dados => console.log(dados));
    formulario.form.reset(); //resetar o formulário
  }

}
