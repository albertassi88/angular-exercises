import { Injectable } from '@angular/core';
import { LogServiceService } from './logService.service';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor(public logService: LogServiceService) { }

  somar(n1: number, n2: number) {
    this.logService.log('Somar');
    return n1 + n2;
  }


}
