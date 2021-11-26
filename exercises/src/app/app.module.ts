import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';
import { NovaDirective } from './diretiva/nova.directive';  //diretiva criada

@NgModule({
  declarations: [
    AppComponent,
    NovoComponenteComponent,
    NovaDirective,  //diretiva criada
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
