import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NovoModuloModule } from './novo-modulo/novo-modulo.module'; //Novo Módulo

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NovoModuloModule //Novo Módulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
