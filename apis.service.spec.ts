/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApisService } from './apis.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

describe('Service: Apis', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApisService]
    });
  });

  it('should ...', inject([ApisService], (service: ApisService) => {
    expect(service).toBeTruthy();
  }));
});

//teste

describe('ApisService', () => {
  let dadosApiService: ApisService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApisService,
      ]
    });
    dadosApiService = TestBed.get(ApisService);
    httpTestingController = TestBed.get(HttpTestingController)
  })

  it('testar o retorno do get', () => {
    dadosApiService.get().subscribe(result => {
      expect(result.length).toBe(10); //testar a quantidade
    });
    const req = httpTestingController.expectOne('https://swapi-trybe.herokuapp.com/api/planets');
    expect(req.request.method).toEqual('GET'); //testar o método (Get)
  });


  it('testar o retorno do get pelo id', () => {
    dadosApiService.getId(4).subscribe(result => {
      expect(result).toBeTruthy(); //verificar se os valores recebidos são verdadeiros.
      expect(result.id).toBe(4);
    });
    const req = httpTestingController.expectOne('https://swapi-trybe.herokuapp.com/api/planets/4');
    expect(req.request.method).toEqual('GET'); //testar o método (Get)
  });


  it('testar o metódo put', () => {
    const changes = {titles: { description: 'novo nome' }};
    dadosApiService.put(4, changes).subscribe((result: any) => {
      expect(result['id']).toBe(4);
    });
    const req = httpTestingController.expectOne('https://swapi-trybe.herokuapp.com/api/planets/4');
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body.titles.description).toEqual(changes.titles.description); //verificar se o body foi salvo.
  });


  it('testar o error na requisição', () => {
    const changes = {titles: { description: 'novo nome' }};
    dadosApiService.put(4, changes).subscribe(result => {
      fail('Error');
      (error: HttpErrorResponse) => {
        expect(error.status).toBe(500);
      }
    });
    const req = httpTestingController.expectOne('https://swapi-trybe.herokuapp.com/api/planets/4');
    expect(req.request.method).toEqual('PUT');
    req.flush('Erro recebido', {status: 500, statusText: 'Internal Server Error'});
  });

  afterEach(() => { //vai ser chamado no final de cada teste.
    httpTestingController.verify(); //isso garante que nenhuma outra requisição esta sendo feita acidentalmente.
  });
});
