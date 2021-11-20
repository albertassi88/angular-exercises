import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora'; // Módulo calculadora

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculadoraModule  // Módulo calculadora
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
