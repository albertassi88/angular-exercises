import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  log(message: string) {
    console.log(message);
  }
}
