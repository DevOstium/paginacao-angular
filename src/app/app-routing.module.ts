import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './pages/alunos/aluno.controller';
import { UsuarioComponent } from './pages/usuarios/usuario/usuario.component';
import { UsuarioPaginnacao } from './pages/usuarios/paginacao/usuario-paginacao';

const routes: Routes = [

    { path        : '', pathMatch   : 'full',  redirectTo  : 'paginacao' },
    {path: 'aluno' , component : AlunoComponent},
    {path: 'usuario' , component : UsuarioComponent},
    {path: 'paginacao' , component : UsuarioPaginnacao}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
