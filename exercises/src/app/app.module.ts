import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NovoModuloModule } from './novo-modulo/novo-modulo.module';  //novo módulo

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NovoModuloModule  //novo módulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
