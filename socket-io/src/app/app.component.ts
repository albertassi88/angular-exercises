import { WebsocketService } from './socket.service';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(
    private websocket: WebsocketService
  ) {}

  ngAfterViewInit() {

    this.websocket.listenSocket('enviandoParaFront') //recebendo mensagem do back-end
    .subscribe(event => {
      console.log(event);
    });

    this.websocket.sendMessage('enviandoParaBack', 'Front enviando para o back'); //enviando mensagem para o back-end
  }
}


