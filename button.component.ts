import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  palavra = '';
  @Input() inputValor: any;  // tem que testar o input

  constructor() { }

  ngOnInit() { }

  handleButton() {
    this.palavra = 'Sucesso';
  }

}
