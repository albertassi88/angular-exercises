import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';


const appRoutes: Routes = [
  { path: '', component: AlunoDetalheComponent, children: [
    { path: 'novo', component: AlunoFormComponent } //Rotas filhas
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})

export class AlunosRoutingModule { }
