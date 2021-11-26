import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-filho',
  templateUrl: './component-filho.component.html',
  styleUrls: ['./component-filho.component.css']
})
export class ComponentFilhoComponent implements OnInit {

  @Input() informacaoFilho: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
