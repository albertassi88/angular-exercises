import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApisComponent } from './apis.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ApisComponent],
  exports: [ApisComponent],
})
export class ApisModule { }
