import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ApisModule } from './apis/apis.module';
import { CourseComponent } from './course/course.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    ApisModule
  ],
  declarations: [
    ButtonComponent,
    InputComponent,
    CourseComponent
   ],
  exports: [
    ButtonComponent,
    InputComponent,
    ApisModule,
    CourseComponent
  ],
})
export class ComponentsModule { }
