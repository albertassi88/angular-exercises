import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida-component.component.html',
  styleUrls: ['./ciclo-de-vida-component.component.css']
})
export class CicloDeVidaComponentComponent implements OnChanges, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() valorInicial:number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnChanges(): void {  //Antes do ngOnInit e quando o valor property-binding é atualizado
    this.log('ngOnChanges');
  }

  ngOnInit(): void {  //Quando o componente é inicializado
    this.log('ngOnInit');
  }

  ngDoCheck(): void {  //A cada ciclo de verificação de mudança
    this.log('ngDoCheck');
  }

  ngAfterContentInit(): void {  //Depois de inserir o conteúdo externo na view
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {  //A cada verificação de conteúdo inserido
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {  //A cada verificação de conteúdo/conteúdo filho
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {  //Antes da diretiva/component ser destruido
    this.log('ngonDestroy');
  }

  private log(hook: string) {
    console.log(hook)
  }

}
