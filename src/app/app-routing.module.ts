import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './pages/alunos/aluno.controller';

const routes: Routes = [

    { path        : '', pathMatch   : 'full',  redirectTo  : 'aluno' },
    {path: 'aluno' , component : AlunoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
