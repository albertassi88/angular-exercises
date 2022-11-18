/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalculadoraService } from './calculadora.service';
import { LogServiceService } from './logService.service';

describe('Service: Calculadora', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should ...', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));
});


//teste


describe('CalculadoraService - Exemplo 1', () => {

  let calculadora: CalculadoraService,   //inicializar as variáveis
      logService: any;

  beforeEach( () => { //antes de cada bloco de teste, tudo que esta dentro de beforeEach será executado.
    logService = jasmine.createSpyObj('LogServiceService', ['log']); //espionar o método log que esta no logService.
    calculadora = new CalculadoraService(logService); //instanciar o serviço, passando como parâmetro o logService que esta no CalculadoraService.
  });

  it('Verificar quantas vezes a função é chamada', () => {
    const resultSomar = calculadora.somar(2, 2);
    expect(resultSomar).toBe(4); //testar a soma dos números.
    expect(logService.log).toHaveBeenCalledTimes(1); //testa se a função log é chamada uma única vez.
  })
});


describe('CalculadoraService - Exemplo 2', () => {

  let calculadora: CalculadoraService,   //inicializar as variáveis
      logService: any;

  beforeEach( () => { //antes de cada bloco de teste, tudo que esta dentro de beforeEach será executado.
    logService = jasmine.createSpyObj('LogServiceService', ['log']); //espionar o método log que esta no logService.

    TestBed.configureTestingModule({ //injeção de dependência
      providers: [
        CalculadoraService,
        {provide: LogServiceService, useValue: logService}
      ]
    });

    calculadora = TestBed.get(CalculadoraService);
  });

  it('Verificar quantas vezes a função é chamada', () => {
    const resultSomar = calculadora.somar(2, 2);
    expect(resultSomar).toBe(4); //testar a soma dos números.
    expect(logService.log).toHaveBeenCalledTimes(1); //testa se a função log é chamada uma única vez.
  })
});
