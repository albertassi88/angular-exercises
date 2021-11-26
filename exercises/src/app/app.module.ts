import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentPaiComponent } from './components/component-pai/component-pai.component';
import { ComponentFilhoComponent } from './components/component-filho/component-filho.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentPaiComponent,
    ComponentFilhoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    ComponentPaiComponent,
    ComponentFilhoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
