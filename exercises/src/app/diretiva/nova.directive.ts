import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[app-diretiva]'
})
export class NovaDirective {

  constructor(
    //ElementRef e Renderer2
    private elementRef: ElementRef, //inserindo o ElementRef e Renderer2 como injeção de dependência
    private renderer2: Renderer2) {

    this.renderer2.setStyle(this.elementRef.nativeElement,
    'background-color', 'yellow')
  }

}
