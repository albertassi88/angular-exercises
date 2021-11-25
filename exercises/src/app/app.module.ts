import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CicloDeVidaComponentComponent } from './ciclo-de-vida-component/ciclo-de-vida-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CicloDeVidaComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
