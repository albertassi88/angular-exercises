import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { RoutingModule } from './cursos/routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    CursosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
