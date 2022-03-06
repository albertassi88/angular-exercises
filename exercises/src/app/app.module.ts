import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentPaiComponent } from './components/component-pai/component-pai.component';
import { ComponentFilhoComponent } from './components/component-pai/component-filho/component-filho.component';
import { ComponentIrmaoComponent } from './components/component-pai/component-irmao/component-irmao.component';

import { NaoRelacionalModule } from './componente-nao-ralacional/nao-relacional.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentPaiComponent,
    ComponentFilhoComponent,
    ComponentIrmaoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NaoRelacionalModule
  ],
  exports: [
    ComponentPaiComponent,
    ComponentFilhoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
