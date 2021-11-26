import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-pai',
  templateUrl: './component-pai.component.html',
  styleUrls: ['./component-pai.component.css']
})
export class ComponentPaiComponent implements OnInit {

  @Output() informacaoPai: number[] = [1, 2, 3, 4];

  constructor() { }

  ngOnInit(): void {
  }

}
