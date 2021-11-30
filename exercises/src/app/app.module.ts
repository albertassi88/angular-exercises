import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { CursoDetalheComponent } from './components/curso-detalhe/curso-detalhe.component';
import { CursosService } from './components/cursos/cursos.service';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    HomeComponent,
    LoginComponent,
    CursoDetalheComponent,
    NaoEncontradoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
