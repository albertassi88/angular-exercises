import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor( private socket: Socket ) { }

  listenSocket(event: any) {
    return this.socket
        .fromEvent<any>(event)
        .pipe(map(data => data))
  }

  sendMessage(event: any, msg: any) {
    this.socket.emit(event, msg)
  }

}
