import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteNaoComponent } from './componente-nao-relacional-component';

import { ServiceNaoRelacionalService } from './service-nao-relacional.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ComponenteNaoComponent
  ],
  exports: [ComponenteNaoComponent],
  providers: [ServiceNaoRelacionalService]
})
export class NaoRelacionalModule { }
