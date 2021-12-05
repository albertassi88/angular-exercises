import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DataFormComponent } from './data-form.component';
import { CampoControlErroComponent } from './../campo-control-erro/campo-control-erro.component';

@NgModule({
  declarations: [
    DataFormComponent,
    CampoControlErroComponent //componente CampoControlErroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, //importar para poder trabalhar com data-form
    HttpClientModule //import o HttpClientModule
  ],
  providers: []
})
export class DataFormModule { }
