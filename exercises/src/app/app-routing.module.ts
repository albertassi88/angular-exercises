import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DataFormComponent } from './components/data-form/data-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

const appRoutes: Routes = [
  { path: "templateForm", component: TemplateFormComponent },
  { path: "dataForm", component: DataFormComponent },
  { path: "", pathMatch: 'full', redirectTo: 'dataForm' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
