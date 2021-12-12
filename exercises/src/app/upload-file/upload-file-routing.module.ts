import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadFileComponent } from '../components/upload-file/upload-file.component';

const routes: Routes = [
  { path: 'upload', component: UploadFileComponent },
  { path: '', pathMatch: 'full', redirectTo: 'upload' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UploadFileRoutingModule { }
